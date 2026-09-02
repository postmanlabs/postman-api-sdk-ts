import { z } from 'zod';

/**
 * Zod schema for the MetaNetCursorLimit model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const metaNetCursorLimit = z.lazy(() => {
  return z.object({
    nextCursor: z.string().optional().nullable(),
    limit: z.number().optional(),
  });
});

/**
 * The response's meta information for paginated results.
 * @typedef {MetaNetCursorLimit} metaNetCursorLimit
 * @property {string} nextCursor - The pagination cursor that points to the next record in the results set.
 * @property {number} limit - The maximum number of records in the paginated response.
 */
export type MetaNetCursorLimit = z.infer<typeof metaNetCursorLimit>;

/**
 * Zod schema for mapping API responses to the MetaNetCursorLimit application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const metaNetCursorLimitResponse = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().optional().nullable(),
      limit: z.number().optional(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
      limit: data['limit'],
    }));
});

/**
 * Zod schema for mapping the MetaNetCursorLimit application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const metaNetCursorLimitRequest = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().optional().nullable(),
      limit: z.number().optional(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
      limit: data['limit'],
    }));
});
