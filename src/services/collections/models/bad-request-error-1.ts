import { z } from 'zod';

/**
 * Zod schema for the BadRequestError1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const badRequestError1 = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    message: z.string().optional(),
  });
});

/**
 * Information about the error.
 * @typedef {BadRequestError1} badRequestError1
 * @property {string} name - The error name.
 * @property {string} message - The error message.
 */
export type BadRequestError1 = z.infer<typeof badRequestError1>;

/**
 * Zod schema for mapping API responses to the BadRequestError1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const badRequestError1Response = z.lazy(() => {
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
 * Zod schema for mapping the BadRequestError1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const badRequestError1Request = z.lazy(() => {
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
