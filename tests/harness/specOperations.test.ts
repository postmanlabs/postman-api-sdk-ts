import { describe, it, expect } from 'vitest';
import { enumerateOperations, resolveRef } from './spec-operations';

const spec = {
  openapi: '3.0.3',
  paths: {
    '/collections/{collectionId}': {
      parameters: [
        {
          name: 'collectionId',
          in: 'path',
          required: true,
          schema: { type: 'string' },
        },
      ],
      get: {
        operationId: 'getCollection',
        parameters: [
          { name: 'access_key', in: 'query', schema: { type: 'string' } },
          { $ref: '#/components/parameters/workspaceQuery' },
        ],
        responses: { '200': { description: 'ok' } },
      },
      put: {
        operationId: 'putCollection',
        requestBody: {
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/Collection' },
            },
          },
        },
        responses: { '200': { description: 'ok' } },
      },
    },
    '/collections': {
      post: {
        operationId: 'createCollection',
        parameters: [
          { name: 'workspace', in: 'query', required: true, schema: { type: 'string' } },
        ],
        requestBody: {
          content: {
            'application/json': { schema: { type: 'object' } },
          },
        },
        responses: { '200': { description: 'ok' } },
      },
    },
  },
  components: {
    parameters: {
      workspaceQuery: {
        name: 'workspace',
        in: 'query',
        required: false,
        schema: { type: 'string' },
      },
    },
    schemas: {
      Collection: { type: 'object', properties: { info: { type: 'string' } } },
    },
  },
};

describe('resolveRef', () => {
  it('resolves a local $ref pointer', () => {
    expect(resolveRef(spec, '#/components/schemas/Collection')).toEqual({
      type: 'object',
      properties: { info: { type: 'string' } },
    });
  });

  it('throws on unresolvable pointer', () => {
    expect(() => resolveRef(spec, '#/components/schemas/Nope')).toThrow(/Nope/);
  });
});

describe('enumerateOperations', () => {
  const ops = enumerateOperations(spec);

  it('returns one entry per operation with uppercase method', () => {
    expect(ops.map((o) => o.operationId).sort()).toEqual([
      'createCollection',
      'getCollection',
      'putCollection',
    ]);
    expect(ops.find((o) => o.operationId === 'putCollection')?.method).toBe('PUT');
  });

  it('merges path-level parameters into each operation', () => {
    const get = ops.find((o) => o.operationId === 'getCollection')!;
    expect(get.pathParams.map((p) => p.name)).toEqual(['collectionId']);
  });

  it('resolves $ref parameters and splits by location', () => {
    const get = ops.find((o) => o.operationId === 'getCollection')!;
    expect(get.queryParams.map((p) => p.name).sort()).toEqual(['access_key', 'workspace']);
    expect(get.queryParams.find((p) => p.name === 'workspace')?.required).toBe(false);
  });

  it('marks required query params', () => {
    const post = ops.find((o) => o.operationId === 'createCollection')!;
    expect(post.queryParams).toEqual([
      { name: 'workspace', in: 'query', required: true, schema: { type: 'string' } },
    ]);
  });

  it('resolves requestBody schema and content type', () => {
    const put = ops.find((o) => o.operationId === 'putCollection')!;
    expect(put.requestBody?.contentType).toBe('application/json');
    expect(put.requestBody?.schema).toEqual({
      type: 'object',
      properties: { info: { type: 'string' } },
    });
  });

  it('keeps pathParams in spec declaration order (the generated SDKs derive positional args from it)', () => {
    const multi = enumerateOperations({
      openapi: '3.0.3',
      paths: {
        '/a/{first}/b/{second}': {
          get: {
            operationId: 'multi',
            parameters: [
              { name: 'second', in: 'path', required: true, schema: { type: 'string' } },
              { name: 'first', in: 'path', required: true, schema: { type: 'string' } },
            ],
            responses: { '200': { description: 'ok' } },
          },
        },
      },
    });
    expect(multi[0].pathParams.map((p) => p.name)).toEqual(['second', 'first']);
  });
});
