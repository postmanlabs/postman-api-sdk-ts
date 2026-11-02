import { z } from 'zod';

/**
 * Zod schema for the NotFoundError2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const notFoundError2 = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    message: z.string().optional(),
    statusCode: z.number().optional(),
  });
});

/**
 * Information about the error.
 * @typedef {NotFoundError2} notFoundError2
 * @property {string} name - The error name.
 * @property {string} message - The error message.
 * @property {number} statusCode - The error's HTTP status code.
 */
export type NotFoundError2 = z.infer<typeof notFoundError2>;

/**
 * Zod schema for mapping API responses to the NotFoundError2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const notFoundError2Response = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      message: z.string().optional(),
      statusCode: z.number().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      message: data['message'],
      statusCode: data['statusCode'],
    }));
});

/**
 * Zod schema for mapping the NotFoundError2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const notFoundError2Request = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      message: z.string().optional(),
      statusCode: z.number().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      message: data['message'],
      statusCode: data['statusCode'],
    }));
});
