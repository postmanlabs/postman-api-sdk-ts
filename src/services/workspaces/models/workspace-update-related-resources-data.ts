import { z } from 'zod';
import { Resource, resource } from './resource';

/**
 * Zod schema for the WorkspaceUpdateRelatedResourcesData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const workspaceUpdateRelatedResourcesData = z.lazy(() => {
  return z.object({
    resource: resource,
    resourceId: z.string(),
  });
});

/**
 *
 * @typedef  {WorkspaceUpdateRelatedResourcesData} workspaceUpdateRelatedResourcesData
 * @property {Resource} - The type of linked resource.
 * @property {string} - The linked resource's ID.
 */
export type WorkspaceUpdateRelatedResourcesData = z.infer<
  typeof workspaceUpdateRelatedResourcesData
>;

/**
 * Zod schema for mapping API responses to the WorkspaceUpdateRelatedResourcesData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceUpdateRelatedResourcesDataResponse = z.lazy(() => {
  return z
    .object({
      resource: resource,
      resourceId: z.string(),
    })
    .transform((data) => ({
      resource: data['resource'],
      resourceId: data['resourceId'],
    }));
});

/**
 * Zod schema for mapping the WorkspaceUpdateRelatedResourcesData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceUpdateRelatedResourcesDataRequest = z.lazy(() => {
  return z
    .object({
      resource: resource,
      resourceId: z.string(),
    })
    .transform((data) => ({
      resource: data['resource'],
      resourceId: data['resourceId'],
    }));
});
