import { z } from 'zod';

/**
 * Zod schema for the ForbiddenError model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const forbiddenError = z.lazy(() => {
  return z.object({
    status: z.number().optional(),
    name: z.string().optional(),
    message: z.string().optional(),
    detail: z.string().optional(),
    instance: z.string().optional(),
  });
});

/**
 *
 * @typedef  {ForbiddenError} forbiddenError
 * @property {number} - The error's HTTP status code.
 * @property {string} - The error name.
 * @property {string} - The error message.
 * @property {string} - Information about the error.
 * @property {string} - The URI reference that identifies the specific occurrence of the problem.
 */
export type ForbiddenError = z.infer<typeof forbiddenError>;

/**
 * Zod schema for mapping API responses to the ForbiddenError application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const forbiddenErrorResponse = z.lazy(() => {
  return z
    .object({
      status: z.number().optional(),
      name: z.string().optional(),
      message: z.string().optional(),
      detail: z.string().optional(),
      instance: z.string().optional(),
    })
    .transform((data) => ({
      status: data['status'],
      name: data['name'],
      message: data['message'],
      detail: data['detail'],
      instance: data['instance'],
    }));
});

/**
 * Zod schema for mapping the ForbiddenError application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const forbiddenErrorRequest = z.lazy(() => {
  return z
    .object({
      status: z.number().optional(),
      name: z.string().optional(),
      message: z.string().optional(),
      detail: z.string().optional(),
      instance: z.string().optional(),
    })
    .transform((data) => ({
      status: data['status'],
      name: data['name'],
      message: data['message'],
      detail: data['detail'],
      instance: data['instance'],
    }));
});
