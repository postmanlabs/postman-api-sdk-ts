import { z } from 'zod';

/**
 * Zod schema for the Filter model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const filter = z.lazy(() => {
  return z.object({
    maxResults: z.number().optional(),
    supported: z.boolean().optional(),
  });
});

/**
 * Information about the filter configuration.
 * @typedef  {Filter} filter - Information about the filter configuration. - Information about the filter configuration.
 * @property {number} - The total number of maximum results allowed for filter operations.
 * @property {boolean} - If true, the feature is supported.
 */
export type Filter = z.infer<typeof filter>;

/**
 * Zod schema for mapping API responses to the Filter application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const filterResponse = z.lazy(() => {
  return z
    .object({
      maxResults: z.number().optional(),
      supported: z.boolean().optional(),
    })
    .transform((data) => ({
      maxResults: data['maxResults'],
      supported: data['supported'],
    }));
});

/**
 * Zod schema for mapping the Filter application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const filterRequest = z.lazy(() => {
  return z
    .object({
      maxResults: z.number().optional(),
      supported: z.boolean().optional(),
    })
    .transform((data) => ({
      maxResults: data['maxResults'],
      supported: data['supported'],
    }));
});
