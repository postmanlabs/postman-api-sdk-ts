import { z } from 'zod';

/**
 * Zod schema for the CollectionFolderDeletedData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionFolderDeletedData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    owner: z.string().optional(),
  });
});

/**
 * The folder's information.
 * @typedef {CollectionFolderDeletedData} collectionFolderDeletedData
 * @property {string} id - The folder's ID.
 * @property {string} owner - The user ID of the folder's owner.
 */
export type CollectionFolderDeletedData = z.infer<typeof collectionFolderDeletedData>;

/**
 * Zod schema for mapping API responses to the CollectionFolderDeletedData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionFolderDeletedDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      owner: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      owner: data['owner'],
    }));
});

/**
 * Zod schema for mapping the CollectionFolderDeletedData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionFolderDeletedDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      owner: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      owner: data['owner'],
    }));
});
