import { describe, it, expect } from 'vitest';
import { exampleFromSchema } from './example-from-schema';

describe('exampleFromSchema', () => {
  it('prefers explicit example, then default, then enum', () => {
    expect(exampleFromSchema({ type: 'string', example: 'from-example' })).toBe('from-example');
    expect(exampleFromSchema({ type: 'string', default: 'from-default' })).toBe('from-default');
    expect(exampleFromSchema({ type: 'string', enum: ['a', 'b'] })).toBe('a');
  });

  it('generates primitives by type', () => {
    expect(exampleFromSchema({ type: 'string' })).toBe('string');
    expect(typeof exampleFromSchema({ type: 'integer' })).toBe('number');
    expect(typeof exampleFromSchema({ type: 'number' })).toBe('number');
    expect(exampleFromSchema({ type: 'boolean' })).toBe(true);
  });

  it('respects numeric minimum', () => {
    expect(exampleFromSchema({ type: 'integer', minimum: 10 })).toBe(10);
  });

  it('honours string formats', () => {
    expect(exampleFromSchema({ type: 'string', format: 'uuid' })).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
    );
    expect(exampleFromSchema({ type: 'string', format: 'date-time' })).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    expect(exampleFromSchema({ type: 'string', format: 'email' })).toContain('@');
    expect(exampleFromSchema({ type: 'string', format: 'uri' })).toMatch(/^https?:\/\//);
  });

  it('builds objects with required properties only', () => {
    const result = exampleFromSchema({
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' },
        optionalThing: { type: 'string' },
      },
    });
    expect(result).toEqual({ name: 'string' });
  });

  it('builds arrays with a single item', () => {
    expect(exampleFromSchema({ type: 'array', items: { type: 'integer' } })).toEqual([
      expect.any(Number),
    ]);
  });

  it('returns empty array when items schema is missing', () => {
    expect(exampleFromSchema({ type: 'array' })).toEqual([]);
  });

  it('takes the first branch of oneOf/anyOf', () => {
    expect(exampleFromSchema({ oneOf: [{ type: 'string' }, { type: 'integer' }] })).toBe('string');
    expect(exampleFromSchema({ anyOf: [{ type: 'boolean' }] })).toBe(true);
  });

  it('merges allOf object branches', () => {
    const result = exampleFromSchema({
      allOf: [
        { type: 'object', required: ['a'], properties: { a: { type: 'string' } } },
        { type: 'object', required: ['b'], properties: { b: { type: 'boolean' } } },
      ],
    });
    expect(result).toEqual({ a: 'string', b: true });
  });

  it('resolves local $refs against the provided document', () => {
    const doc = { components: { schemas: { Thing: { type: 'string', example: 'thing!' } } } };
    expect(exampleFromSchema({ $ref: '#/components/schemas/Thing' }, doc)).toBe('thing!');
  });

  it('breaks $ref cycles by returning an empty object', () => {
    const doc: any = {
      components: {
        schemas: {
          Node: {
            type: 'object',
            required: ['child'],
            properties: { child: { $ref: '#/components/schemas/Node' } },
          },
        },
      },
    };
    expect(exampleFromSchema({ $ref: '#/components/schemas/Node' }, doc)).toEqual({
      child: {},
    });
  });

  it('returns an empty object for untyped schemas', () => {
    expect(exampleFromSchema({})).toEqual({});
    expect(exampleFromSchema(true)).toEqual({});
  });
});
