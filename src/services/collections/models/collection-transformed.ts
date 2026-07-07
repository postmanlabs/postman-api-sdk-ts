import { z } from 'zod';

/**
 * Zod schema for the CollectionTransformed model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionTransformed = z.lazy(() => {
  return z.object({
    output: z.string().optional(),
  });
});

/**
 *
 * @typedef  {CollectionTransformed} collectionTransformed
 * @property {string} - The collection's transformed output, in a stringified OpenAPI JSON or YAML format.
 */
export type CollectionTransformed = z.infer<typeof collectionTransformed>;

/**
 * Zod schema for mapping API responses to the CollectionTransformed application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionTransformedResponse = z.lazy(() => {
  return z
    .object({
      output: z.string().optional(),
    })
    .transform((data) => ({
      output: data['output'],
    }));
});

/**
 * Zod schema for mapping the CollectionTransformed application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionTransformedRequest = z.lazy(() => {
  return z
    .object({
      output: z.string().optional(),
    })
    .transform((data) => ({
      output: data['output'],
    }));
});
