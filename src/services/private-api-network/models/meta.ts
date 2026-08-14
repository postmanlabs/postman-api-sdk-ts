import { z } from 'zod';

/**
 * Zod schema for the Meta model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const meta = z.lazy(() => {
  return z.object({
    limit: z.number().lte(1000).optional(),
    offset: z.number().optional(),
    totalCount: z.number().optional(),
  });
});

/**
 * The response's non-standard meta information.
 * @typedef {Meta} meta
 * @property {number} limit - The maximum number of elements returned. If the value exceeds the maximum value of `1000`, then the system uses the `1000` value.
 * @property {number} offset - The zero-based offset of the first item returned.
 * @property {number} totalCount - The total number of elements.
 */
export type Meta = z.infer<typeof meta>;

/**
 * Zod schema for mapping API responses to the Meta application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const metaResponse = z.lazy(() => {
  return z
    .object({
      limit: z.number().lte(1000).optional(),
      offset: z.number().optional(),
      totalCount: z.number().optional(),
    })
    .transform((data) => ({
      limit: data['limit'],
      offset: data['offset'],
      totalCount: data['totalCount'],
    }));
});

/**
 * Zod schema for mapping the Meta application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const metaRequest = z.lazy(() => {
  return z
    .object({
      limit: z.number().lte(1000).optional(),
      offset: z.number().optional(),
      totalCount: z.number().optional(),
    })
    .transform((data) => ({
      limit: data['limit'],
      offset: data['offset'],
      totalCount: data['totalCount'],
    }));
});
