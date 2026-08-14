import { z } from 'zod';

/**
 * Zod schema for the ErrorTypeNameMessageTitleError model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const errorTypeNameMessageTitleError = z.lazy(() => {
  return z.object({
    type: z.string().optional(),
    name: z.string().optional(),
    message: z.string().optional(),
    title: z.string().optional(),
  });
});

/**
 * @typedef {ErrorTypeNameMessageTitleError} errorTypeNameMessageTitleError
 * @property {string} type - A short summary of the problem.
 * @property {string} name - The error name.
 * @property {string} message - The error message.
 * @property {string} title - A short summary of the problem.
 */
export type ErrorTypeNameMessageTitleError = z.infer<typeof errorTypeNameMessageTitleError>;

/**
 * Zod schema for mapping API responses to the ErrorTypeNameMessageTitleError application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const errorTypeNameMessageTitleErrorResponse = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      name: z.string().optional(),
      message: z.string().optional(),
      title: z.string().optional(),
    })
    .transform((data) => ({
      type: data['type'],
      name: data['name'],
      message: data['message'],
      title: data['title'],
    }));
});

/**
 * Zod schema for mapping the ErrorTypeNameMessageTitleError application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const errorTypeNameMessageTitleErrorRequest = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      name: z.string().optional(),
      message: z.string().optional(),
      title: z.string().optional(),
    })
    .transform((data) => ({
      type: data['type'],
      name: data['name'],
      message: data['message'],
      title: data['title'],
    }));
});
