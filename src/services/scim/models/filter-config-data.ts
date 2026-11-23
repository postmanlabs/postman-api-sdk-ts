import { z } from 'zod';

/**
 * Zod schema for the FilterConfigData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const filterConfigData = z.lazy(() => {
  return z.object({
    maxResults: z.number().optional(),
    supported: z.boolean().optional(),
  });
});

/**
 * Information about the filter configuration.
 * @typedef {FilterConfigData} filterConfigData
 * @property {number} maxResults - The total number of maximum results allowed for filter operations.
 * @property {boolean} supported - If true, the feature is supported.
 */
export type FilterConfigData = z.infer<typeof filterConfigData>;

/**
 * Zod schema for mapping API responses to the FilterConfigData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const filterConfigDataResponse = z.lazy(() => {
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
 * Zod schema for mapping the FilterConfigData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const filterConfigDataRequest = z.lazy(() => {
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
