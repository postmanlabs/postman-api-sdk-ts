import { describe, it, expect } from 'vitest';
import {
  collectSdkMethods,
  buildMethodArgs,
  toCamelCase,
  methodNameForOperationId,
} from './sdk-reflection';
import type { SpecOperation } from './spec-operations';

class FakeBaseService {
  setConfig() {
    return this;
  }
}

class FakeCollectionsService extends FakeBaseService {
  setGetCollectionConfig() {
    return this;
  }
  async getCollection() {
    return {};
  }
  async createCollection() {
    return {};
  }
}

class FakeUsersService extends FakeBaseService {
  async getAuthenticatedUser() {
    return {};
  }
}

class FakeClient {
  readonly collections = new FakeCollectionsService();
  readonly users = new FakeUsersService();
  config = { apiKey: 'k' };
}

describe('collectSdkMethods', () => {
  const methods = collectSdkMethods(new FakeClient());

  it('finds every API method across services', () => {
    expect(
      methods.map((m) => `${m.serviceName}.${m.methodName}`).sort(),
    ).toEqual(['collections.createCollection', 'collections.getCollection', 'users.getAuthenticatedUser']);
  });

  it('excludes config setters and inherited base members', () => {
    const names = methods.map((m) => m.methodName);
    expect(names).not.toContain('setConfig');
    expect(names).not.toContain('setGetCollectionConfig');
    expect(names).not.toContain('constructor');
  });

  it('binds the function to its service', async () => {
    const m = methods.find((x) => x.methodName === 'getCollection')!;
    await expect(m.invoke()).resolves.toEqual({});
  });
});

describe('toCamelCase', () => {
  it('converts snake_case and kebab-case', () => {
    expect(toCamelCase('access_key')).toBe('accessKey');
    expect(toCamelCase('x-mock-response-name')).toBe('xMockResponseName');
    expect(toCamelCase('workspace')).toBe('workspace');
  });
});

describe('methodNameForOperationId', () => {
  it('normalizes uppercase acronym runs the way the generator does', () => {
    expect(methodNameForOperationId('transformCollectionToOpenAPI')).toBe(
      'transformCollectionToOpenApi',
    );
    expect(methodNameForOperationId('getSCIMUserResource')).toBe('getScimUserResource');
  });

  it('leaves regular camelCase ids untouched', () => {
    expect(methodNameForOperationId('getCollection')).toBe('getCollection');
    expect(methodNameForOperationId('asyncMergePullCollectionFork')).toBe(
      'asyncMergePullCollectionFork',
    );
  });
});

describe('buildMethodArgs', () => {
  const baseOp: SpecOperation = {
    operationId: 'op',
    method: 'GET',
    path: '/things/{thingId}',
    pathParams: [{ name: 'thingId', in: 'path', required: true, schema: { type: 'string' } }],
    queryParams: [],
    headerParams: [],
  };

  it('passes path params as positional string args', () => {
    expect(buildMethodArgs(baseOp)).toEqual(['string']);
  });

  it('appends the body example when a requestBody exists', () => {
    const op: SpecOperation = {
      ...baseOp,
      method: 'POST',
      requestBody: {
        contentType: 'application/json',
        schema: { type: 'object', required: ['name'], properties: { name: { type: 'string' } } },
      },
    };
    expect(buildMethodArgs(op)).toEqual(['string', { name: 'string' }]);
  });

  it('camelizes body keys deeply (SDK models use the application shape, not wire names)', () => {
    const op: SpecOperation = {
      ...baseOp,
      method: 'POST',
      pathParams: [],
      requestBody: {
        contentType: 'application/json',
        schema: {
          type: 'object',
          required: ['grant_type', 'nested_thing'],
          properties: {
            grant_type: { type: 'string', enum: ['client_credentials'] },
            nested_thing: {
              type: 'object',
              required: ['inner_value'],
              properties: { inner_value: { type: 'integer' } },
            },
          },
        },
      },
    };
    expect(buildMethodArgs(op)).toEqual([
      { grantType: 'client_credentials', nestedThing: { innerValue: 1 } },
    ]);
  });

  it('appends a params object with camelCased required query/header params', () => {
    const op: SpecOperation = {
      ...baseOp,
      queryParams: [
        { name: 'access_key', in: 'query', required: false, schema: { type: 'string' } },
        { name: 'workspace', in: 'query', required: true, schema: { type: 'string' } },
      ],
      headerParams: [
        { name: 'x-required-header', in: 'header', required: true, schema: { type: 'string' } },
      ],
    };
    expect(buildMethodArgs(op)).toEqual([
      'string',
      { workspace: 'string', xRequiredHeader: 'string' },
    ]);
  });

  it('uses pinned header values over schema examples', () => {
    const op: SpecOperation = {
      ...baseOp,
      pathParams: [],
      headerParams: [
        {
          name: 'x-api-key',
          in: 'header',
          required: true,
          schema: { type: 'string', example: 'PMAK-from-spec' },
        },
      ],
    };
    expect(buildMethodArgs(op, undefined, { headerValues: { 'x-api-key': 'pinned-key' } })).toEqual(
      [{ xApiKey: 'pinned-key' }],
    );
  });

  it('stringifies non-string path param examples', () => {
    const op: SpecOperation = {
      ...baseOp,
      pathParams: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
    };
    expect(buildMethodArgs(op)).toEqual(['1']);
  });
});
