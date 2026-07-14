import { z } from 'zod';

/**
 * Zod schema for the CsharpOptions model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const csharpOptions = z.lazy(() => {
  return z.object({
    packageId: z.string().optional(),
  });
});

/**
 * C#-specific SDK generation options.
 * @typedef  {CsharpOptions} csharpOptions - C#-specific SDK generation options. - C#-specific SDK generation options.
 * @property {string} - The NuGet package's ID.
 */
export type CsharpOptions = z.infer<typeof csharpOptions>;

/**
 * Zod schema for mapping API responses to the CsharpOptions application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const csharpOptionsResponse = z.lazy(() => {
  return z
    .object({
      packageId: z.string().optional(),
    })
    .transform((data) => ({
      packageId: data['packageId'],
    }));
});

/**
 * Zod schema for mapping the CsharpOptions application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const csharpOptionsRequest = z.lazy(() => {
  return z
    .object({
      packageId: z.string().optional(),
    })
    .transform((data) => ({
      packageId: data['packageId'],
    }));
});
