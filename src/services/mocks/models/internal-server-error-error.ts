import { z } from 'zod';

/**
 * Zod schema for the InternalServerErrorError model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const internalServerErrorError = z.lazy(() => {
  return z.object({
    type: z.string().optional(),
    message: z.string().optional(),
  });
});

/**
 * @typedef {InternalServerErrorError} internalServerErrorError
 * @property {string} type - The error name.
 * @property {string} message - The error message.
 */
export type InternalServerErrorError = z.infer<typeof internalServerErrorError>;

/**
 * Zod schema for mapping API responses to the InternalServerErrorError application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const internalServerErrorErrorResponse = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      message: z.string().optional(),
    })
    .transform((data) => ({
      type: data['type'],
      message: data['message'],
    }));
});

/**
 * Zod schema for mapping the InternalServerErrorError application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const internalServerErrorErrorRequest = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      message: z.string().optional(),
    })
    .transform((data) => ({
      type: data['type'],
      message: data['message'],
    }));
});
