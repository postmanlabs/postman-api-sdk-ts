import { z } from 'zod';

/**
 * Zod schema for the NotFoundError1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const notFoundError1 = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    message: z.string().optional(),
  });
});

/**
 * @typedef {NotFoundError1} notFoundError1
 * @property {string} name - The error name.
 * @property {string} message - The error message.
 */
export type NotFoundError1 = z.infer<typeof notFoundError1>;

/**
 * Zod schema for mapping API responses to the NotFoundError1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const notFoundError1Response = z.lazy(() => {
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
 * Zod schema for mapping the NotFoundError1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const notFoundError1Request = z.lazy(() => {
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
