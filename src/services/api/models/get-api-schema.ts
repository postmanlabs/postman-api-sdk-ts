import { z } from 'zod';
import { getSchema, getSchemaRequest, getSchemaResponse } from './get-schema';
import {
  getBundledSchema,
  getBundledSchemaRequest,
  getBundledSchemaResponse,
} from './get-bundled-schema';

/**
 * Zod schema for the GetApiSchema model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiSchema = z.lazy(() => {
  return z.union([getSchema, getBundledSchema]);
});

/**
 *
 * @typedef  {GetApiSchema} getApiSchema
 * @property {GetSchema} - Information about the schema.
 * @property {GetBundledSchema} - Information about the schema.
 */
export type GetApiSchema = z.infer<typeof getApiSchema>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getApiSchemaResponse = z.lazy(() => {
  return z.union([getSchemaResponse, getBundledSchemaResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getApiSchemaRequest = z.lazy(() => {
  return z.union([getSchemaRequest, getBundledSchemaRequest]);
});
