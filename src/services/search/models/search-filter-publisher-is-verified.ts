import { z } from 'zod';

/**
 * Zod schema for the SearchFilterPublisherIsVerified model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchFilterPublisherIsVerified = z.lazy(() => {
  return z.object({
    _eq: z.boolean().optional(),
    _ne: z.boolean().optional(),
  });
});

/**
 * Filters by publisher verification status. Supported for all element types.
 * @typedef  {SearchFilterPublisherIsVerified} searchFilterPublisherIsVerified - Filters by publisher verification status. Supported for all element types. - Filters by publisher verification status. Supported for all element types.
 * @property {boolean} - If true, return only results from verified publishers.
 * @property {boolean} - If true, exclude results from verified publishers.
 */
export type SearchFilterPublisherIsVerified = z.infer<typeof searchFilterPublisherIsVerified>;

/**
 * Zod schema for mapping API responses to the SearchFilterPublisherIsVerified application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchFilterPublisherIsVerifiedResponse = z.lazy(() => {
  return z
    .object({
      $eq: z.boolean().optional(),
      $ne: z.boolean().optional(),
    })
    .transform((data) => ({
      _eq: data['$eq'],
      _ne: data['$ne'],
    }));
});

/**
 * Zod schema for mapping the SearchFilterPublisherIsVerified application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchFilterPublisherIsVerifiedRequest = z.lazy(() => {
  return z
    .object({
      _eq: z.boolean().optional(),
      _ne: z.boolean().optional(),
    })
    .transform((data) => ({
      $eq: data['_eq'],
      $ne: data['_ne'],
    }));
});
