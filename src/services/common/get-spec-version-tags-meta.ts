import { z } from 'zod';

/**
 * Zod schema for the GetSpecVersionTagsMeta model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getSpecVersionTagsMeta = z.lazy(() => {
  return z.object({
    nextCursor: z.string().optional().nullable(),
  });
});

/**
 * @typedef {GetSpecVersionTagsMeta} getSpecVersionTagsMeta
 * @property {string} nextCursor - The pagination cursor that points to the next record in the results set.
 */
export type GetSpecVersionTagsMeta = z.infer<typeof getSpecVersionTagsMeta>;

/**
 * Zod schema for mapping API responses to the GetSpecVersionTagsMeta application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getSpecVersionTagsMetaResponse = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().optional().nullable(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
    }));
});

/**
 * Zod schema for mapping the GetSpecVersionTagsMeta application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getSpecVersionTagsMetaRequest = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().optional().nullable(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
    }));
});
