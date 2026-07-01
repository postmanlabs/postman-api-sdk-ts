import { z } from 'zod';

/**
 * Zod schema for the CreateUpdateApiSchemaFileResponseRoot model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createUpdateApiSchemaFileResponseRoot = z.lazy(() => {
  return z.object({
    enabled: z.boolean().optional(),
  });
});

/**
 * Information about the schema's root file.
 * @typedef  {CreateUpdateApiSchemaFileResponseRoot} createUpdateApiSchemaFileResponseRoot - Information about the schema's root file. - Information about the schema's root file.
 * @property {boolean} - If true, the file is the schema's the root file.
 */
export type CreateUpdateApiSchemaFileResponseRoot = z.infer<
  typeof createUpdateApiSchemaFileResponseRoot
>;

/**
 * Zod schema for mapping API responses to the CreateUpdateApiSchemaFileResponseRoot application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createUpdateApiSchemaFileResponseRootResponse = z.lazy(() => {
  return z
    .object({
      enabled: z.boolean().optional(),
    })
    .transform((data) => ({
      enabled: data['enabled'],
    }));
});

/**
 * Zod schema for mapping the CreateUpdateApiSchemaFileResponseRoot application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createUpdateApiSchemaFileResponseRootRequest = z.lazy(() => {
  return z
    .object({
      enabled: z.boolean().optional(),
    })
    .transform((data) => ({
      enabled: data['enabled'],
    }));
});
