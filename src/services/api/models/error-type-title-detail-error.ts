import { z } from 'zod';

/**
 * Zod schema for the ErrorTypeTitleDetailError model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const errorTypeTitleDetailError = z.lazy(() => {
  return z.object({
    type: z.string().optional(),
    title: z.string().optional(),
    detail: z.string().optional(),
  });
});

/**
 * Information about the error.
 * @typedef  {ErrorTypeTitleDetailError} errorTypeTitleDetailError - Information about the error. - Information about the error.
 * @property {string} - The type of error.
 * @property {string} - A short summary of the problem.
 * @property {string} - Details about the error.
 */
export type ErrorTypeTitleDetailError = z.infer<typeof errorTypeTitleDetailError>;

/**
 * Zod schema for mapping API responses to the ErrorTypeTitleDetailError application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const errorTypeTitleDetailErrorResponse = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      title: z.string().optional(),
      detail: z.string().optional(),
    })
    .transform((data) => ({
      type: data['type'],
      title: data['title'],
      detail: data['detail'],
    }));
});

/**
 * Zod schema for mapping the ErrorTypeTitleDetailError application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const errorTypeTitleDetailErrorRequest = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      title: z.string().optional(),
      detail: z.string().optional(),
    })
    .transform((data) => ({
      type: data['type'],
      title: data['title'],
      detail: data['detail'],
    }));
});
