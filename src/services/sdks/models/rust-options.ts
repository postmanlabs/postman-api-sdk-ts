import { z } from 'zod';

/**
 * Zod schema for the RustOptions model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const rustOptions = z.lazy(() => {
  return z.object({
    packageName: z.string().optional(),
  });
});

/**
 * Rust-specific SDK generation options.
 * @typedef {RustOptions} rustOptions
 * @property {string} packageName - The crates.io package's name.
 */
export type RustOptions = z.infer<typeof rustOptions>;

/**
 * Zod schema for mapping API responses to the RustOptions application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const rustOptionsResponse = z.lazy(() => {
  return z
    .object({
      packageName: z.string().optional(),
    })
    .transform((data) => ({
      packageName: data['packageName'],
    }));
});

/**
 * Zod schema for mapping the RustOptions application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const rustOptionsRequest = z.lazy(() => {
  return z
    .object({
      packageName: z.string().optional(),
    })
    .transform((data) => ({
      packageName: data['packageName'],
    }));
});
