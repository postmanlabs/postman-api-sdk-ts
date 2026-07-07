import { z } from 'zod';

/**
 * Zod schema for the ApiSchemaFilesMeta model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const apiSchemaFilesMeta = z.lazy(() => {
  return z.object({
    nextCursor: z.string().optional(),
  });
});

/**
 * The schema's non-standard meta information.
 * @typedef  {ApiSchemaFilesMeta} apiSchemaFilesMeta - The schema's non-standard meta information. - The schema's non-standard meta information.
 * @property {string} - The pointer to the next record in the set of paginated results.
 */
export type ApiSchemaFilesMeta = z.infer<typeof apiSchemaFilesMeta>;

/**
 * Zod schema for mapping API responses to the ApiSchemaFilesMeta application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiSchemaFilesMetaResponse = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().optional(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
    }));
});

/**
 * Zod schema for mapping the ApiSchemaFilesMeta application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiSchemaFilesMetaRequest = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().optional(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
    }));
});
