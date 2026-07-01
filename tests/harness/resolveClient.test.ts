import { describe, it, expect } from 'vitest';
import { detectClientClassName, resolveClientClass } from './resolve-client';

// A generated index.ts re-exports every service class, but declares exactly one
// `export class` — the client. Model that shape here.
const indexSource = (clientName: string) =>
  [
    "export * from './services/collections';",
    "export * from './services/workspaces';",
    "export { Environment } from './http/environment';",
    `export class ${clientName} {`,
    '  public readonly collections: CollectionsService;',
    '}',
  ].join('\n');

describe('detectClientClassName', () => {
  it('finds the single declared client class among service re-exports', () => {
    expect(detectClientClassName(indexSource('PostmanApiSdkSourceOverlayed'))).toBe(
      'PostmanApiSdkSourceOverlayed',
    );
  });

  it('works for any postman-like SDK client name', () => {
    expect(detectClientClassName('export class SomeOtherApi {')).toBe('SomeOtherApi');
  });

  it('throws when no exported class exists', () => {
    expect(() => detectClientClassName("export * from './services';")).toThrow(/client class/);
  });

  it('throws when multiple declared classes are ambiguous', () => {
    expect(() => detectClientClassName('export class A {}\nexport class B {}')).toThrow(
      /ambiguous/i,
    );
  });
});

describe('resolveClientClass', () => {
  // The regression: the factory's local generation names the class one way
  // (via `--name @postman/api-sdk`), the downstream server generation
  // names it another (inheriting the Cloud spec name). The harness must resolve
  // whichever name the *repo it runs in* actually uses — never a hardcoded one.
  const makeNamespace = (clientName: string) => {
    class Client {}
    class CollectionsService {}
    return {
      [clientName]: Client,
      CollectionsService,
      Environment: { Default: 'https://api.postman.com' },
    } as Record<string, unknown>;
  };

  it('resolves the downstream (server-generated) client name', () => {
    const ns = makeNamespace('PostmanApiSdkSourceOverlayed');
    const Client = resolveClientClass(indexSource('PostmanApiSdkSourceOverlayed'), ns);
    expect(Client).toBe(ns.PostmanApiSdkSourceOverlayed);
    expect(new Client({ apiKey: 'k' })).toBeInstanceOf(Client as new () => object);
  });

  it('resolves a differently-named client (factory-local `--name` generation)', () => {
    const ns = makeNamespace('PostmanPostmanApiSdk');
    const Client = resolveClientClass(indexSource('PostmanPostmanApiSdk'), ns);
    expect(Client).toBe(ns.PostmanPostmanApiSdk);
  });

  it('never picks a service class even though the namespace re-exports many', () => {
    const ns = makeNamespace('PostmanApiSdkSourceOverlayed');
    const Client = resolveClientClass(indexSource('PostmanApiSdkSourceOverlayed'), ns);
    expect(Client).not.toBe(ns.CollectionsService);
  });

  it('throws a clear error when the detected class is not an exported constructor', () => {
    // Source declares the client, but the namespace lacks it (source/export drift).
    expect(() =>
      resolveClientClass(indexSource('MissingClient'), { CollectionsService: class {} }),
    ).toThrow(/not an exported constructor/);
  });
});
