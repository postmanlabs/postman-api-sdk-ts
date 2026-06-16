import { z } from 'zod';

/**
 * Zod schema for the ErrorDetailsError model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const errorDetailsError = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    message: z.string().optional(),
  });
});

/**
 * Information about the error.
 * @typedef  {ErrorDetailsError} errorDetailsError - Information about the error. - Information about the error.
 * @property {string} - The error name.
 * @property {string} - The error message.
 */
export type ErrorDetailsError = z.infer<typeof errorDetailsError>;

/**
 * Zod schema for mapping API responses to the ErrorDetailsError application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const errorDetailsErrorResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      message: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      message: data['message'],
    }));
});

/**
 * Zod schema for mapping the ErrorDetailsError application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const errorDetailsErrorRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      message: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      message: data['message'],
    }));
});
