/**
 * One test per OpenAPI operation: stubs global fetch with sinon, invokes the
 * corresponding generated SDK method with spec-derived arguments, and asserts the
 * wire request (URL, method, auth header, query params, JSON body) is correct.
 */

import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import sinon from 'sinon';
import { buildMethodArgs, methodNameForOperationId } from '../harness/sdk-reflection';
import {
  API_KEY,
  callSdkMethod,
  expectedPathname,
  loadSpec,
  makeClient,
  methodIndex,
  specOperations,
} from './helpers';

const BASE_URL = 'https://sdk-tests.invalid';
const spec = loadSpec();
const operations = specOperations(spec);
const client = makeClient(BASE_URL);
const methods = methodIndex(client);

describe('dynamic request generation (sinon fetch stub)', () => {
  let fetchStub: sinon.SinonStub;

  beforeEach(() => {
    fetchStub = sinon.stub(globalThis, 'fetch').callsFake(
      async () =>
        new Response(JSON.stringify({}), {
          status: 200,
          headers: { 'content-type': 'application/json' },
        }),
    );
  });

  afterEach(() => {
    fetchStub.restore();
  });

  for (const op of operations) {
    it(`${op.method} ${op.path} → ${op.operationId}`, async () => {
      const method = methods.get(methodNameForOperationId(op.operationId));
      expect(method, `no generated SDK method for operationId "${op.operationId}"`).toBeDefined();

      const args = buildMethodArgs(op, spec, { headerValues: { 'x-api-key': API_KEY } });
      await callSdkMethod(method!, args);

      expect(fetchStub.callCount).toBe(1);
      const [rawUrl, init] = fetchStub.firstCall.args as [string, RequestInit];
      const url = new URL(rawUrl);

      expect(rawUrl.startsWith(BASE_URL)).toBe(true);
      expect(url.pathname).toBe(expectedPathname(op, args));
      expect(url.pathname).not.toMatch(/[{}]/);
      expect(init.method).toBe(op.method);

      const headers = new Headers(init.headers);
      expect(headers.get('x-api-key')).toBe(API_KEY);

      for (const param of op.queryParams.filter((p) => p.required)) {
        expect(
          url.searchParams.has(param.name),
          `missing required query param "${param.name}" in ${url.search}`,
        ).toBe(true);
      }

      if (op.requestBody?.contentType === 'application/json') {
        expect(typeof init.body).toBe('string');
        expect(() => JSON.parse(init.body as string)).not.toThrow();
      }
    });
  }
});
