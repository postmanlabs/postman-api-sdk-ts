import { z } from 'zod';

/**
 * Zod schema for the CreateApiSchemaFilesRoot model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createApiSchemaFilesRoot = z.lazy(() => {
  return z.object({
    enabled: z.boolean().optional(),
  });
});

/**
 * Information about the schema's root file.
 * @typedef  {CreateApiSchemaFilesRoot} createApiSchemaFilesRoot - Information about the schema's root file. - Information about the schema's root file.
 * @property {boolean} - If true, tag the file as the root file. You can only update the root tag for protobuf specifications.
 */
export type CreateApiSchemaFilesRoot = z.infer<typeof createApiSchemaFilesRoot>;

/**
 * Zod schema for mapping API responses to the CreateApiSchemaFilesRoot application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createApiSchemaFilesRootResponse = z.lazy(() => {
  return z
    .object({
      enabled: z.boolean().optional(),
    })
    .transform((data) => ({
      enabled: data['enabled'],
    }));
});

/**
 * Zod schema for mapping the CreateApiSchemaFilesRoot application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createApiSchemaFilesRootRequest = z.lazy(() => {
  return z
    .object({
      enabled: z.boolean().optional(),
    })
    .transform((data) => ({
      enabled: data['enabled'],
    }));
});
