// Prints the spec's info.version — the npm version the publish workflow ships.
// Scaffolded to tests/publish/resolve-version.mjs and run by .github/workflows/publish.yml.

import { readFileSync } from 'node:fs';
import { extractSpecVersion } from '../spec-version.mjs';

const specPath = process.env.SPEC_PATH;
if (!specPath) throw new Error('SPEC_PATH is required (path to the spec to read info.version from)');
process.stdout.write(extractSpecVersion(readFileSync(specPath, 'utf8')));
