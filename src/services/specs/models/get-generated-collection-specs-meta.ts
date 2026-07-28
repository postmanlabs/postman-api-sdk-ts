import { z } from 'zod';

/**
 * Zod schema for the GetGeneratedCollectionSpecsMeta model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getGeneratedCollectionSpecsMeta = z.lazy(() => {
  return z.object({
    nextCursor: z.string().optional().nullable(),
  });
});

/**
 * The response's meta information for paginated results.
 * @typedef  {GetGeneratedCollectionSpecsMeta} getGeneratedCollectionSpecsMeta - The response's meta information for paginated results. - The response's meta information for paginated results.
 * @property {string} - The pagination cursor that points to the next record in the results set.
 */
export type GetGeneratedCollectionSpecsMeta = z.infer<typeof getGeneratedCollectionSpecsMeta>;

/**
 * Zod schema for mapping API responses to the GetGeneratedCollectionSpecsMeta application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getGeneratedCollectionSpecsMetaResponse = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().optional().nullable(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
    }));
});

/**
 * Zod schema for mapping the GetGeneratedCollectionSpecsMeta application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getGeneratedCollectionSpecsMetaRequest = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().optional().nullable(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
    }));
});
