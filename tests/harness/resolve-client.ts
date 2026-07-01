/**
 * Name-agnostic resolution of the generated SDK client class.
 *
 * The client class name is NOT stable across generations: the factory's own
 * local generation passes `--name @postman/postman-api-sdk` (deriving a class
 * like `PostmanPostmanApiSdk`), while the server generation that produces the
 * downstream repo inherits the Cloud spec name (deriving `PostmanApiSdkSourceOverlayed`).
 * Since this harness is delivered to the server-generated repo but only ships
 * `tests/**` (never `src/`), it must resolve the client from whatever `src/index.ts`
 * that repo actually contains — hardcoding a detected name couples the shim to one
 * generation and breaks in the other (the "SdkClient is not a constructor" failure).
 *
 * `src/index.ts` re-exports every service class via `export * from './services/*'`,
 * so the client can't be picked from the module namespace by "the only class" — the
 * namespace holds ~30 `*Service` classes too. But the client is the single class
 * *declared* in `index.ts` itself (services are re-exports, not `export class` lines),
 * so we detect its name from the source text and look that named export up at runtime.
 */

/** A constructor for the generated SDK client. Instances are reflected over, not typed statically. */
export type SdkClientConstructor = new (config: Record<string, unknown>) => object;

/**
 * Finds the single client class *declared* in a generated SDK entry file. Service
 * classes reach the namespace via `export * from './services/*'`, so only the client
 * appears as an `export class` line here.
 */
export function detectClientClassName(indexSource: string): string {
  const matches = [...indexSource.matchAll(/^export class (\w+)/gm)].map((m) => m[1]);
  if (matches.length === 0) {
    throw new Error('could not detect the generated client class in src/index.ts');
  }
  if (matches.length > 1) {
    throw new Error(`ambiguous client class, found: ${matches.join(', ')}`);
  }
  return matches[0];
}

/**
 * Resolves the client constructor from a generated SDK's `index.ts` source plus its
 * imported module namespace: detect the declared class name, then pick that export.
 */
export function resolveClientClass(
  indexSource: string,
  moduleExports: Record<string, unknown>,
): SdkClientConstructor {
  const name = detectClientClassName(indexSource);
  const value = moduleExports[name];
  if (typeof value !== 'function') {
    throw new Error(
      `client class "${name}" detected in src/index.ts is not an exported constructor ` +
        `(got ${typeof value}) — the SDK entry point and its source disagree`,
    );
  }
  return value as SdkClientConstructor;
}
