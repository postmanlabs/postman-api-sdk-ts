import { z } from 'zod';

/**
 * Zod schema for the SuccessfulResponseMeta1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseMeta1 = z.lazy(() => {
  return z.object({
    count: z.number(),
    nextCursor: z.string().optional(),
  });
});

/**
 * The response's pagination information.
 * @typedef {SuccessfulResponseMeta1} successfulResponseMeta1
 * @property {number} count - The number of tagged elements returned in the response.
 * @property {string} nextCursor - The pagination cursor that points to the next record in the results set.
 */
export type SuccessfulResponseMeta1 = z.infer<typeof successfulResponseMeta1>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseMeta1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseMeta1Response = z.lazy(() => {
  return z
    .object({
      count: z.number(),
      nextCursor: z.string().optional(),
    })
    .transform((data) => ({
      count: data['count'],
      nextCursor: data['nextCursor'],
    }));
});

/**
 * Zod schema for mapping the SuccessfulResponseMeta1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseMeta1Request = z.lazy(() => {
  return z
    .object({
      count: z.number(),
      nextCursor: z.string().optional(),
    })
    .transform((data) => ({
      count: data['count'],
      nextCursor: data['nextCursor'],
    }));
});
