import { z } from 'zod';

/**
 * Zod schema for the CreatePackageResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createPackageResponse = z.lazy(() => {
  return z.object({
    id: z.string(),
    name: z
      .string()
      .min(1)
      .max(200)
      .regex(/^[a-z][a-z0-9_-]*$/),
    description: z
      .string()
      .max(500)
      .regex(/^[ -~]*$/),
    script: z.string().max(512000),
    createdBy: z.number().gte(1),
    createdAt: z.string(),
    updatedAt: z.string(),
  });
});

/**
 * Information about the package.
 * @typedef {CreatePackageResponse} createPackageResponse
 * @property {string} id - The package's ID.
 * @property {string} name - The package's immutable, lowercase import name.
 * @property {string} description - The package's description. This value may be empty and only supports printable ASCII characters.
 * @property {string} script - The package's current index script content. This value may be empty.
 * @property {number} createdBy - The user ID of the user who created the package.
 * @property {string} createdAt - The date and time at which the package was created.
 * @property {string} updatedAt - The date and time at which the package or its script was last updated.
 */
export type CreatePackageResponse = z.infer<typeof createPackageResponse>;

/**
 * Zod schema for mapping API responses to the CreatePackageResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createPackageResponseResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      name: z
        .string()
        .min(1)
        .max(200)
        .regex(/^[a-z][a-z0-9_-]*$/),
      description: z
        .string()
        .max(500)
        .regex(/^[ -~]*$/),
      script: z.string().max(512000),
      createdBy: z.number().gte(1),
      createdAt: z.string(),
      updatedAt: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      description: data['description'],
      script: data['script'],
      createdBy: data['createdBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    }));
});

/**
 * Zod schema for mapping the CreatePackageResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createPackageResponseRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      name: z
        .string()
        .min(1)
        .max(200)
        .regex(/^[a-z][a-z0-9_-]*$/),
      description: z
        .string()
        .max(500)
        .regex(/^[ -~]*$/),
      script: z.string().max(512000),
      createdBy: z.number().gte(1),
      createdAt: z.string(),
      updatedAt: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      description: data['description'],
      script: data['script'],
      createdBy: data['createdBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    }));
});
