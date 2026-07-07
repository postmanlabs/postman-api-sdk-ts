import { z } from 'zod';
import {
  WorkspaceRolesData,
  workspaceRolesData,
  workspaceRolesDataRequest,
  workspaceRolesDataResponse,
} from './workspace-roles-data';

/**
 * Zod schema for the WorkspaceRoles model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const workspaceRoles = z.lazy(() => {
  return z.object({
    roles: z.array(workspaceRolesData).optional(),
  });
});

/**
 * Information about the workspace's roles.
 * @typedef  {WorkspaceRoles} workspaceRoles - Information about the workspace's roles. - Information about the workspace's roles.
 * @property {WorkspaceRolesData[]} - A list of workspace roles and the users, groups, and partners assigned to them.
 */
export type WorkspaceRoles = z.infer<typeof workspaceRoles>;

/**
 * Zod schema for mapping API responses to the WorkspaceRoles application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceRolesResponse = z.lazy(() => {
  return z
    .object({
      roles: z.array(workspaceRolesDataResponse).optional(),
    })
    .transform((data) => ({
      roles: data['roles'],
    }));
});

/**
 * Zod schema for mapping the WorkspaceRoles application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceRolesRequest = z.lazy(() => {
  return z
    .object({
      roles: z.array(workspaceRolesDataRequest).optional(),
    })
    .transform((data) => ({
      roles: data['roles'],
    }));
});
