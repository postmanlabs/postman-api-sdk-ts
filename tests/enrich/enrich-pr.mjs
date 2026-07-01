// Enriches the SDK pull request the Postman server opens. Scaffolded into the SDK
// repo at .github/scripts/enrich-pr.mjs and run by .github/workflows/enrich-pr.yml.
//
// Self-contained ESM — no dependencies, runs with plain `node` (the SDK repo has no
// tsx). The pure functions below are unit-tested by the factory; the run block at the
// bottom is thin I/O (the workflow prepares files, this assembles the PR body).

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

/** Reduces the parsed `oasdiff breaking -f json` array to a flag + one-line summary. */
export function summarizeOasdiff(breakingParsed) {
  const count = Array.isArray(breakingParsed) ? breakingParsed.length : 0;
  return {
    breaking: count > 0,
    summary: count > 0 ? `${count} breaking change(s) detected` : 'none detected',
  };
}

const ENRICH_START = '<!-- sdk-factory:enrich:start -->';
const ENRICH_END = '<!-- sdk-factory:enrich:end -->';

/** Builds the marker-wrapped enrichment block, replacing any prior block in `existingBody`. */
export function renderPrBody({ version, diffMarkdown, breaking, ciRunUrl, existingBody = '' }) {
  const breakingLine = breaking
    ? '**Breaking changes:** ⚠️ yes — review the diff below'
    : '**Breaking changes:** ✅ none detected';

  const diffSection = diffMarkdown.trim()
    ? `<details><summary>Spec diff (old → new)</summary>\n\n${diffMarkdown}\n\n</details>`
    : '_No spec changes detected against the previous published version._';

  const testsLine = ciRunUrl
    ? `**Integration tests:** see the [Test workflow run](${ciRunUrl}) — branch protection requires it green before merge.`
    : '**Integration tests:** see the Test workflow checks on this PR — branch protection requires them green before merge.';

  const block = [
    ENRICH_START,
    '## SDK publish summary',
    '',
    `**Target version:** \`${version.replace(/`/g, '\\`')}\``,
    breakingLine,
    '',
    diffSection,
    '',
    testsLine,
    ENRICH_END,
  ].join('\n');

  const start = existingBody.indexOf(ENRICH_START);
  const end = existingBody.indexOf(ENRICH_END);
  if (start !== -1 && end !== -1) {
    return existingBody.slice(0, start) + block + existingBody.slice(end + ENRICH_END.length);
  }
  return existingBody ? `${existingBody}\n\n${block}` : block;
}

// --- run block: thin I/O, driven by the workflow via env file paths ---
if (import.meta.url === `file://${process.argv[1]}`) {
  const { readFileSync, writeFileSync } = await import('node:fs');
  const read = (p) => {
    try {
      return p ? readFileSync(p, 'utf8') : '';
    } catch {
      return '';
    }
  };

  const version = extractSpecVersion(readFileSync(process.env.SPEC_PATH, 'utf8'));
  const diffMarkdown = read(process.env.DIFF_PATH);
  let breakingParsed = [];
  const breakingRaw = read(process.env.BREAKING_PATH).trim();
  if (breakingRaw) {
    try {
      breakingParsed = JSON.parse(breakingRaw);
    } catch {
      throw new Error(`oasdiff breaking produced unparseable output: ${breakingRaw.slice(0, 200)}`);
    }
  }
  const { breaking } = summarizeOasdiff(breakingParsed);

  const body = renderPrBody({
    version,
    diffMarkdown,
    breaking,
    ciRunUrl: process.env.CI_RUN_URL || undefined,
    existingBody: read(process.env.CURRENT_BODY_PATH).trim(),
  });

  writeFileSync(process.env.OUT_PATH, body);
  console.log(`Rendered enrichment (version ${version}, breaking=${breaking}) → ${process.env.OUT_PATH}`);
}
