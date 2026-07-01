import { z } from 'zod';

/**
 * Zod schema for the CreateApiSchemaResponseFilesRoot model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createApiSchemaResponseFilesRoot = z.lazy(() => {
  return z.object({
    enabled: z.boolean().optional(),
  });
});

/**
 * An object that contains root file information.
 * @typedef  {CreateApiSchemaResponseFilesRoot} createApiSchemaResponseFilesRoot - An object that contains root file information. - An object that contains root file information.
 * @property {boolean} - If true, the file is tagged as the schema's root file. The root tag is only allowed for protobuf specifications.
 */
export type CreateApiSchemaResponseFilesRoot = z.infer<typeof createApiSchemaResponseFilesRoot>;

/**
 * Zod schema for mapping API responses to the CreateApiSchemaResponseFilesRoot application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createApiSchemaResponseFilesRootResponse = z.lazy(() => {
  return z
    .object({
      enabled: z.boolean().optional(),
    })
    .transform((data) => ({
      enabled: data['enabled'],
    }));
});

/**
 * Zod schema for mapping the CreateApiSchemaResponseFilesRoot application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createApiSchemaResponseFilesRootRequest = z.lazy(() => {
  return z
    .object({
      enabled: z.boolean().optional(),
    })
    .transform((data) => ({
      enabled: data['enabled'],
    }));
});
