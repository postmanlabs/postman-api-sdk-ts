import { z } from 'zod';

/**
 * Zod schema for the ErrorNameMessageError1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const errorNameMessageError1 = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    message: z.string().optional(),
  });
});

/**
 * Information about the error.
 * @typedef  {ErrorNameMessageError1} errorNameMessageError1 - Information about the error. - Information about the error.
 * @property {string} - The error name.
 * @property {string} - The error message.
 */
export type ErrorNameMessageError1 = z.infer<typeof errorNameMessageError1>;

/**
 * Zod schema for mapping API responses to the ErrorNameMessageError1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const errorNameMessageError1Response = z.lazy(() => {
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
 * Zod schema for mapping the ErrorNameMessageError1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const errorNameMessageError1Request = z.lazy(() => {
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
