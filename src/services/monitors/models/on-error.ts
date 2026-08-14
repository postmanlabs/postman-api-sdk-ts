import { z } from 'zod';

/**
 * Zod schema for the OnError model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const onError = z.lazy(() => {
  return z.object({
    email: z.string().optional(),
  });
});

/**
 * @typedef {OnError} onError
 * @property {string} email - The email address of the user to notify on monitor error.
 */
export type OnError = z.infer<typeof onError>;

/**
 * Zod schema for mapping API responses to the OnError application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const onErrorResponse = z.lazy(() => {
  return z
    .object({
      email: z.string().optional(),
    })
    .transform((data) => ({
      email: data['email'],
    }));
});

/**
 * Zod schema for mapping the OnError application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const onErrorRequest = z.lazy(() => {
  return z
    .object({
      email: z.string().optional(),
    })
    .transform((data) => ({
      email: data['email'],
    }));
});
