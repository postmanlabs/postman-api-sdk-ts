// The single per-SDK indirection point. Resolves the generated client class from
// THIS repo's own `src/index.ts` at runtime, so it works regardless of what the
// generator named the class — the factory's local `--name` generation and the
// downstream server generation derive DIFFERENT class names from the same spec.
// See harness/resolve-client.ts for why a hardcoded name can't be trusted here.
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as sdk from '../../src/index';
import { resolveClientClass } from '../harness/resolve-client';

const INDEX_SOURCE = readFileSync(
  resolve(dirname(fileURLToPath(import.meta.url)), '../../src/index.ts'),
  'utf8',
);

export const SdkClient = resolveClientClass(INDEX_SOURCE, sdk as Record<string, unknown>);
