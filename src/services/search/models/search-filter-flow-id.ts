import { z } from 'zod';

/**
 * Zod schema for the SearchFilterFlowId model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchFilterFlowId = z.lazy(() => {
  return z.object({
    _eq: z.string().optional(),
    _ne: z.string().optional(),
    _in: z.array(z.string()).optional(),
    _nin: z.array(z.string()).optional(),
  });
});

/**
 * Filters by flow ID. Supported for `flows` only.
 * @typedef  {SearchFilterFlowId} searchFilterFlowId - Filters by flow ID. Supported for `flows` only. - Filters by flow ID. Supported for `flows` only.
 * @property {string} - The flow ID to match.
 * @property {string} - The flow ID to exclude.
 * @property {string[]} - A list of flow IDs to match.
 * @property {string[]} - A list of flow IDs to exclude.
 */
export type SearchFilterFlowId = z.infer<typeof searchFilterFlowId>;

/**
 * Zod schema for mapping API responses to the SearchFilterFlowId application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchFilterFlowIdResponse = z.lazy(() => {
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
 * Zod schema for mapping the SearchFilterFlowId application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchFilterFlowIdRequest = z.lazy(() => {
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
