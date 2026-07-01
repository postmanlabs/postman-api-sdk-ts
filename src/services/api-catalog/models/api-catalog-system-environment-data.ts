import { z } from 'zod';

/**
 * Zod schema for the ApiCatalogSystemEnvironmentData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const apiCatalogSystemEnvironmentData = z.lazy(() => {
  return z.object({
    id: z.string(),
    name: z.string(),
    label: z.string(),
    color: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
    description: z.string(),
    isProduction: z.boolean(),
    associationCount: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
  });
});

/**
 * Information about the system environment.
 * @typedef  {ApiCatalogSystemEnvironmentData} apiCatalogSystemEnvironmentData - Information about the system environment. - Information about the system environment.
 * @property {string} - The system environment's ID.
 * @property {string} - The system environment's name.
 * @property {string} - A lowercase, terminal-friendly identifier for the system environment.
 * @property {string} - A six-digit hex color code.
 * @property {string} - A description of the system environment.
 * @property {boolean} - If true, the system environment is a production environment.
 * @property {number} - The total number of workspace environments associated with this system environment.
 * @property {string} - The date and time at which the system environment was created.
 * @property {string} - The date and time at which the system environment was last updated.
 */
export type ApiCatalogSystemEnvironmentData = z.infer<typeof apiCatalogSystemEnvironmentData>;

/**
 * Zod schema for mapping API responses to the ApiCatalogSystemEnvironmentData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCatalogSystemEnvironmentDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      name: z.string(),
      label: z.string(),
      color: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
      description: z.string(),
      isProduction: z.boolean(),
      associationCount: z.number(),
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
      associationCount: data['associationCount'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    }));
});

/**
 * Zod schema for mapping the ApiCatalogSystemEnvironmentData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCatalogSystemEnvironmentDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      name: z.string(),
      label: z.string(),
      color: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
      description: z.string(),
      isProduction: z.boolean(),
      associationCount: z.number(),
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
      associationCount: data['associationCount'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    }));
});
