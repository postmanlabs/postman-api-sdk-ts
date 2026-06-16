/**
 * Guarantees the dynamic suites cover ALL generated SDK code, in both directions:
 *  - every spec operation maps to a generated SDK method (nothing silently dropped),
 *  - every generated SDK method maps to a spec operation (nothing generated escapes
 *    the dynamic tests — a regenerated SDK with new endpoints fails here until the
 *    spec that produced it is the one driving the tests).
 */

import { describe, expect, it } from 'vitest';
import { methodNameForOperationId } from '../harness/sdk-reflection';
import { loadSpec, makeClient, methodIndex, specOperations } from './helpers';

const spec = loadSpec();
const expectedMethodNames = new Set(
  specOperations(spec).map((op) => methodNameForOperationId(op.operationId)),
);
const methods = methodIndex(makeClient('https://sdk-tests.invalid'));

describe('spec ↔ SDK coverage', () => {
  it('every spec operation has a generated SDK method', () => {
    const missing = [...expectedMethodNames].filter((name) => !methods.has(name));
    expect(missing, `spec operations without SDK methods: ${missing.join(', ')}`).toEqual([]);
  });

  it('every generated SDK method is driven by a spec operation', () => {
    const unmapped = [...methods.keys()].filter((name) => !expectedMethodNames.has(name));
    expect(unmapped, `SDK methods not covered by spec-driven tests: ${unmapped.join(', ')}`).toEqual(
      [],
    );
  });

  it('covers a non-trivial API surface', () => {
    expect(expectedMethodNames.size).toBeGreaterThan(100);
  });
});
