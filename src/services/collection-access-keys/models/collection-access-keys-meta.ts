import { z } from 'zod';

/**
 * Zod schema for the CollectionAccessKeysMeta model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionAccessKeysMeta = z.lazy(() => {
  return z.object({
    nextCursor: z.string().optional(),
    prevCursor: z.string().optional(),
  });
});

/**
 * The response's non-standard metadata information.
 * @typedef  {CollectionAccessKeysMeta} collectionAccessKeysMeta - The response's non-standard metadata information. - The response's non-standard metadata information.
 * @property {string} - The pagination cursor that points to the next record in the results set.
 * @property {string} - The pagination cursor to previous set of response data.
 */
export type CollectionAccessKeysMeta = z.infer<typeof collectionAccessKeysMeta>;

/**
 * Zod schema for mapping API responses to the CollectionAccessKeysMeta application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionAccessKeysMetaResponse = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().optional(),
      prevCursor: z.string().optional(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
      prevCursor: data['prevCursor'],
    }));
});

/**
 * Zod schema for mapping the CollectionAccessKeysMeta application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionAccessKeysMetaRequest = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().optional(),
      prevCursor: z.string().optional(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
      prevCursor: data['prevCursor'],
    }));
});
