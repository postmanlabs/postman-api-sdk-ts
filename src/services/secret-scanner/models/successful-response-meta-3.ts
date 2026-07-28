import { z } from 'zod';

/**
 * Zod schema for the SuccessfulResponseMeta3 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseMeta3 = z.lazy(() => {
  return z.object({
    total: z.number().optional(),
  });
});

/**
 *
 * @typedef  {SuccessfulResponseMeta3} successfulResponseMeta3
 * @property {number} - The total number of supported secrets.
 */
export type SuccessfulResponseMeta3 = z.infer<typeof successfulResponseMeta3>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseMeta3 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseMeta3Response = z.lazy(() => {
  return z
    .object({
      total: z.number().optional(),
    })
    .transform((data) => ({
      total: data['total'],
    }));
});

/**
 * Zod schema for mapping the SuccessfulResponseMeta3 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseMeta3Request = z.lazy(() => {
  return z
    .object({
      total: z.number().optional(),
    })
    .transform((data) => ({
      total: data['total'],
    }));
});
