import { z } from 'zod';

/**
 * Zod schema for the SearchFilterWorkspaceId model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchFilterWorkspaceId = z.lazy(() => {
  return z.object({
    _eq: z.string().optional(),
    _ne: z.string().optional(),
    _in: z.array(z.string()).optional(),
    _nin: z.array(z.string()).optional(),
  });
});

/**
 * Filters by workspace ID. Supported for all element types.
 * @typedef  {SearchFilterWorkspaceId} searchFilterWorkspaceId - Filters by workspace ID. Supported for all element types. - Filters by workspace ID. Supported for all element types.
 * @property {string} - The workspace ID to match.
 * @property {string} - The workspace ID to exclude.
 * @property {string[]} - A list of workspace IDs to match.
 * @property {string[]} - A list of workspace IDs to exclude.
 */
export type SearchFilterWorkspaceId = z.infer<typeof searchFilterWorkspaceId>;

/**
 * Zod schema for mapping API responses to the SearchFilterWorkspaceId application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchFilterWorkspaceIdResponse = z.lazy(() => {
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
 * Zod schema for mapping the SearchFilterWorkspaceId application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchFilterWorkspaceIdRequest = z.lazy(() => {
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
