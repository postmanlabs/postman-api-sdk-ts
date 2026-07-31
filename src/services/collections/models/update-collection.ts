import { z } from 'zod';

/**
 * Zod schema for the UpdateCollection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateCollection = z.lazy(() => {
  return z.object({
    collection: z.any().optional(),
  });
});

/**
 * 
 * @typedef  {UpdateCollection} updateCollection   
 * @property {any} - The collection updates to apply. You must pass at least one of the following: `info`, `variable`, `auth`, or `events`. Unsupported properties are rejected.

 */
export type UpdateCollection = z.infer<typeof updateCollection>;

/**
 * Zod schema for mapping API responses to the UpdateCollection application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateCollectionResponse = z.lazy(() => {
  return z
    .object({
      collection: z.any().optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});

/**
 * Zod schema for mapping the UpdateCollection application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateCollectionRequest = z.lazy(() => {
  return z
    .object({
      collection: z.any().optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});
