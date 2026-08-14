import { z } from 'zod';

/**
 * Zod schema for the UpdatePackage model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updatePackage = z.lazy(() => {
  return z.object({
    description: z
      .string()
      .max(500)
      .regex(/^[ -~]*$/)
      .optional(),
    script: z.string().max(512000).optional(),
  });
});

/**
 * @typedef {UpdatePackage} updatePackage
 * @property {string} description - The package's description. This value may be empty and only supports printable ASCII characters.
 * @property {string} script - The package's index script content. This value may be empty.
 */
export type UpdatePackage = z.infer<typeof updatePackage>;

/**
 * Zod schema for mapping API responses to the UpdatePackage application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updatePackageResponse = z.lazy(() => {
  return z
    .object({
      description: z
        .string()
        .max(500)
        .regex(/^[ -~]*$/)
        .optional(),
      script: z.string().max(512000).optional(),
    })
    .transform((data) => ({
      description: data['description'],
      script: data['script'],
    }));
});

/**
 * Zod schema for mapping the UpdatePackage application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updatePackageRequest = z.lazy(() => {
  return z
    .object({
      description: z
        .string()
        .max(500)
        .regex(/^[ -~]*$/)
        .optional(),
      script: z.string().max(512000).optional(),
    })
    .transform((data) => ({
      description: data['description'],
      script: data['script'],
    }));
});
