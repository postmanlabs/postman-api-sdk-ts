/**
 * Reflection helpers over the generated SDK client: enumerate every callable API
 * method, and build call arguments for an operation from its OpenAPI definition.
 *
 * Generated services follow a fixed convention (see sdks/typescript/src/services/*):
 *   async method(...pathParams: string[], body?, params?, requestConfig?)
 * plus fluent `set<Method>Config` setters, which are not API calls.
 */

import { exampleFromSchema } from './example-from-schema';
import type { SpecOperation } from './spec-operations';

export interface SdkMethod {
  serviceName: string;
  methodName: string;
  invoke: (...args: unknown[]) => Promise<unknown>;
}

const CONFIG_SETTER = /^set[A-Z].*Config$/;

export function collectSdkMethods(client: object): SdkMethod[] {
  const methods: SdkMethod[] = [];
  for (const [serviceName, service] of Object.entries(client)) {
    if (service === null || typeof service !== 'object') continue;
    const proto = Object.getPrototypeOf(service);
    if (!proto || proto === Object.prototype) continue;

    for (const methodName of Object.getOwnPropertyNames(proto)) {
      if (methodName === 'constructor' || CONFIG_SETTER.test(methodName)) continue;
      const descriptor = Object.getOwnPropertyDescriptor(proto, methodName);
      if (typeof descriptor?.value !== 'function') continue;
      methods.push({
        serviceName,
        methodName,
        invoke: (...args: unknown[]) => descriptor.value.apply(service, args),
      });
    }
  }
  return methods;
}

export function toCamelCase(name: string): string {
  return name.replace(/[-_](\w)/g, (_, c: string) => c.toUpperCase());
}

/**
 * Maps an operationId to the generated method name. The generator lower-cases
 * uppercase acronym runs (OpenAPI → OpenApi, SCIMUser → ScimUser).
 */
export function methodNameForOperationId(operationId: string): string {
  return operationId
    .replace(
      /([A-Z])([A-Z]+)([A-Z][a-z])/g,
      (_, first: string, run: string, next: string) => first + run.toLowerCase() + next,
    )
    .replace(/([A-Z])([A-Z]+)$/, (_, first: string, run: string) => first + run.toLowerCase());
}

/** Recursively camelizes object keys: SDK models use the application shape, not wire names. */
function deepCamelizeKeys(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(deepCamelizeKeys);
  }
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [toCamelCase(k), deepCamelizeKeys(v)]),
    );
  }
  return value;
}

/**
 * Builds the positional argument list for a generated SDK method from its spec
 * operation: path params (as strings, in declaration order), then the request
 * body example (when the operation has one), then a params object containing
 * the required query/header params (when the operation declares any).
 */
export interface BuildArgsOptions {
  /** Pins values for header params by (case-insensitive) header name, e.g. the auth header. */
  headerValues?: Record<string, string>;
}

export function buildMethodArgs(
  op: SpecOperation,
  doc?: unknown,
  options?: BuildArgsOptions,
): unknown[] {
  const args: unknown[] = op.pathParams.map((p) => String(exampleFromSchema(p.schema, doc)));

  if (op.requestBody) {
    args.push(deepCamelizeKeys(exampleFromSchema(op.requestBody.schema, doc)));
  }

  const pinnedHeaders = Object.fromEntries(
    Object.entries(options?.headerValues ?? {}).map(([k, v]) => [k.toLowerCase(), v]),
  );

  const optionParams = [...op.queryParams, ...op.headerParams];
  if (optionParams.length > 0) {
    const params: Record<string, unknown> = {};
    for (const p of optionParams) {
      const pinned = p.in === 'header' ? pinnedHeaders[p.name.toLowerCase()] : undefined;
      if (pinned !== undefined) {
        params[toCamelCase(p.name)] = pinned;
      } else if (p.required) {
        params[toCamelCase(p.name)] = exampleFromSchema(p.schema, doc);
      }
    }
    args.push(params);
  }

  return args;
}
