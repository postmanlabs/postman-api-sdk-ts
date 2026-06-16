/**
 * Generates a minimal valid example value from an OpenAPI/JSON schema.
 * Only required object properties are populated, so generated request bodies
 * stay as small as the schema allows.
 */

import { resolveRef } from './spec-operations';

const FORMAT_EXAMPLES: Record<string, string> = {
  uuid: '123e4567-e89b-42d3-a456-426614174000',
  'date-time': '2026-01-01T00:00:00Z',
  date: '2026-01-01',
  email: 'user@example.com',
  uri: 'https://example.com',
  url: 'https://example.com',
  hostname: 'example.com',
  ipv4: '127.0.0.1',
  ipv6: '::1',
};

export function exampleFromSchema(schema: unknown, doc?: unknown, seenRefs?: Set<string>): unknown {
  const seen = seenRefs ?? new Set<string>();

  if (schema == null || typeof schema !== 'object') {
    return {};
  }
  const s = schema as Record<string, any>;

  if (typeof s.$ref === 'string') {
    if (seen.has(s.$ref)) {
      return {};
    }
    seen.add(s.$ref);
    const resolved = doc ? resolveRef(doc, s.$ref) : {};
    const result = exampleFromSchema(resolved, doc, seen);
    seen.delete(s.$ref);
    return result;
  }

  if ('example' in s) return s.example;
  if ('default' in s) return s.default;
  if (Array.isArray(s.enum) && s.enum.length > 0) return s.enum[0];
  if (Array.isArray(s.examples) && s.examples.length > 0) return s.examples[0];

  if (Array.isArray(s.allOf)) {
    const merged: Record<string, unknown> = {};
    for (const branch of s.allOf) {
      const value = exampleFromSchema(branch, doc, seen);
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        Object.assign(merged, value);
      }
    }
    return merged;
  }
  if (Array.isArray(s.oneOf) && s.oneOf.length > 0) return exampleFromSchema(s.oneOf[0], doc, seen);
  if (Array.isArray(s.anyOf) && s.anyOf.length > 0) return exampleFromSchema(s.anyOf[0], doc, seen);

  const type = Array.isArray(s.type) ? s.type[0] : s.type;

  switch (type) {
    case 'string':
      return FORMAT_EXAMPLES[s.format] ?? 'string';
    case 'integer':
    case 'number':
      return typeof s.minimum === 'number' ? s.minimum : 1;
    case 'boolean':
      return true;
    case 'null':
      return null;
    case 'array':
      return s.items ? [exampleFromSchema(s.items, doc, seen)] : [];
    case 'object':
    default: {
      if (!s.properties) {
        return {};
      }
      const required: string[] = Array.isArray(s.required) ? s.required : [];
      const result: Record<string, unknown> = {};
      for (const name of required) {
        if (name in s.properties) {
          result[name] = exampleFromSchema(s.properties[name], doc, seen);
        }
      }
      return result;
    }
  }
}
