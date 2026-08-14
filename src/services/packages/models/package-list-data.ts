import { z } from 'zod';

/**
 * Zod schema for the PackageListData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const packageListData = z.lazy(() => {
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
    createdAt: z.string(),
    updatedAt: z.string(),
  });
});

/**
 * @typedef {PackageListData} packageListData
 * @property {string} id - The package's unique ID.
 * @property {string} name - The package's immutable, lowercase import name.
 * @property {string} description - The package's description.
 * @property {string} createdAt - The date and time at which the package was created.
 * @property {string} updatedAt - The date and time at which the package was last updated.
 */
export type PackageListData = z.infer<typeof packageListData>;

/**
 * Zod schema for mapping API responses to the PackageListData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const packageListDataResponse = z.lazy(() => {
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
      createdAt: z.string(),
      updatedAt: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      description: data['description'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    }));
});

/**
 * Zod schema for mapping the PackageListData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const packageListDataRequest = z.lazy(() => {
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
      createdAt: z.string(),
      updatedAt: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      description: data['description'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    }));
});
