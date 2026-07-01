import { z } from 'zod';

/**
 * Zod schema for the PostPatchApiCatalogSystemEnvironmentData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const postPatchApiCatalogSystemEnvironmentData = z.lazy(() => {
  return z.object({
    id: z.string(),
    name: z.string(),
    label: z.string(),
    color: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
    description: z.string(),
    isProduction: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string(),
  });
});

/**
 * Information about the system environment.
 * @typedef  {PostPatchApiCatalogSystemEnvironmentData} postPatchApiCatalogSystemEnvironmentData - Information about the system environment. - Information about the system environment.
 * @property {string} - The system environment's ID.
 * @property {string} - The system environment's name.
 * @property {string} - A lowercase, terminal-friendly identifier for the system environment.
 * @property {string} - A six-digit hex color code.
 * @property {string} - A description of the system environment.
 * @property {boolean} - If true, the system environment is a production environment.
 * @property {string} - The date and time at which the system environment was created.
 * @property {string} - The date and time at which the system environment was last updated.
 */
export type PostPatchApiCatalogSystemEnvironmentData = z.infer<
  typeof postPatchApiCatalogSystemEnvironmentData
>;

/**
 * Zod schema for mapping API responses to the PostPatchApiCatalogSystemEnvironmentData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const postPatchApiCatalogSystemEnvironmentDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      name: z.string(),
      label: z.string(),
      color: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
      description: z.string(),
      isProduction: z.boolean(),
      createdAt: z.string(),
      updatedAt: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      label: data['label'],
      color: data['color'],
      description: data['description'],
      isProduction: data['isProduction'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    }));
});

/**
 * Zod schema for mapping the PostPatchApiCatalogSystemEnvironmentData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const postPatchApiCatalogSystemEnvironmentDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      name: z.string(),
      label: z.string(),
      color: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
      description: z.string(),
      isProduction: z.boolean(),
      createdAt: z.string(),
      updatedAt: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      label: data['label'],
      color: data['color'],
      description: data['description'],
      isProduction: data['isProduction'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    }));
});
