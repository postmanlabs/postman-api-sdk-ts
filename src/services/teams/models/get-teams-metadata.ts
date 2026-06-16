import { z } from 'zod';

/**
 * Zod schema for the GetTeamsMetadata model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getTeamsMetadata = z.lazy(() => {
  return z.object({
    nextCursor: z.string().optional().nullable(),
  });
});

/**
 * The response's meta information for paginated results.
 * @typedef  {GetTeamsMetadata} getTeamsMetadata - The response's meta information for paginated results. - The response's meta information for paginated results.
 * @property {string} - The pagination cursor that points to the next record in the results set.
 */
export type GetTeamsMetadata = z.infer<typeof getTeamsMetadata>;

/**
 * Zod schema for mapping API responses to the GetTeamsMetadata application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getTeamsMetadataResponse = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().optional().nullable(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
    }));
});

/**
 * Zod schema for mapping the GetTeamsMetadata application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getTeamsMetadataRequest = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().optional().nullable(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
    }));
});
