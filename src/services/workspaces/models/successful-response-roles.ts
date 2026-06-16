import { z } from 'zod';
import {
  WorkspaceRoleData,
  workspaceRoleData,
  workspaceRoleDataRequest,
  workspaceRoleDataResponse,
} from './workspace-role-data';

/**
 * Zod schema for the SuccessfulResponseRoles model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseRoles = z.lazy(() => {
  return z.object({
    user: z.array(workspaceRoleData).optional(),
    usergroup: z.array(workspaceRoleData).optional(),
    partner: z.array(workspaceRoleData).optional(),
  });
});

/**
 * Information about the workspace's roles.
 * @typedef  {SuccessfulResponseRoles} successfulResponseRoles - Information about the workspace's roles. - Information about the workspace's roles.
 * @property {WorkspaceRoleData[]} - The list of user roles in the workspace.
 * @property {WorkspaceRoleData[]} - The list of user group roles in the workspace.
 * @property {WorkspaceRoleData[]} - The list of partner in the workspace.
 */
export type SuccessfulResponseRoles = z.infer<typeof successfulResponseRoles>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseRoles application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseRolesResponse = z.lazy(() => {
  return z
    .object({
      user: z.array(workspaceRoleDataResponse).optional(),
      usergroup: z.array(workspaceRoleDataResponse).optional(),
      partner: z.array(workspaceRoleDataResponse).optional(),
    })
    .transform((data) => ({
      user: data['user'],
      usergroup: data['usergroup'],
      partner: data['partner'],
    }));
});

/**
 * Zod schema for mapping the SuccessfulResponseRoles application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseRolesRequest = z.lazy(() => {
  return z
    .object({
      user: z.array(workspaceRoleDataRequest).optional(),
      usergroup: z.array(workspaceRoleDataRequest).optional(),
      partner: z.array(workspaceRoleDataRequest).optional(),
    })
    .transform((data) => ({
      user: data['user'],
      usergroup: data['usergroup'],
      partner: data['partner'],
    }));
});
