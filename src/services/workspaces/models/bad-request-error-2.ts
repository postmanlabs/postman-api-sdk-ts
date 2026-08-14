import { z } from 'zod';

/**
 * Zod schema for the BadRequestError2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const badRequestError2 = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    message: z.string().optional(),
  });
});

/**
 * @typedef {BadRequestError2} badRequestError2
 * @property {string} name - The error name.
 * @property {string} message - The error message.
 */
export type BadRequestError2 = z.infer<typeof badRequestError2>;

/**
 * Zod schema for mapping API responses to the BadRequestError2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const badRequestError2Response = z.lazy(() => {
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
 * Zod schema for mapping the BadRequestError2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const badRequestError2Request = z.lazy(() => {
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
