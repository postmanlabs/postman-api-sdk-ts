import { z } from 'zod';

/**
 * Zod schema for the WorkspaceCollections model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const workspaceCollections = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    uid: z.string().optional(),
  });
});

/**
 * Information about the collection.
 * @typedef  {WorkspaceCollections} workspaceCollections - Information about the collection. - Information about the collection.
 * @property {string} - The collection's ID.
 * @property {string} - The collection's name.
 * @property {string} - The collection's unique ID.
 */
export type WorkspaceCollections = z.infer<typeof workspaceCollections>;

/**
 * Zod schema for mapping API responses to the WorkspaceCollections application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceCollectionsResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      uid: data['uid'],
    }));
});

/**
 * Zod schema for mapping the WorkspaceCollections application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceCollectionsRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      uid: data['uid'],
    }));
});
