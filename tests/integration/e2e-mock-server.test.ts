/**
 * End-to-end sweep: every operation is executed through the full SDK stack
 * (handler chain → fetch → real TCP socket) against a local express mock API.
 * supertest verifies the mock server's recording contract before the sweep runs.
 */

import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import type { AddressInfo } from 'node:net';
import type { Server } from 'node:http';
import express from 'express';
import request from 'supertest';
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

interface RecordedRequest {
  method: string;
  path: string;
  headers: Record<string, string | string[] | undefined>;
  body: unknown;
}

const recorded: RecordedRequest[] = [];

function buildMockApi(): express.Express {
  const app = express();
  app.use(express.json({ type: () => true, strict: false }));
  app.use((req, res) => {
    recorded.push({ method: req.method, path: req.path, headers: req.headers, body: req.body });
    res.status(200).json({});
  });
  return app;
}

const app = buildMockApi();
const spec = loadSpec();
const operations = specOperations(spec);

describe('mock API server contract (supertest)', () => {
  beforeEach(() => {
    recorded.length = 0;
  });

  it('records any request and answers 200 JSON', async () => {
    await request(app)
      .post('/collections/abc?workspace=w1')
      .set('x-api-key', 'k')
      .send({ hello: 'world' })
      .expect(200)
      .expect('content-type', /json/);

    expect(recorded).toHaveLength(1);
    expect(recorded[0]).toMatchObject({
      method: 'POST',
      path: '/collections/abc',
      body: { hello: 'world' },
    });
    expect(recorded[0].headers['x-api-key']).toBe('k');
  });
});

describe('end-to-end SDK sweep against mock server', () => {
  let server: Server;
  let client: ReturnType<typeof makeClient>;
  let methods: ReturnType<typeof methodIndex>;

  beforeAll(async () => {
    server = await new Promise<Server>((resolveServer) => {
      const s = app.listen(0, '127.0.0.1', () => resolveServer(s));
    });
    const { port } = server.address() as AddressInfo;
    client = makeClient(`http://127.0.0.1:${port}`);
    methods = methodIndex(client);
  });

  afterAll(async () => {
    await new Promise<void>((resolveClose, reject) =>
      server.close((err) => (err ? reject(err) : resolveClose())),
    );
  });

  beforeEach(() => {
    recorded.length = 0;
  });

  for (const op of operations) {
    it(`${op.method} ${op.path} → ${op.operationId}`, async () => {
      const method = methods.get(methodNameForOperationId(op.operationId));
      expect(method, `no generated SDK method for operationId "${op.operationId}"`).toBeDefined();

      const args = buildMethodArgs(op, spec, { headerValues: { 'x-api-key': API_KEY } });
      await callSdkMethod(method!, args);

      expect(recorded).toHaveLength(1);
      const hit = recorded[0];
      expect(hit.method).toBe(op.method);
      expect(hit.path).toBe(expectedPathname(op, args));
      expect(hit.headers['x-api-key']).toBe(API_KEY);
    });
  }
});
