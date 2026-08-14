import { z } from 'zod';

/**
 * Zod schema for the SearchFilterRequestResourceType model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchFilterRequestResourceType = z.lazy(() => {
  return z.object({
    _eq: z.string().optional(),
    _ne: z.string().optional(),
    _in: z.array(z.string()).optional(),
    _nin: z.array(z.string()).optional(),
  });
});

/**
 * Filters by resource type variant (for example, `http` or `grpc`). Supported for `requests` only.
 * @typedef {SearchFilterRequestResourceType} searchFilterRequestResourceType
 * @property {string} _eq - The resource type to match.
 * @property {string} _ne - The resource type to exclude.
 * @property {string[]} _in - A list of resource types to match.
 * @property {string[]} _nin - A list of resource types to exclude.
 */
export type SearchFilterRequestResourceType = z.infer<typeof searchFilterRequestResourceType>;

/**
 * Zod schema for mapping API responses to the SearchFilterRequestResourceType application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchFilterRequestResourceTypeResponse = z.lazy(() => {
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
 * Zod schema for mapping the SearchFilterRequestResourceType application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchFilterRequestResourceTypeRequest = z.lazy(() => {
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
