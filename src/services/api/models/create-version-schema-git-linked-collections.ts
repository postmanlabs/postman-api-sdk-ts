import { z } from 'zod';

/**
 * Zod schema for the CreateVersionSchemaGitLinkedCollections model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createVersionSchemaGitLinkedCollections = z.lazy(() => {
  return z.object({
    filePath: z.string().optional(),
  });
});

/**
 * Information about the collection.
 * @typedef  {CreateVersionSchemaGitLinkedCollections} createVersionSchemaGitLinkedCollections - Information about the collection. - Information about the collection.
 * @property {string} - The path to the collection in the Git repository.
 */
export type CreateVersionSchemaGitLinkedCollections = z.infer<
  typeof createVersionSchemaGitLinkedCollections
>;

/**
 * Zod schema for mapping API responses to the CreateVersionSchemaGitLinkedCollections application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createVersionSchemaGitLinkedCollectionsResponse = z.lazy(() => {
  return z
    .object({
      filePath: z.string().optional(),
    })
    .transform((data) => ({
      filePath: data['filePath'],
    }));
});

/**
 * Zod schema for mapping the CreateVersionSchemaGitLinkedCollections application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createVersionSchemaGitLinkedCollectionsRequest = z.lazy(() => {
  return z
    .object({
      filePath: z.string().optional(),
    })
    .transform((data) => ({
      filePath: data['filePath'],
    }));
});
