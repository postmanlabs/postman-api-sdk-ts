import { z } from 'zod';

/**
 * Zod schema for the ExtendedApiDataSchemas model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const extendedApiDataSchemas = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
  });
});

/**
 * Information about the schema.
 * @typedef  {ExtendedApiDataSchemas} extendedApiDataSchemas - Information about the schema. - Information about the schema.
 * @property {string} - The schema's ID.
 */
export type ExtendedApiDataSchemas = z.infer<typeof extendedApiDataSchemas>;

/**
 * Zod schema for mapping API responses to the ExtendedApiDataSchemas application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const extendedApiDataSchemasResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the ExtendedApiDataSchemas application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const extendedApiDataSchemasRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});
