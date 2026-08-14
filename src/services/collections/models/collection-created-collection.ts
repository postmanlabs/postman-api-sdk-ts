import { z } from 'zod';

/**
 * Zod schema for the CollectionCreatedCollection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionCreatedCollection = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    uid: z.string().optional(),
  });
});

/**
 * @typedef {CollectionCreatedCollection} collectionCreatedCollection
 * @property {string} id - The collection's ID.
 * @property {string} name - The collection's name.
 * @property {string} uid - The collection's unique ID.
 */
export type CollectionCreatedCollection = z.infer<typeof collectionCreatedCollection>;

/**
 * Zod schema for mapping API responses to the CollectionCreatedCollection application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionCreatedCollectionResponse = z.lazy(() => {
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
 * Zod schema for mapping the CollectionCreatedCollection application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionCreatedCollectionRequest = z.lazy(() => {
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
