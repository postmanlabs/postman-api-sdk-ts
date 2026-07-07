import { z } from 'zod';

/**
 * Zod schema for the RemoveApiCatalogSystemEnvironmentAssociationsData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const removeApiCatalogSystemEnvironmentAssociationsData = z.lazy(() => {
  return z.object({
    workspaceEnvironmentId: z.string(),
    status: z.string(),
  });
});

/**
 * Information about the associated workspace environment.
 * @typedef  {RemoveApiCatalogSystemEnvironmentAssociationsData} removeApiCatalogSystemEnvironmentAssociationsData - Information about the associated workspace environment. - Information about the associated workspace environment.
 * @property {string} - The workspace's environment ID.
 * @property {RemoveApiCatalogSystemEnvironmentAssociationsDataStatus} - The status of the operation:
- `deleted` — The association was successfully removed.
- `notFound` — The association could not be removed.

 */
export type RemoveApiCatalogSystemEnvironmentAssociationsData = z.infer<
  typeof removeApiCatalogSystemEnvironmentAssociationsData
>;

/**
 * Zod schema for mapping API responses to the RemoveApiCatalogSystemEnvironmentAssociationsData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const removeApiCatalogSystemEnvironmentAssociationsDataResponse = z.lazy(() => {
  return z
    .object({
      workspaceEnvironmentId: z.string(),
      status: z.string(),
    })
    .transform((data) => ({
      workspaceEnvironmentId: data['workspaceEnvironmentId'],
      status: data['status'],
    }));
});

/**
 * Zod schema for mapping the RemoveApiCatalogSystemEnvironmentAssociationsData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const removeApiCatalogSystemEnvironmentAssociationsDataRequest = z.lazy(() => {
  return z
    .object({
      workspaceEnvironmentId: z.string(),
      status: z.string(),
    })
    .transform((data) => ({
      workspaceEnvironmentId: data['workspaceEnvironmentId'],
      status: data['status'],
    }));
});
