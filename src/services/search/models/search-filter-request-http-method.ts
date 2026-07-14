import { z } from 'zod';

/**
 * Zod schema for the SearchFilterRequestHttpMethod model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchFilterRequestHttpMethod = z.lazy(() => {
  return z.object({
    _eq: z.string().optional(),
    _ne: z.string().optional(),
    _in: z.array(z.string()).optional(),
    _nin: z.array(z.string()).optional(),
  });
});

/**
 * Filters by HTTP method (for example, `GET` or `POST`). Supported for `requests` only.
 * @typedef  {SearchFilterRequestHttpMethod} searchFilterRequestHttpMethod - Filters by HTTP method (for example, `GET` or `POST`). Supported for `requests` only. - Filters by HTTP method (for example, `GET` or `POST`). Supported for `requests` only.
 * @property {string} - The HTTP method to match.
 * @property {string} - The HTTP method to exclude.
 * @property {string[]} - A list of HTTP methods to match.
 * @property {string[]} - A list of HTTP methods to exclude.
 */
export type SearchFilterRequestHttpMethod = z.infer<typeof searchFilterRequestHttpMethod>;

/**
 * Zod schema for mapping API responses to the SearchFilterRequestHttpMethod application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchFilterRequestHttpMethodResponse = z.lazy(() => {
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
 * Zod schema for mapping the SearchFilterRequestHttpMethod application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchFilterRequestHttpMethodRequest = z.lazy(() => {
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
