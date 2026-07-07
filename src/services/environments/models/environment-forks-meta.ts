import { z } from 'zod';

/**
 * Zod schema for the EnvironmentForksMeta model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const environmentForksMeta = z.lazy(() => {
  return z.object({
    total: z.number().optional(),
    nextCursor: z.string().optional().nullable(),
  });
});

/**
 * The response's meta information for paginated results.
 * @typedef  {EnvironmentForksMeta} environmentForksMeta - The response's meta information for paginated results. - The response's meta information for paginated results.
 * @property {number} - The total number of forked environments.
 * @property {string} - The pagination cursor that points to the next record in the results set.
 */
export type EnvironmentForksMeta = z.infer<typeof environmentForksMeta>;

/**
 * Zod schema for mapping API responses to the EnvironmentForksMeta application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const environmentForksMetaResponse = z.lazy(() => {
  return z
    .object({
      total: z.number().optional(),
      nextCursor: z.string().optional().nullable(),
    })
    .transform((data) => ({
      total: data['total'],
      nextCursor: data['nextCursor'],
    }));
});

/**
 * Zod schema for mapping the EnvironmentForksMeta application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const environmentForksMetaRequest = z.lazy(() => {
  return z
    .object({
      total: z.number().optional(),
      nextCursor: z.string().optional().nullable(),
    })
    .transform((data) => ({
      total: data['total'],
      nextCursor: data['nextCursor'],
    }));
});
