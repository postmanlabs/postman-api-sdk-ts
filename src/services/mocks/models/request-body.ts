import { z } from 'zod';

/**
 * Zod schema for the RequestBody model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const requestBody = z.lazy(() => {
  return z.object({
    mode: z.string().optional(),
    data: z.string().optional(),
  });
});

/**
 * The request's body information.
 * @typedef {RequestBody} requestBody
 * @property {string} mode - The request body's media type (mode).
 * @property {string} data - The request body's contents.
 */
export type RequestBody = z.infer<typeof requestBody>;

/**
 * Zod schema for mapping API responses to the RequestBody application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestBodyResponse = z.lazy(() => {
  return z
    .object({
      mode: z.string().optional(),
      data: z.string().optional(),
    })
    .transform((data) => ({
      mode: data['mode'],
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the RequestBody application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestBodyRequest = z.lazy(() => {
  return z
    .object({
      mode: z.string().optional(),
      data: z.string().optional(),
    })
    .transform((data) => ({
      mode: data['mode'],
      data: data['data'],
    }));
});
