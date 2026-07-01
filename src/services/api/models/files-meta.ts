import { z } from 'zod';

/**
 * Zod schema for the FilesMeta model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const filesMeta = z.lazy(() => {
  return z.object({
    nextPath: z.string().optional(),
  });
});

/**
 * The response's non-standard meta information.
 * @typedef  {FilesMeta} filesMeta - The response's non-standard meta information. - The response's non-standard meta information.
 * @property {string} - The URL path to the next file.
 */
export type FilesMeta = z.infer<typeof filesMeta>;

/**
 * Zod schema for mapping API responses to the FilesMeta application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const filesMetaResponse = z.lazy(() => {
  return z
    .object({
      nextPath: z.string().optional(),
    })
    .transform((data) => ({
      nextPath: data['nextPath'],
    }));
});

/**
 * Zod schema for mapping the FilesMeta application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const filesMetaRequest = z.lazy(() => {
  return z
    .object({
      nextPath: z.string().optional(),
    })
    .transform((data) => ({
      nextPath: data['nextPath'],
    }));
});
