import { z } from 'zod';

/**
 * Zod schema for the CreateVersionSchemaGitLinkedWithRootFileSchemas model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createVersionSchemaGitLinkedWithRootFileSchemas = z.lazy(() => {
  return z.object({
    filePath: z.string().optional(),
  });
});

/**
 * Information about the schema.
 * @typedef  {CreateVersionSchemaGitLinkedWithRootFileSchemas} createVersionSchemaGitLinkedWithRootFileSchemas - Information about the schema. - Information about the schema.
 * @property {string} - The path to the schema root file in the Git repository.
 */
export type CreateVersionSchemaGitLinkedWithRootFileSchemas = z.infer<
  typeof createVersionSchemaGitLinkedWithRootFileSchemas
>;

/**
 * Zod schema for mapping API responses to the CreateVersionSchemaGitLinkedWithRootFileSchemas application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createVersionSchemaGitLinkedWithRootFileSchemasResponse = z.lazy(() => {
  return z
    .object({
      filePath: z.string().optional(),
    })
    .transform((data) => ({
      filePath: data['filePath'],
    }));
});

/**
 * Zod schema for mapping the CreateVersionSchemaGitLinkedWithRootFileSchemas application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createVersionSchemaGitLinkedWithRootFileSchemasRequest = z.lazy(() => {
  return z
    .object({
      filePath: z.string().optional(),
    })
    .transform((data) => ({
      filePath: data['filePath'],
    }));
});
