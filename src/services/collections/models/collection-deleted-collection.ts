import { z } from 'zod';

/**
 * Zod schema for the CollectionDeletedCollection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionDeletedCollection = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    uid: z.string().optional(),
  });
});

/**
 * Information about the deleted collection.
 * @typedef  {CollectionDeletedCollection} collectionDeletedCollection - Information about the deleted collection. - Information about the deleted collection.
 * @property {string} - The deleted collection's ID.
 * @property {string} - The deleted collection's unique ID.
 */
export type CollectionDeletedCollection = z.infer<typeof collectionDeletedCollection>;

/**
 * Zod schema for mapping API responses to the CollectionDeletedCollection application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionDeletedCollectionResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      uid: data['uid'],
    }));
});

/**
 * Zod schema for mapping the CollectionDeletedCollection application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionDeletedCollectionRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      uid: data['uid'],
    }));
});
