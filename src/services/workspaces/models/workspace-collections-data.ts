import { z } from 'zod';

/**
 * Zod schema for the WorkspaceCollectionsData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const workspaceCollectionsData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    uid: z.string().optional(),
  });
});

/**
 * Information about the collection.
 * @typedef {WorkspaceCollectionsData} workspaceCollectionsData
 * @property {string} id - The collection's ID.
 * @property {string} name - The collection's name.
 * @property {string} uid - The collection's unique ID.
 */
export type WorkspaceCollectionsData = z.infer<typeof workspaceCollectionsData>;

/**
 * Zod schema for mapping API responses to the WorkspaceCollectionsData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceCollectionsDataResponse = z.lazy(() => {
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
 * Zod schema for mapping the WorkspaceCollectionsData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceCollectionsDataRequest = z.lazy(() => {
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
