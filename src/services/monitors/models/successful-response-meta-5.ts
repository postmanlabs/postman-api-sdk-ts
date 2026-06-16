import { z } from 'zod';

/**
 * Zod schema for the SuccessfulResponseMeta5 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseMeta5 = z.lazy(() => {
  return z.object({
    nextCursor: z.string().optional().nullable(),
    limit: z.number().optional(),
  });
});

/**
 * The response's meta information for paginated results.
 * @typedef  {SuccessfulResponseMeta5} successfulResponseMeta5 - The response's meta information for paginated results. - The response's meta information for paginated results.
 * @property {string} - The pagination cursor that points to the next record in the results set.
 * @property {number} - The maximum number of records in the paginated response.
 */
export type SuccessfulResponseMeta5 = z.infer<typeof successfulResponseMeta5>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseMeta5 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseMeta5Response = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().optional().nullable(),
      limit: z.number().optional(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
      limit: data['limit'],
    }));
});

/**
 * Zod schema for mapping the SuccessfulResponseMeta5 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseMeta5Request = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().optional().nullable(),
      limit: z.number().optional(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
      limit: data['limit'],
    }));
});
