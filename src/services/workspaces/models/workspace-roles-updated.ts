import { z } from 'zod';
import {
  UpdateWorkspaceRolesData,
  updateWorkspaceRolesData,
  updateWorkspaceRolesDataRequest,
  updateWorkspaceRolesDataResponse,
} from './update-workspace-roles-data';

/**
 * Zod schema for the WorkspaceRolesUpdated model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const workspaceRolesUpdated = z.lazy(() => {
  return z.object({
    roles: z.array(updateWorkspaceRolesData).optional(),
  });
});

/**
 * @typedef {WorkspaceRolesUpdated} workspaceRolesUpdated
 * @property {UpdateWorkspaceRolesData[]} roles - A list of the role update operations that were applied to the workspace.
 */
export type WorkspaceRolesUpdated = z.infer<typeof workspaceRolesUpdated>;

/**
 * Zod schema for mapping API responses to the WorkspaceRolesUpdated application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceRolesUpdatedResponse = z.lazy(() => {
  return z
    .object({
      roles: z.array(updateWorkspaceRolesDataResponse).optional(),
    })
    .transform((data) => ({
      roles: data['roles'],
    }));
});

/**
 * Zod schema for mapping the WorkspaceRolesUpdated application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceRolesUpdatedRequest = z.lazy(() => {
  return z
    .object({
      roles: z.array(updateWorkspaceRolesDataRequest).optional(),
    })
    .transform((data) => ({
      roles: data['roles'],
    }));
});
