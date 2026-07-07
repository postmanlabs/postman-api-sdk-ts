import { z } from 'zod';

/**
 * Zod schema for the PaginationData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const paginationData = z.lazy(() => {
  return z.object({
    total: z.number().optional(),
    limit: z.number().optional(),
    offset: z.number().optional(),
    hasMore: z.boolean().optional(),
  });
});

/**
 * Information about the response pagination.
 * @typedef  {PaginationData} paginationData - Information about the response pagination. - Information about the response pagination.
 * @property {number} - The total number of records available.
 * @property {number} - The maximum number of records returned in the response.
 * @property {number} - The number of records skipped.
 * @property {boolean} - Indicates whether more are records available.
 */
export type PaginationData = z.infer<typeof paginationData>;

/**
 * Zod schema for mapping API responses to the PaginationData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const paginationDataResponse = z.lazy(() => {
  return z
    .object({
      total: z.number().optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
      has_more: z.boolean().optional(),
    })
    .transform((data) => ({
      total: data['total'],
      limit: data['limit'],
      offset: data['offset'],
      hasMore: data['has_more'],
    }));
});

/**
 * Zod schema for mapping the PaginationData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const paginationDataRequest = z.lazy(() => {
  return z
    .object({
      total: z.number().optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
      hasMore: z.boolean().optional(),
    })
    .transform((data) => ({
      total: data['total'],
      limit: data['limit'],
      offset: data['offset'],
      has_more: data['hasMore'],
    }));
});
