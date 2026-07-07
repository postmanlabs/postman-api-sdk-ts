/**
 * Enumerates concrete operations from a parsed OpenAPI 3.x document so tests can be
 * generated dynamically for every endpoint the SDK exposes.
 */

export interface SpecParameter {
  name: string;
  in: 'path' | 'query' | 'header' | 'cookie';
  required?: boolean;
  schema?: unknown;
}

export interface SpecRequestBody {
  contentType: string;
  schema: unknown;
  required?: boolean;
}

export interface SpecOperation {
  operationId: string;
  method: string;
  path: string;
  pathParams: SpecParameter[];
  queryParams: SpecParameter[];
  headerParams: SpecParameter[];
  requestBody?: SpecRequestBody;
}

const HTTP_METHODS = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace'];

/** Resolves a local JSON pointer ($ref) against the spec document. */
export function resolveRef(doc: unknown, pointer: string): unknown {
  if (!pointer.startsWith('#/')) {
    throw new Error(`only local $refs supported, got: ${pointer}`);
  }
  let current: any = doc;
  for (const rawSegment of pointer.slice(2).split('/')) {
    const segment = rawSegment.replace(/~1/g, '/').replace(/~0/g, '~');
    if (current == null || !(segment in current)) {
      throw new Error(`unresolvable $ref: ${pointer}`);
    }
    current = current[segment];
  }
  return current;
}

function deref<T>(doc: unknown, node: any): T {
  if (node && typeof node === 'object' && typeof node.$ref === 'string') {
    return resolveRef(doc, node.$ref) as T;
  }
  return node as T;
}

function dedupeByNameAndIn(params: SpecParameter[]): SpecParameter[] {
  const seen = new Map<string, SpecParameter>();
  for (const p of params) {
    seen.set(`${p.in}:${p.name}`, p);
  }
  return [...seen.values()];
}

export function enumerateOperations(doc: any): SpecOperation[] {
  const operations: SpecOperation[] = [];
  for (const [path, pathItem] of Object.entries<any>(doc.paths ?? {})) {
    const pathLevelParams: SpecParameter[] = (pathItem.parameters ?? []).map((p: unknown) =>
      deref<SpecParameter>(doc, p),
    );
    for (const method of HTTP_METHODS) {
      const op = pathItem[method];
      if (!op) continue;

      const opParams: SpecParameter[] = (op.parameters ?? []).map((p: unknown) =>
        deref<SpecParameter>(doc, p),
      );
      // Operation-level parameters override path-level ones with the same name+location.
      const params = dedupeByNameAndIn([...pathLevelParams, ...opParams]).map((p) => ({
        ...p,
        schema: deref(doc, p.schema),
      }));

      // Declaration order matters: the SDK generator derives positional method
      // arguments from it (path-level params first, then operation-level).
      const pathParams = params.filter((p) => p.in === 'path');

      let requestBody: SpecRequestBody | undefined;
      const body = deref<any>(doc, op.requestBody);
      if (body?.content) {
        const [contentType, media] = Object.entries<any>(body.content)[0] ?? [];
        if (contentType) {
          requestBody = {
            contentType,
            schema: deref(doc, media?.schema),
            required: body.required,
          };
        }
      }

      operations.push({
        operationId: op.operationId ?? `${method}:${path}`,
        method: method.toUpperCase(),
        path,
        pathParams,
        queryParams: params.filter((p) => p.in === 'query'),
        headerParams: params.filter((p) => p.in === 'header'),
        requestBody,
      });
    }
  }
  return operations;
}
