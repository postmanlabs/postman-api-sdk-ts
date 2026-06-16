import { z } from 'zod';

/**
 * Zod schema for the ResponseBody model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const responseBody = z.lazy(() => {
  return z.object({
    data: z.string().optional(),
  });
});

/**
 * The response's body information.
 * @typedef  {ResponseBody} responseBody - The response's body information. - The response's body information.
 * @property {string} - The response body's contents.
 */
export type ResponseBody = z.infer<typeof responseBody>;

/**
 * Zod schema for mapping API responses to the ResponseBody application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const responseBodyResponse = z.lazy(() => {
  return z
    .object({
      data: z.string().optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the ResponseBody application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const responseBodyRequest = z.lazy(() => {
  return z
    .object({
      data: z.string().optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});
