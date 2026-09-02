import { z } from 'zod';

/**
 * Zod schema for the MetaLimitNextCursorTotalIncludeParam model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const metaLimitNextCursorTotalIncludeParam = z.lazy(() => {
  return z.object({
    limit: z.number().optional(),
    nextCursor: z.string().optional().nullable(),
    total: z.number().optional(),
  });
});

/**
 * The response's meta information for paginated results.
 * @typedef {MetaLimitNextCursorTotalIncludeParam} metaLimitNextCursorTotalIncludeParam
 * @property {number} limit - The maximum number of records in the paginated response.
 * @property {string} nextCursor - The pagination cursor that points to the next record in the results set.
 * @property {number} total - The number of records that match the defined criteria. This is only returned when the `include` query parameter is passed with the `meta.total` value.
 */
export type MetaLimitNextCursorTotalIncludeParam = z.infer<
  typeof metaLimitNextCursorTotalIncludeParam
>;

/**
 * Zod schema for mapping API responses to the MetaLimitNextCursorTotalIncludeParam application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const metaLimitNextCursorTotalIncludeParamResponse = z.lazy(() => {
  return z
    .object({
      limit: z.number().optional(),
      nextCursor: z.string().optional().nullable(),
      total: z.number().optional(),
    })
    .transform((data) => ({
      limit: data['limit'],
      nextCursor: data['nextCursor'],
      total: data['total'],
    }));
});

/**
 * Zod schema for mapping the MetaLimitNextCursorTotalIncludeParam application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const metaLimitNextCursorTotalIncludeParamRequest = z.lazy(() => {
  return z
    .object({
      limit: z.number().optional(),
      nextCursor: z.string().optional().nullable(),
      total: z.number().optional(),
    })
    .transform((data) => ({
      limit: data['limit'],
      nextCursor: data['nextCursor'],
      total: data['total'],
    }));
});
