import { z } from 'zod';

/**
 * Zod schema for the RemoveApiCatalogSystemEnvironmentAssociations model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const removeApiCatalogSystemEnvironmentAssociations = z.lazy(() => {
  return z.object({
    workspaceEnvironmentIds: z.array(z.string()).min(1).max(25),
  });
});

/**
 *
 * @typedef  {RemoveApiCatalogSystemEnvironmentAssociations} removeApiCatalogSystemEnvironmentAssociations
 * @property {string[]} - A list of workspace environment IDs to remove. Accepts both the environment ID or the environment's unique ID (`userId`-`environmentId`).
 */
export type RemoveApiCatalogSystemEnvironmentAssociations = z.infer<
  typeof removeApiCatalogSystemEnvironmentAssociations
>;

/**
 * Zod schema for mapping API responses to the RemoveApiCatalogSystemEnvironmentAssociations application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const removeApiCatalogSystemEnvironmentAssociationsResponse1 = z.lazy(() => {
  return z
    .object({
      workspaceEnvironmentIds: z.array(z.string()).min(1).max(25),
    })
    .transform((data) => ({
      workspaceEnvironmentIds: data['workspaceEnvironmentIds'],
    }));
});

/**
 * Zod schema for mapping the RemoveApiCatalogSystemEnvironmentAssociations application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const removeApiCatalogSystemEnvironmentAssociationsRequest = z.lazy(() => {
  return z
    .object({
      workspaceEnvironmentIds: z.array(z.string()).min(1).max(25),
    })
    .transform((data) => ({
      workspaceEnvironmentIds: data['workspaceEnvironmentIds'],
    }));
});
