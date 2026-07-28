import { z } from 'zod';

/**
 * Zod schema for the SuccessfulResponseCollections model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseCollections = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    uid: z.string().optional(),
  });
});

/**
 *
 * @typedef  {SuccessfulResponseCollections} successfulResponseCollections
 * @property {string} - The collection's ID.
 * @property {string} - The collection's name.
 * @property {string} - The collection's unique ID.
 */
export type SuccessfulResponseCollections = z.infer<typeof successfulResponseCollections>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseCollections application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseCollectionsResponse = z.lazy(() => {
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
 * Zod schema for mapping the SuccessfulResponseCollections application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseCollectionsRequest = z.lazy(() => {
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
