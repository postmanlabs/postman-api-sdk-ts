import { z } from 'zod';

/**
 * Zod schema for the CreatePackage model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createPackage = z.lazy(() => {
  return z.object({
    name: z
      .string()
      .min(1)
      .max(200)
      .regex(/^[a-zA-Z][a-zA-Z0-9_-]*$/),
    description: z
      .string()
      .max(500)
      .regex(/^[ -~]*$/)
      .optional(),
    script: z.string().max(512000).optional(),
  });
});

/**
 * @typedef {CreatePackage} createPackage
 * @property {string} name - The package's import name. The service stores this value in lowercase.
 * @property {string} description - The package's description. This value may be empty and only supports printable ASCII characters.
 * @property {string} script - The package's initial index script content. This value may be empty.
 */
export type CreatePackage = z.infer<typeof createPackage>;

/**
 * Zod schema for mapping API responses to the CreatePackage application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createPackageResponse1 = z.lazy(() => {
  return z
    .object({
      name: z
        .string()
        .min(1)
        .max(200)
        .regex(/^[a-zA-Z][a-zA-Z0-9_-]*$/),
      description: z
        .string()
        .max(500)
        .regex(/^[ -~]*$/)
        .optional(),
      script: z.string().max(512000).optional(),
    })
    .transform((data) => ({
      name: data['name'],
      description: data['description'],
      script: data['script'],
    }));
});

/**
 * Zod schema for mapping the CreatePackage application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createPackageRequest = z.lazy(() => {
  return z
    .object({
      name: z
        .string()
        .min(1)
        .max(200)
        .regex(/^[a-zA-Z][a-zA-Z0-9_-]*$/),
      description: z
        .string()
        .max(500)
        .regex(/^[ -~]*$/)
        .optional(),
      script: z.string().max(512000).optional(),
    })
    .transform((data) => ({
      name: data['name'],
      description: data['description'],
      script: data['script'],
    }));
});
