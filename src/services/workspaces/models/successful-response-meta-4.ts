import { z } from 'zod';

/**
 * Zod schema for the SuccessfulResponseMeta4 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseMeta4 = z.lazy(() => {
  return z.object({
    nextCursor: z.string().optional(),
  });
});

/**
 * The response's meta information for paginated results. This object only returns if you pass the `limit` query parameter.
 * @typedef  {SuccessfulResponseMeta4} successfulResponseMeta4 - The response's meta information for paginated results. This object only returns if you pass the `limit` query parameter. - The response's meta information for paginated results. This object only returns if you pass the `limit` query parameter.
 * @property {string} - The pagination cursor that points to the next record in the results set.
 */
export type SuccessfulResponseMeta4 = z.infer<typeof successfulResponseMeta4>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseMeta4 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseMeta4Response = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().optional(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
    }));
});

/**
 * Zod schema for mapping the SuccessfulResponseMeta4 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseMeta4Request = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().optional(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
    }));
});
