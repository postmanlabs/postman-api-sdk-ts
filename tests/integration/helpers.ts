/**
 * Shared harness for the dynamic SDK integration tests.
 *
 * Tests are generated from the OpenAPI document the SDK was built from (see
 * SPEC_CANDIDATES below), so a regenerated SDK is automatically re-covered: every
 * operation in the spec produces a test, and the coverage suite asserts the spec
 * and the generated client agree method-for-method.
 */

import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';
// client-under-test.ts is rendered by the factory's scaffold step
// (src/scripts/scaffold-sdk-tests.ts) with the generated client class name.
import { SdkClient } from './client-under-test';
import { enumerateOperations, type SpecOperation } from '../harness/spec-operations';
import { collectSdkMethods, type SdkMethod } from '../harness/sdk-reflection';

const HERE = dirname(fileURLToPath(import.meta.url));

/**
 * Spec resolution order:
 *  1. SDK_SPEC_PATH env override
 *  2. openapi.yaml shipped next to these tests (self-contained SDK checkout)
 *  3. resources/overlayed.yaml in the factory repo layout (four levels up)
 */
const SPEC_CANDIDATES = [
  process.env.SDK_SPEC_PATH,
  resolve(HERE, 'openapi.yaml'),
  resolve(HERE, '../../../..', 'resources', 'overlayed.yaml'),
].filter((p): p is string => !!p);

export const SPEC_PATH = SPEC_CANDIDATES.find((p) => existsSync(p)) ?? SPEC_CANDIDATES[1];

export const API_KEY = 'integration-test-api-key';

export function loadSpec(): any {
  if (!existsSync(SPEC_PATH)) {
    throw new Error(
      `OpenAPI spec not found (looked at: ${SPEC_CANDIDATES.join(', ')}). ` +
        'Ship openapi.yaml next to the tests, set SDK_SPEC_PATH, or in the factory repo ' +
        'run `pnpm spec:fetch && pnpm spec:overlay` first.',
    );
  }
  return parse(readFileSync(SPEC_PATH, 'utf8'));
}

export function specOperations(doc: unknown): SpecOperation[] {
  return enumerateOperations(doc);
}

export function makeClient(baseUrl: string): InstanceType<typeof SdkClient> {
  return new SdkClient({
    apiKey: API_KEY,
    baseUrl,
    validation: { responseValidation: false },
    retry: { attempts: 1 },
  });
}

/** Indexes every generated API method by name (generator method names == operationIds). */
export function methodIndex(client: object): Map<string, SdkMethod> {
  const index = new Map<string, SdkMethod>();
  for (const method of collectSdkMethods(client)) {
    if (index.has(method.methodName)) {
      throw new Error(`duplicate SDK method name across services: ${method.methodName}`);
    }
    index.set(method.methodName, method);
  }
  return index;
}

/** Awaits a method result, draining async generators (streaming endpoints). */
export async function callSdkMethod(method: SdkMethod, args: unknown[]): Promise<unknown> {
  const result = method.invoke(...args);
  if (result && typeof (result as any)[Symbol.asyncIterator] === 'function') {
    const chunks: unknown[] = [];
    for await (const chunk of result as AsyncGenerator<unknown>) {
      chunks.push(chunk);
    }
    return chunks;
  }
  return result;
}

/**
 * The pathname the SDK must produce for an operation given its positional path args.
 * Matches the SDK's PathSerializer (SIMPLE style): raw substitution, no percent-encoding.
 */
export function expectedPathname(op: SpecOperation, args: unknown[]): string {
  let path = op.path;
  op.pathParams.forEach((param, i) => {
    path = path.replace(`{${param.name}}`, String(args[i]));
  });
  return path;
}
