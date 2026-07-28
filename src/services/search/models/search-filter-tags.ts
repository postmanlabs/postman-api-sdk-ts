import { z } from 'zod';

/**
 * Zod schema for the SearchFilterTags model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchFilterTags = z.lazy(() => {
  return z.object({
    _eq: z.string().optional(),
    _ne: z.string().optional(),
    _in: z.array(z.string()).optional(),
    _nin: z.array(z.string()).optional(),
  });
});

/**
 * Filters by tags. Supported for `workspaces` and `collections`.
 * @typedef  {SearchFilterTags} searchFilterTags - Filters by tags. Supported for `workspaces` and `collections`. - Filters by tags. Supported for `workspaces` and `collections`.
 * @property {string} - The tag to match.
 * @property {string} - The tag to exclude.
 * @property {string[]} - A list of tags to match.
 * @property {string[]} - A list of tags to exclude.
 */
export type SearchFilterTags = z.infer<typeof searchFilterTags>;

/**
 * Zod schema for mapping API responses to the SearchFilterTags application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchFilterTagsResponse = z.lazy(() => {
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
 * Zod schema for mapping the SearchFilterTags application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchFilterTagsRequest = z.lazy(() => {
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
