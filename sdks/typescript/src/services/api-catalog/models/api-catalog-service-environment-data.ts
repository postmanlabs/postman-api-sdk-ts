import { z } from 'zod';

/**
 * Zod schema for the ApiCatalogServiceEnvironmentData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const apiCatalogServiceEnvironmentData = z.lazy(() => {
  return z.object({
    id: z.string(),
    name: z.string().nullable(),
  });
});

/**
 * Information about the environment.
 * @typedef  {ApiCatalogServiceEnvironmentData} apiCatalogServiceEnvironmentData - Information about the environment. - Information about the environment.
 * @property {string} - The environment's ID.
 * @property {string} - The environment's name. If the environment was deleted, this returns a null value.
 */
export type ApiCatalogServiceEnvironmentData = z.infer<typeof apiCatalogServiceEnvironmentData>;

/**
 * Zod schema for mapping API responses to the ApiCatalogServiceEnvironmentData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCatalogServiceEnvironmentDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      name: z.string().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the ApiCatalogServiceEnvironmentData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCatalogServiceEnvironmentDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      name: z.string().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
    }));
});
