import { z } from 'zod';

/**
 * Zod schema for the CreateUpdateApiSchemaFileRoot model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createUpdateApiSchemaFileRoot = z.lazy(() => {
  return z.object({
    enabled: z.boolean().optional(),
  });
});

/**
 * Information about the schema's root file.
 * @typedef  {CreateUpdateApiSchemaFileRoot} createUpdateApiSchemaFileRoot - Information about the schema's root file. - Information about the schema's root file.
 * @property {boolean} - If true, tag the file as the root file. You can only update the root tag for protobuf specifications.
 */
export type CreateUpdateApiSchemaFileRoot = z.infer<typeof createUpdateApiSchemaFileRoot>;

/**
 * Zod schema for mapping API responses to the CreateUpdateApiSchemaFileRoot application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createUpdateApiSchemaFileRootResponse = z.lazy(() => {
  return z
    .object({
      enabled: z.boolean().optional(),
    })
    .transform((data) => ({
      enabled: data['enabled'],
    }));
});

/**
 * Zod schema for mapping the CreateUpdateApiSchemaFileRoot application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createUpdateApiSchemaFileRootRequest = z.lazy(() => {
  return z
    .object({
      enabled: z.boolean().optional(),
    })
    .transform((data) => ({
      enabled: data['enabled'],
    }));
});
