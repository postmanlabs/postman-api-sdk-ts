// Self-contained ESM — no dependencies, runs with plain `node` (the SDK repo has no tsx).
// Shared by the factory (deliver-custom-code, generate) and by the scaffolded
// tests/publish/resolve-version.mjs downstream.

/**
 * Returns `info.version` from an OpenAPI spec — the version that will be published.
 * Regex-based so it needs no YAML dependency in the SDK repo. Walks the top-level
 * `info:` block and returns the first `version:` nested under it.
 */
export function extractSpecVersion(specYaml) {
  const lines = specYaml.split('\n');
  let inInfo = false;
  for (const line of lines) {
    const m = line.match(/^(\s*)(\S[^:]*):/);
    if (!m) continue;
    const indent = m[1].length;
    const key = m[2];
    if (!inInfo) {
      if (key === 'info' && indent === 0) inInfo = true;
    } else if (indent === 0) {
      break; // left the info block without finding a version
    } else if (key === 'version') {
      const value = line.slice(line.indexOf(':') + 1).trim().replace(/^["']|["']$/g, '');
      if (value) return value;
    }
  }
  throw new Error('spec has no info.version — cannot determine the target publish version');
}
