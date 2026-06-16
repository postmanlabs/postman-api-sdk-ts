import { z } from 'zod';
import {
  WorkspaceRolesUpdatedRoles,
  workspaceRolesUpdatedRoles,
  workspaceRolesUpdatedRolesRequest,
  workspaceRolesUpdatedRolesResponse,
} from './workspace-roles-updated-roles';

/**
 * Zod schema for the WorkspaceRolesUpdated model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const workspaceRolesUpdated = z.lazy(() => {
  return z.object({
    roles: z.array(workspaceRolesUpdatedRoles).optional(),
  });
});

/**
 *
 * @typedef  {WorkspaceRolesUpdated} workspaceRolesUpdated
 * @property {WorkspaceRolesUpdatedRoles[]}
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
      roles: z.array(workspaceRolesUpdatedRolesResponse).optional(),
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
      roles: z.array(workspaceRolesUpdatedRolesRequest).optional(),
    })
    .transform((data) => ({
      roles: data['roles'],
    }));
});
