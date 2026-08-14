import { z } from 'zod';

/**
 * Zod schema for the ErrorTitleMessageError model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const errorTitleMessageError = z.lazy(() => {
  return z.object({
    title: z.string().optional(),
    message: z.string().optional(),
  });
});

/**
 * @typedef {ErrorTitleMessageError} errorTitleMessageError
 * @property {string} title - A short summary of the problem.
 * @property {string} message - The error message.
 */
export type ErrorTitleMessageError = z.infer<typeof errorTitleMessageError>;

/**
 * Zod schema for mapping API responses to the ErrorTitleMessageError application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const errorTitleMessageErrorResponse = z.lazy(() => {
  return z
    .object({
      title: z.string().optional(),
      message: z.string().optional(),
    })
    .transform((data) => ({
      title: data['title'],
      message: data['message'],
    }));
});

/**
 * Zod schema for mapping the ErrorTitleMessageError application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const errorTitleMessageErrorRequest = z.lazy(() => {
  return z
    .object({
      title: z.string().optional(),
      message: z.string().optional(),
    })
    .transform((data) => ({
      title: data['title'],
      message: data['message'],
    }));
});
