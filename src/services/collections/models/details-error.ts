import { z } from 'zod';

/**
 * Zod schema for the DetailsError model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const detailsError = z.lazy(() => {
  return z.object({
    message: z.string().optional(),
  });
});

/**
 *
 * @typedef  {DetailsError} detailsError
 * @property {string} - The error message.
 */
export type DetailsError = z.infer<typeof detailsError>;

/**
 * Zod schema for mapping API responses to the DetailsError application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const detailsErrorResponse = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

/**
 * Zod schema for mapping the DetailsError application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const detailsErrorRequest = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});
