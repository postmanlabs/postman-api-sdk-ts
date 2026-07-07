import { z } from 'zod';
import {
  ManageTeamMemberRolesAdd,
  manageTeamMemberRolesAdd,
  manageTeamMemberRolesAddRequest,
  manageTeamMemberRolesAddResponse,
} from './manage-team-member-roles-add';
import {
  ManageTeamMemberRolesRemove,
  manageTeamMemberRolesRemove,
  manageTeamMemberRolesRemoveRequest,
  manageTeamMemberRolesRemoveResponse,
} from './manage-team-member-roles-remove';

/**
 * Zod schema for the ManageTeamMemberRoles model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const manageTeamMemberRoles = z.lazy(() => {
  return z.object({
    add: manageTeamMemberRolesAdd.optional(),
    remove: manageTeamMemberRolesRemove.optional(),
  });
});

/**
 * Information about the bulk add and bulk remove operations.
 * @typedef  {ManageTeamMemberRoles} manageTeamMemberRoles - Information about the bulk add and bulk remove operations. - Information about the bulk add and bulk remove operations.
 * @property {ManageTeamMemberRolesAdd} - Information about the bulk `add` operation.
 * @property {ManageTeamMemberRolesRemove} - Information about the bulk `remove` operation.
 */
export type ManageTeamMemberRoles = z.infer<typeof manageTeamMemberRoles>;

/**
 * Zod schema for mapping API responses to the ManageTeamMemberRoles application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manageTeamMemberRolesResponse1 = z.lazy(() => {
  return z
    .object({
      add: manageTeamMemberRolesAddResponse.optional(),
      remove: manageTeamMemberRolesRemoveResponse.optional(),
    })
    .transform((data) => ({
      add: data['add'],
      remove: data['remove'],
    }));
});

/**
 * Zod schema for mapping the ManageTeamMemberRoles application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manageTeamMemberRolesRequest = z.lazy(() => {
  return z
    .object({
      add: manageTeamMemberRolesAddRequest.optional(),
      remove: manageTeamMemberRolesRemoveRequest.optional(),
    })
    .transform((data) => ({
      add: data['add'],
      remove: data['remove'],
    }));
});
