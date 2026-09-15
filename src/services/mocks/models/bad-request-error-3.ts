import { z } from 'zod';

/**
 * Zod schema for the BadRequestError3 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const badRequestError3 = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    header: z.string().optional(),
    message: z.string().optional(),
  });
});

/**
 * Information about the error.
 * @typedef {BadRequestError3} badRequestError3
 * @property {string} name - The error name.
 * @property {string} header - Information about the error.
 * @property {string} message - The error message.
 */
export type BadRequestError3 = z.infer<typeof badRequestError3>;

/**
 * Zod schema for mapping API responses to the BadRequestError3 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const badRequestError3Response = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      header: z.string().optional(),
      message: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      header: data['header'],
      message: data['message'],
    }));
});

/**
 * Zod schema for mapping the BadRequestError3 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const badRequestError3Request = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      header: z.string().optional(),
      message: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      header: data['header'],
      message: data['message'],
    }));
});
