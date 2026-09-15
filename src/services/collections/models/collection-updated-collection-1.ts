import { z } from 'zod';

/**
 * Zod schema for the CollectionUpdatedCollection1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionUpdatedCollection1 = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    uid: z.string().optional(),
  });
});

/**
 * Information about the updated collection.
 * @typedef {CollectionUpdatedCollection1} collectionUpdatedCollection1
 * @property {string} id - The collection's ID.
 * @property {string} name - The collection's name.
 * @property {string} uid - The collection's unique ID.
 */
export type CollectionUpdatedCollection1 = z.infer<typeof collectionUpdatedCollection1>;

/**
 * Zod schema for mapping API responses to the CollectionUpdatedCollection1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionUpdatedCollection1Response = z.lazy(() => {
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
 * Zod schema for mapping the CollectionUpdatedCollection1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionUpdatedCollection1Request = z.lazy(() => {
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
