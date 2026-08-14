import { z } from 'zod';

/**
 * Zod schema for the PhpOptions model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const phpOptions = z.lazy(() => {
  return z.object({
    packageName: z.string().optional(),
  });
});

/**
 * PHP-specific SDK generation options.
 * @typedef {PhpOptions} phpOptions
 * @property {string} packageName - The composer package name, in `vendor/package` format.
 */
export type PhpOptions = z.infer<typeof phpOptions>;

/**
 * Zod schema for mapping API responses to the PhpOptions application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const phpOptionsResponse = z.lazy(() => {
  return z
    .object({
      packageName: z.string().optional(),
    })
    .transform((data) => ({
      packageName: data['packageName'],
    }));
});

/**
 * Zod schema for mapping the PhpOptions application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const phpOptionsRequest = z.lazy(() => {
  return z
    .object({
      packageName: z.string().optional(),
    })
    .transform((data) => ({
      packageName: data['packageName'],
    }));
});
