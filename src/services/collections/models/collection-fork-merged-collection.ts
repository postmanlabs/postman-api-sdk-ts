import { z } from 'zod';

/**
 * Zod schema for the CollectionForkMergedCollection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionForkMergedCollection = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    uid: z.string().optional(),
  });
});

/**
 * @typedef {CollectionForkMergedCollection} collectionForkMergedCollection
 * @property {string} id - The source collection's ID.
 * @property {string} uid - The source collection's unique ID.
 */
export type CollectionForkMergedCollection = z.infer<typeof collectionForkMergedCollection>;

/**
 * Zod schema for mapping API responses to the CollectionForkMergedCollection application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionForkMergedCollectionResponse = z.lazy(() => {
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
 * Zod schema for mapping the CollectionForkMergedCollection application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionForkMergedCollectionRequest = z.lazy(() => {
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
