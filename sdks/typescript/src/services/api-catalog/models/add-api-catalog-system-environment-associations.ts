import { z } from 'zod';

/**
 * Zod schema for the AddApiCatalogSystemEnvironmentAssociations model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addApiCatalogSystemEnvironmentAssociations = z.lazy(() => {
  return z.object({
    workspaceEnvironmentIds: z.array(z.string()).min(1).max(25),
  });
});

/**
 *
 * @typedef  {AddApiCatalogSystemEnvironmentAssociations} addApiCatalogSystemEnvironmentAssociations
 * @property {string[]} - A list of workspace environment IDs to remove. Accepts both the environment ID or the environment's unique ID (`userId`-`environmentId`).
 */
export type AddApiCatalogSystemEnvironmentAssociations = z.infer<
  typeof addApiCatalogSystemEnvironmentAssociations
>;

/**
 * Zod schema for mapping API responses to the AddApiCatalogSystemEnvironmentAssociations application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addApiCatalogSystemEnvironmentAssociationsResponse1 = z.lazy(() => {
  return z
    .object({
      workspaceEnvironmentIds: z.array(z.string()).min(1).max(25),
    })
    .transform((data) => ({
      workspaceEnvironmentIds: data['workspaceEnvironmentIds'],
    }));
});

/**
 * Zod schema for mapping the AddApiCatalogSystemEnvironmentAssociations application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addApiCatalogSystemEnvironmentAssociationsRequest = z.lazy(() => {
  return z
    .object({
      workspaceEnvironmentIds: z.array(z.string()).min(1).max(25),
    })
    .transform((data) => ({
      workspaceEnvironmentIds: data['workspaceEnvironmentIds'],
    }));
});
