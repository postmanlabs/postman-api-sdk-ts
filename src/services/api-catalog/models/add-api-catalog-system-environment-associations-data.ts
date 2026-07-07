import { z } from 'zod';

/**
 * Zod schema for the AddApiCatalogSystemEnvironmentAssociationsData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addApiCatalogSystemEnvironmentAssociationsData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    workspaceEnvironmentId: z.string(),
    workspaceId: z.string().optional(),
    associatedAt: z.string().optional(),
    status: z.string(),
    previousSystemEnvironmentId: z.string().optional(),
    reason: z.string().optional(),
  });
});

/**
 * Information about the associated workspace environment.
 * @typedef  {AddApiCatalogSystemEnvironmentAssociationsData} addApiCatalogSystemEnvironmentAssociationsData - Information about the associated workspace environment. - Information about the associated workspace environment.
 * @property {string} - The association's unique ID. This value doesn't return if the item was excluded.
 * @property {string} - The workspace's environment ID.
 * @property {string} - The ID of the workspace that contains the environment. This value doesn't return if the item was excluded.
 * @property {string} - The date and time at which the association was created. This value doesn't return if the item was excluded.
 * @property {AddApiCatalogSystemEnvironmentAssociationsDataStatus} - The association's status:
- `created` — An association was created.
- `existing` — The association already existed and is unchanged.
- `replaced` — The association was moved from a different system environment.
- `excluded` — The association was skipped.

 * @property {string} - The system environment ID the association was moved from. This only returns when the status is `replaced`.
 * @property {string} - The reason the association was excluded. This only returns when the status is `excluded`.
 */
export type AddApiCatalogSystemEnvironmentAssociationsData = z.infer<
  typeof addApiCatalogSystemEnvironmentAssociationsData
>;

/**
 * Zod schema for mapping API responses to the AddApiCatalogSystemEnvironmentAssociationsData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addApiCatalogSystemEnvironmentAssociationsDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      workspaceEnvironmentId: z.string(),
      workspaceId: z.string().optional(),
      associatedAt: z.string().optional(),
      status: z.string(),
      previousSystemEnvironmentId: z.string().optional(),
      reason: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      workspaceEnvironmentId: data['workspaceEnvironmentId'],
      workspaceId: data['workspaceId'],
      associatedAt: data['associatedAt'],
      status: data['status'],
      previousSystemEnvironmentId: data['previousSystemEnvironmentId'],
      reason: data['reason'],
    }));
});

/**
 * Zod schema for mapping the AddApiCatalogSystemEnvironmentAssociationsData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addApiCatalogSystemEnvironmentAssociationsDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      workspaceEnvironmentId: z.string(),
      workspaceId: z.string().optional(),
      associatedAt: z.string().optional(),
      status: z.string(),
      previousSystemEnvironmentId: z.string().optional(),
      reason: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      workspaceEnvironmentId: data['workspaceEnvironmentId'],
      workspaceId: data['workspaceId'],
      associatedAt: data['associatedAt'],
      status: data['status'],
      previousSystemEnvironmentId: data['previousSystemEnvironmentId'],
      reason: data['reason'],
    }));
});
