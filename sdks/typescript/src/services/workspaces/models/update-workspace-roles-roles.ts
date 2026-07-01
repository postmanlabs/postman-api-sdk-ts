import { z } from 'zod';
import {
  UpdateWorkspaceRolesRolesPath,
  updateWorkspaceRolesRolesPath,
} from './update-workspace-roles-roles-path';
import {
  UpdateWorkspaceRolesRolesValue,
  updateWorkspaceRolesRolesValue,
  updateWorkspaceRolesRolesValueRequest,
  updateWorkspaceRolesRolesValueResponse,
} from './update-workspace-roles-roles-value';

/**
 * Zod schema for the UpdateWorkspaceRolesRoles model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateWorkspaceRolesRoles = z.lazy(() => {
  return z.object({
    op: z.string(),
    path: updateWorkspaceRolesRolesPath,
    value: z.array(updateWorkspaceRolesRolesValue),
  });
});

/**
 *
 * @typedef  {UpdateWorkspaceRolesRoles} updateWorkspaceRolesRoles
 * @property {string} - The operation to perform on the path.
 * @property {UpdateWorkspaceRolesRolesPath} - The resource to perform the action on.
 * @property {UpdateWorkspaceRolesRolesValue[]} - Information about the updated workspace role.
 */
export type UpdateWorkspaceRolesRoles = z.infer<typeof updateWorkspaceRolesRoles>;

/**
 * Zod schema for mapping API responses to the UpdateWorkspaceRolesRoles application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateWorkspaceRolesRolesResponse = z.lazy(() => {
  return z
    .object({
      op: z.string(),
      path: updateWorkspaceRolesRolesPath,
      value: z.array(updateWorkspaceRolesRolesValueResponse),
    })
    .transform((data) => ({
      op: data['op'],
      path: data['path'],
      value: data['value'],
    }));
});

/**
 * Zod schema for mapping the UpdateWorkspaceRolesRoles application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateWorkspaceRolesRolesRequest = z.lazy(() => {
  return z
    .object({
      op: z.string(),
      path: updateWorkspaceRolesRolesPath,
      value: z.array(updateWorkspaceRolesRolesValueRequest),
    })
    .transform((data) => ({
      op: data['op'],
      path: data['path'],
      value: data['value'],
    }));
});
