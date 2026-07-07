import { z } from 'zod';

/**
 * Zod schema for the CreateVersionSchemaGitLinkedSchemas model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createVersionSchemaGitLinkedSchemas = z.lazy(() => {
  return z.object({
    directoryPath: z.string().optional(),
  });
});

/**
 * Information about the schema.
 * @typedef  {CreateVersionSchemaGitLinkedSchemas} createVersionSchemaGitLinkedSchemas - Information about the schema. - Information about the schema.
 * @property {string} - The path to the root directory where schemas are stored in the Git repository.
 */
export type CreateVersionSchemaGitLinkedSchemas = z.infer<
  typeof createVersionSchemaGitLinkedSchemas
>;

/**
 * Zod schema for mapping API responses to the CreateVersionSchemaGitLinkedSchemas application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createVersionSchemaGitLinkedSchemasResponse = z.lazy(() => {
  return z
    .object({
      directoryPath: z.string().optional(),
    })
    .transform((data) => ({
      directoryPath: data['directoryPath'],
    }));
});

/**
 * Zod schema for mapping the CreateVersionSchemaGitLinkedSchemas application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createVersionSchemaGitLinkedSchemasRequest = z.lazy(() => {
  return z
    .object({
      directoryPath: z.string().optional(),
    })
    .transform((data) => ({
      directoryPath: data['directoryPath'],
    }));
});
