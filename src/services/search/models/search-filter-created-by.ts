import { z } from 'zod';

/**
 * Zod schema for the SearchFilterCreatedBy model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchFilterCreatedBy = z.lazy(() => {
  return z.object({
    _eq: z.string().optional(),
    _ne: z.string().optional(),
    _in: z.array(z.string()).optional(),
    _nin: z.array(z.string()).optional(),
  });
});

/**
 * Filters by the resource creator's user ID. Supported for all element types.
 * @typedef {SearchFilterCreatedBy} searchFilterCreatedBy
 * @property {string} _eq - The creator ID to match.
 * @property {string} _ne - The creator ID to exclude.
 * @property {string[]} _in - A list of creator IDs to match.
 * @property {string[]} _nin - A list of creator IDs to exclude.
 */
export type SearchFilterCreatedBy = z.infer<typeof searchFilterCreatedBy>;

/**
 * Zod schema for mapping API responses to the SearchFilterCreatedBy application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchFilterCreatedByResponse = z.lazy(() => {
  return z
    .object({
      $eq: z.string().optional(),
      $ne: z.string().optional(),
      $in: z.array(z.string()).optional(),
      $nin: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      _eq: data['$eq'],
      _ne: data['$ne'],
      _in: data['$in'],
      _nin: data['$nin'],
    }));
});

/**
 * Zod schema for mapping the SearchFilterCreatedBy application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchFilterCreatedByRequest = z.lazy(() => {
  return z
    .object({
      _eq: z.string().optional(),
      _ne: z.string().optional(),
      _in: z.array(z.string()).optional(),
      _nin: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      $eq: data['_eq'],
      $ne: data['_ne'],
      $in: data['_in'],
      $nin: data['_nin'],
    }));
});
