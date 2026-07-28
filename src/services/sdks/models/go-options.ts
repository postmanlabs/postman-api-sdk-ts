import { z } from 'zod';

/**
 * Zod schema for the GoOptions model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const goOptions = z.lazy(() => {
  return z.object({
    goModuleName: z.string().optional(),
  });
});

/**
 * Go-specific SDK generation options.
 * @typedef  {GoOptions} goOptions - Go-specific SDK generation options. - Go-specific SDK generation options.
 * @property {string} - The Go module path written into the `go.mod` definition file.
 */
export type GoOptions = z.infer<typeof goOptions>;

/**
 * Zod schema for mapping API responses to the GoOptions application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const goOptionsResponse = z.lazy(() => {
  return z
    .object({
      goModuleName: z.string().optional(),
    })
    .transform((data) => ({
      goModuleName: data['goModuleName'],
    }));
});

/**
 * Zod schema for mapping the GoOptions application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const goOptionsRequest = z.lazy(() => {
  return z
    .object({
      goModuleName: z.string().optional(),
    })
    .transform((data) => ({
      goModuleName: data['goModuleName'],
    }));
});
