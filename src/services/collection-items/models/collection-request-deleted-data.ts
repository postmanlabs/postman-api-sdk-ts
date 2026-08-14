import { z } from 'zod';

/**
 * Zod schema for the CollectionRequestDeletedData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionRequestDeletedData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    owner: z.string().optional(),
  });
});

/**
 * The request's information.
 * @typedef {CollectionRequestDeletedData} collectionRequestDeletedData
 * @property {string} id - The request's ID.
 * @property {string} owner - The user ID of the request's owner.
 */
export type CollectionRequestDeletedData = z.infer<typeof collectionRequestDeletedData>;

/**
 * Zod schema for mapping API responses to the CollectionRequestDeletedData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestDeletedDataResponse = z.lazy(() => {
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
 * Zod schema for mapping the CollectionRequestDeletedData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestDeletedDataRequest = z.lazy(() => {
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
