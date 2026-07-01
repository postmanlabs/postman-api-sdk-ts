import { z } from 'zod';

/**
 * Zod schema for the TaskErrorInformationError model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const taskErrorInformationError = z.lazy(() => {
  return z.object({
    message: z.string().optional(),
  });
});

/**
 *
 * @typedef  {TaskErrorInformationError} taskErrorInformationError
 * @property {string} - The task's error message.
 */
export type TaskErrorInformationError = z.infer<typeof taskErrorInformationError>;

/**
 * Zod schema for mapping API responses to the TaskErrorInformationError application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const taskErrorInformationErrorResponse = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

/**
 * Zod schema for mapping the TaskErrorInformationError application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const taskErrorInformationErrorRequest = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});
