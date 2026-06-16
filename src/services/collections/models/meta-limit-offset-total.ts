import { z } from 'zod';

/**
 * Zod schema for the MetaLimitOffsetTotal model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const metaLimitOffsetTotal = z.lazy(() => {
  return z.object({
    total: z.number().optional(),
    offset: z.number().optional(),
    limit: z.number().optional(),
  });
});

/**
 * The response's meta information for paginated results.
 * @typedef  {MetaLimitOffsetTotal} metaLimitOffsetTotal - The response's meta information for paginated results. - The response's meta information for paginated results.
 * @property {number} - The number of records found.
 * @property {number} - The zero-based offset of the first item returned.
 * @property {number} - The maximum number of records in the paginated response.
 */
export type MetaLimitOffsetTotal = z.infer<typeof metaLimitOffsetTotal>;

/**
 * Zod schema for mapping API responses to the MetaLimitOffsetTotal application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const metaLimitOffsetTotalResponse = z.lazy(() => {
  return z
    .object({
      total: z.number().optional(),
      offset: z.number().optional(),
      limit: z.number().optional(),
    })
    .transform((data) => ({
      total: data['total'],
      offset: data['offset'],
      limit: data['limit'],
    }));
});

/**
 * Zod schema for mapping the MetaLimitOffsetTotal application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const metaLimitOffsetTotalRequest = z.lazy(() => {
  return z
    .object({
      total: z.number().optional(),
      offset: z.number().optional(),
      limit: z.number().optional(),
    })
    .transform((data) => ({
      total: data['total'],
      offset: data['offset'],
      limit: data['limit'],
    }));
});
