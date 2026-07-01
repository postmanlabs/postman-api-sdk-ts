import { z } from 'zod';

/**
 * Zod schema for the GetApiVersionsMeta model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiVersionsMeta = z.lazy(() => {
  return z.object({
    limit: z.number().optional(),
    total: z.number().optional(),
    nextCursor: z.string().optional(),
  });
});

/**
 * The response's meta information for paginated results.
 * @typedef  {GetApiVersionsMeta} getApiVersionsMeta - The response's meta information for paginated results. - The response's meta information for paginated results.
 * @property {number} - The maximum number of records in the paginated response.
 * @property {number} - The number of records that match the defined criteria.
 * @property {string} - The pagination cursor that points to the next record in the results set.
 */
export type GetApiVersionsMeta = z.infer<typeof getApiVersionsMeta>;

/**
 * Zod schema for mapping API responses to the GetApiVersionsMeta application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiVersionsMetaResponse = z.lazy(() => {
  return z
    .object({
      limit: z.number().optional(),
      total: z.number().optional(),
      nextCursor: z.string().optional(),
    })
    .transform((data) => ({
      limit: data['limit'],
      total: data['total'],
      nextCursor: data['nextCursor'],
    }));
});

/**
 * Zod schema for mapping the GetApiVersionsMeta application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiVersionsMetaRequest = z.lazy(() => {
  return z
    .object({
      limit: z.number().optional(),
      total: z.number().optional(),
      nextCursor: z.string().optional(),
    })
    .transform((data) => ({
      limit: data['limit'],
      total: data['total'],
      nextCursor: data['nextCursor'],
    }));
});
