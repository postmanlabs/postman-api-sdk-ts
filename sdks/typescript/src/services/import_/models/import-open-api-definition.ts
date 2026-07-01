import { z } from 'zod';
import { jsonSchema, jsonSchemaRequest, jsonSchemaResponse } from './json-schema';
import {
  jsonStringified,
  jsonStringifiedRequest,
  jsonStringifiedResponse,
} from './json-stringified';

/**
 * Zod schema for the ImportOpenApiDefinition model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const importOpenApiDefinition = z.lazy(() => {
  return z.union([jsonSchema, jsonStringified]);
});

/**
 *
 * @typedef  {ImportOpenApiDefinition} importOpenApiDefinition
 * @property {JsonSchema}
 * @property {JsonStringified}
 */
export type ImportOpenApiDefinition = z.infer<typeof importOpenApiDefinition>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const importOpenApiDefinitionResponse = z.lazy(() => {
  return z.union([jsonSchemaResponse, jsonStringifiedResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const importOpenApiDefinitionRequest = z.lazy(() => {
  return z.union([jsonSchemaRequest, jsonStringifiedRequest]);
});
