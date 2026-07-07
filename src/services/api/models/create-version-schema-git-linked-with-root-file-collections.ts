import { z } from 'zod';

/**
 * Zod schema for the CreateVersionSchemaGitLinkedWithRootFileCollections model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createVersionSchemaGitLinkedWithRootFileCollections = z.lazy(() => {
  return z.object({
    filePath: z.string().optional(),
  });
});

/**
 * Information about the collection.
 * @typedef  {CreateVersionSchemaGitLinkedWithRootFileCollections} createVersionSchemaGitLinkedWithRootFileCollections - Information about the collection. - Information about the collection.
 * @property {string} - Path to a collection in the Git repository.
 */
export type CreateVersionSchemaGitLinkedWithRootFileCollections = z.infer<
  typeof createVersionSchemaGitLinkedWithRootFileCollections
>;

/**
 * Zod schema for mapping API responses to the CreateVersionSchemaGitLinkedWithRootFileCollections application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createVersionSchemaGitLinkedWithRootFileCollectionsResponse = z.lazy(() => {
  return z
    .object({
      filePath: z.string().optional(),
    })
    .transform((data) => ({
      filePath: data['filePath'],
    }));
});

/**
 * Zod schema for mapping the CreateVersionSchemaGitLinkedWithRootFileCollections application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createVersionSchemaGitLinkedWithRootFileCollectionsRequest = z.lazy(() => {
  return z
    .object({
      filePath: z.string().optional(),
    })
    .transform((data) => ({
      filePath: data['filePath'],
    }));
});
