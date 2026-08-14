import { z } from 'zod';

/**
 * Zod schema for the CollectionForksInfoMeta model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionForksInfoMeta = z.lazy(() => {
  return z.object({
    nextCursor: z.string().optional().nullable(),
    total: z.number().optional(),
  });
});

/**
 * The response's meta information for paginated results.
 * @typedef {CollectionForksInfoMeta} collectionForksInfoMeta
 * @property {string} nextCursor - The pagination cursor that points to the next record in the results set.
 * @property {number} total - The total number of forked collections.
 */
export type CollectionForksInfoMeta = z.infer<typeof collectionForksInfoMeta>;

/**
 * Zod schema for mapping API responses to the CollectionForksInfoMeta application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionForksInfoMetaResponse = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().optional().nullable(),
      total: z.number().optional(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
      total: data['total'],
    }));
});

/**
 * Zod schema for mapping the CollectionForksInfoMeta application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionForksInfoMetaRequest = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().optional().nullable(),
      total: z.number().optional(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
      total: data['total'],
    }));
});
