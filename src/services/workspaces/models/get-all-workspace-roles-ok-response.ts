import { z } from 'zod';
import {
  SuccessfulResponseRoles,
  successfulResponseRoles,
  successfulResponseRolesRequest,
  successfulResponseRolesResponse,
} from './successful-response-roles';

/**
 * Zod schema for the GetAllWorkspaceRolesOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAllWorkspaceRolesOkResponse = z.lazy(() => {
  return z.object({
    roles: successfulResponseRoles.optional(),
  });
});

/**
 * @typedef {GetAllWorkspaceRolesOkResponse} getAllWorkspaceRolesOkResponse
 * @property {SuccessfulResponseRoles} roles - Information about the workspace's roles.
 */
export type GetAllWorkspaceRolesOkResponse = z.infer<typeof getAllWorkspaceRolesOkResponse>;

/**
 * Zod schema for mapping API responses to the GetAllWorkspaceRolesOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAllWorkspaceRolesOkResponseResponse = z.lazy(() => {
  return z
    .object({
      roles: successfulResponseRolesResponse.optional(),
    })
    .transform((data) => ({
      roles: data['roles'],
    }));
});

/**
 * Zod schema for mapping the GetAllWorkspaceRolesOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAllWorkspaceRolesOkResponseRequest = z.lazy(() => {
  return z
    .object({
      roles: successfulResponseRolesRequest.optional(),
    })
    .transform((data) => ({
      roles: data['roles'],
    }));
});
