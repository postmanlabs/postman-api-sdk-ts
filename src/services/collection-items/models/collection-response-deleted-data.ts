import { z } from 'zod';

/**
 * Zod schema for the CollectionResponseDeletedData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionResponseDeletedData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    owner: z.string().optional(),
  });
});

/**
 * The response's information.
 * @typedef {CollectionResponseDeletedData} collectionResponseDeletedData
 * @property {string} id - The response's ID.
 * @property {string} owner - The user ID of the request's owner.
 */
export type CollectionResponseDeletedData = z.infer<typeof collectionResponseDeletedData>;

/**
 * Zod schema for mapping API responses to the CollectionResponseDeletedData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionResponseDeletedDataResponse = z.lazy(() => {
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
 * Zod schema for mapping the CollectionResponseDeletedData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionResponseDeletedDataRequest = z.lazy(() => {
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
