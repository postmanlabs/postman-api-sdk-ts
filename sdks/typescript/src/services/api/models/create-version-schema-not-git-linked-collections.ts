import { z } from 'zod';

/**
 * Zod schema for the CreateVersionSchemaNotGitLinkedCollections model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createVersionSchemaNotGitLinkedCollections = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
  });
});

/**
 * Information about the collection.
 * @typedef  {CreateVersionSchemaNotGitLinkedCollections} createVersionSchemaNotGitLinkedCollections - Information about the collection. - Information about the collection.
 * @property {string} - The collection's ID.
 */
export type CreateVersionSchemaNotGitLinkedCollections = z.infer<
  typeof createVersionSchemaNotGitLinkedCollections
>;

/**
 * Zod schema for mapping API responses to the CreateVersionSchemaNotGitLinkedCollections application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createVersionSchemaNotGitLinkedCollectionsResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the CreateVersionSchemaNotGitLinkedCollections application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createVersionSchemaNotGitLinkedCollectionsRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});
