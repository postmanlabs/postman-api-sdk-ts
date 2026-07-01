import { z } from 'zod';

/**
 * Zod schema for the GetApiCatalogSystemEnvironmentAssociationsData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogSystemEnvironmentAssociationsData = z.lazy(() => {
  return z.object({
    id: z.string(),
    workspaceEnvironmentId: z.string(),
    workspaceId: z.string(),
    associatedAt: z.string(),
  });
});

/**
 * Information about the workspace-environment association.
 * @typedef  {GetApiCatalogSystemEnvironmentAssociationsData} getApiCatalogSystemEnvironmentAssociationsData - Information about the workspace-environment association. - Information about the workspace-environment association.
 * @property {string} - The association's ID.
 * @property {string} - The workspace environment's ID.
 * @property {string} - The ID of the workspace that contains the environment.
 * @property {string} - The date and time at which the association was created.
 */
export type GetApiCatalogSystemEnvironmentAssociationsData = z.infer<
  typeof getApiCatalogSystemEnvironmentAssociationsData
>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogSystemEnvironmentAssociationsData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogSystemEnvironmentAssociationsDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      workspaceEnvironmentId: z.string(),
      workspaceId: z.string(),
      associatedAt: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      workspaceEnvironmentId: data['workspaceEnvironmentId'],
      workspaceId: data['workspaceId'],
      associatedAt: data['associatedAt'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogSystemEnvironmentAssociationsData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogSystemEnvironmentAssociationsDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      workspaceEnvironmentId: z.string(),
      workspaceId: z.string(),
      associatedAt: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      workspaceEnvironmentId: data['workspaceEnvironmentId'],
      workspaceId: data['workspaceId'],
      associatedAt: data['associatedAt'],
    }));
});
