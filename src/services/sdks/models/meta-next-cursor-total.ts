import { z } from 'zod';

/**
 * Zod schema for the MetaNextCursorTotal model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const metaNextCursorTotal = z.lazy(() => {
  return z.object({
    nextCursor: z.string().optional().nullable(),
    total: z.number().gte(0).optional(),
  });
});

/**
 * The response's meta information for paginated results.
 * @typedef {MetaNextCursorTotal} metaNextCursorTotal
 * @property {string} nextCursor - The pagination cursor that points to the next record in the results set.
 * @property {number} total - The number of records found.
 */
export type MetaNextCursorTotal = z.infer<typeof metaNextCursorTotal>;

/**
 * Zod schema for mapping API responses to the MetaNextCursorTotal application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const metaNextCursorTotalResponse = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().optional().nullable(),
      total: z.number().gte(0).optional(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
      total: data['total'],
    }));
});

/**
 * Zod schema for mapping the MetaNextCursorTotal application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const metaNextCursorTotalRequest = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().optional().nullable(),
      total: z.number().gte(0).optional(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
      total: data['total'],
    }));
});
