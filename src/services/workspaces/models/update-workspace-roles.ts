import { z } from 'zod';
import {
  UpdateWorkspaceRolesRoles,
  updateWorkspaceRolesRoles,
  updateWorkspaceRolesRolesRequest,
  updateWorkspaceRolesRolesResponse,
} from './update-workspace-roles-roles';

/**
 * Zod schema for the UpdateWorkspaceRoles model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateWorkspaceRoles = z.lazy(() => {
  return z.object({
    roles: z.array(updateWorkspaceRolesRoles).optional(),
  });
});

/**
 *
 * @typedef  {UpdateWorkspaceRoles} updateWorkspaceRoles
 * @property {UpdateWorkspaceRolesRoles[]}
 */
export type UpdateWorkspaceRoles = z.infer<typeof updateWorkspaceRoles>;

/**
 * Zod schema for mapping API responses to the UpdateWorkspaceRoles application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateWorkspaceRolesResponse = z.lazy(() => {
  return z
    .object({
      roles: z.array(updateWorkspaceRolesRolesResponse).optional(),
    })
    .transform((data) => ({
      roles: data['roles'],
    }));
});

/**
 * Zod schema for mapping the UpdateWorkspaceRoles application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateWorkspaceRolesRequest = z.lazy(() => {
  return z
    .object({
      roles: z.array(updateWorkspaceRolesRolesRequest).optional(),
    })
    .transform((data) => ({
      roles: data['roles'],
    }));
});
