import { z } from 'zod';

/**
 * Zod schema for the VersionSchemas model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const versionSchemas = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    type: z.string().optional(),
  });
});

/**
 * Information about the schema.
 * @typedef  {VersionSchemas} versionSchemas - Information about the schema. - Information about the schema.
 * @property {string} - The schema's ID.
 * @property {string} - The schema type.
 */
export type VersionSchemas = z.infer<typeof versionSchemas>;

/**
 * Zod schema for mapping API responses to the VersionSchemas application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const versionSchemasResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      type: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      type: data['type'],
    }));
});

/**
 * Zod schema for mapping the VersionSchemas application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const versionSchemasRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      type: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      type: data['type'],
    }));
});
