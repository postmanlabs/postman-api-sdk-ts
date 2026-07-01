import { z } from 'zod';

/**
 * Zod schema for the GetMigrationStatus400ErrorError model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getMigrationStatus400ErrorError = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    message: z.string().optional(),
    details: z.any().optional(),
  });
});

/**
 *
 * @typedef  {GetMigrationStatus400ErrorError} getMigrationStatus400ErrorError
 * @property {string} - The error name.
 * @property {string} - The error message.
 * @property {any} - Information about the error.
 */
export type GetMigrationStatus400ErrorError = z.infer<typeof getMigrationStatus400ErrorError>;

/**
 * Zod schema for mapping API responses to the GetMigrationStatus400ErrorError application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getMigrationStatus400ErrorErrorResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      message: z.string().optional(),
      details: z.any().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      message: data['message'],
      details: data['details'],
    }));
});

/**
 * Zod schema for mapping the GetMigrationStatus400ErrorError application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getMigrationStatus400ErrorErrorRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      message: z.string().optional(),
      details: z.any().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      message: data['message'],
      details: data['details'],
    }));
});
