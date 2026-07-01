import { z } from 'zod';

/**
 * Zod schema for the Sort model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const sort = z.lazy(() => {
  return z.object({
    supported: z.boolean().optional(),
  });
});

/**
 * Information about the sort configuration.
 * @typedef  {Sort} sort - Information about the sort configuration. - Information about the sort configuration.
 * @property {boolean} - If true, the feature is supported.
 */
export type Sort = z.infer<typeof sort>;

/**
 * Zod schema for mapping API responses to the Sort application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sortResponse = z.lazy(() => {
  return z
    .object({
      supported: z.boolean().optional(),
    })
    .transform((data) => ({
      supported: data['supported'],
    }));
});

/**
 * Zod schema for mapping the Sort application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sortRequest = z.lazy(() => {
  return z
    .object({
      supported: z.boolean().optional(),
    })
    .transform((data) => ({
      supported: data['supported'],
    }));
});
