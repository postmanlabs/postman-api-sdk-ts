import { z } from 'zod';

/**
 * Zod schema for the SearchFilterPrivateApiNetwork model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchFilterPrivateApiNetwork = z.lazy(() => {
  return z.object({
    _eq: z.boolean().optional(),
    _ne: z.boolean().optional(),
  });
});

/**
 * Filters by private API network membership. Supported for all element types.
 * @typedef {SearchFilterPrivateApiNetwork} searchFilterPrivateApiNetwork
 * @property {boolean} _eq - If true, return only resources that are part of the Private API Network.
 * @property {boolean} _ne - If true, exclude resources that are part of the Private API Network.
 */
export type SearchFilterPrivateApiNetwork = z.infer<typeof searchFilterPrivateApiNetwork>;

/**
 * Zod schema for mapping API responses to the SearchFilterPrivateApiNetwork application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchFilterPrivateApiNetworkResponse = z.lazy(() => {
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
 * Zod schema for mapping the SearchFilterPrivateApiNetwork application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchFilterPrivateApiNetworkRequest = z.lazy(() => {
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
