import { z } from 'zod';

/**
 * Zod schema for the ApiCollectionAdded model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const apiCollectionAdded = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
  });
});

/**
 *
 * @typedef  {ApiCollectionAdded} apiCollectionAdded
 * @property {string} - The collection's ID.
 */
export type ApiCollectionAdded = z.infer<typeof apiCollectionAdded>;

/**
 * Zod schema for mapping API responses to the ApiCollectionAdded application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCollectionAddedResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the ApiCollectionAdded application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCollectionAddedRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});
