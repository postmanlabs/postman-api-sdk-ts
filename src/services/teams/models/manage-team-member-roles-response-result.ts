import { z } from 'zod';
import {
  ManageTeamMemberRolesResponseResultEntityId,
  manageTeamMemberRolesResponseResultEntityId,
  manageTeamMemberRolesResponseResultEntityIdRequest,
  manageTeamMemberRolesResponseResultEntityIdResponse,
} from './manage-team-member-roles-response-result-entity-id';

/**
 * Zod schema for the ManageTeamMemberRolesResponseResult model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const manageTeamMemberRolesResponseResult = z.lazy(() => {
  return z.object({
    entityType: z.string().optional(),
    entityId: manageTeamMemberRolesResponseResultEntityId.optional(),
    role: z.string().optional().nullable(),
    previousRole: z.string().optional().nullable(),
    status: z.string().optional(),
  });
});

/**
 * @typedef {ManageTeamMemberRolesResponseResult} manageTeamMemberRolesResponseResult
 * @property {string} entityType - The entity type.
 * @property {ManageTeamMemberRolesResponseResultEntityId} entityId - The entity's ID.
 * @property {string} role - The user's role.
 * @property {string} previousRole - The user's previous role. This value only returns if the user's role is modified.
 * @property {string} status - The request's status.
 */
export type ManageTeamMemberRolesResponseResult = z.infer<
  typeof manageTeamMemberRolesResponseResult
>;

/**
 * Zod schema for mapping API responses to the ManageTeamMemberRolesResponseResult application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manageTeamMemberRolesResponseResultResponse = z.lazy(() => {
  return z
    .object({
      entityType: z.string().optional(),
      entityId: manageTeamMemberRolesResponseResultEntityIdResponse.optional(),
      role: z.string().optional().nullable(),
      previousRole: z.string().optional().nullable(),
      status: z.string().optional(),
    })
    .transform((data) => ({
      entityType: data['entityType'],
      entityId: data['entityId'],
      role: data['role'],
      previousRole: data['previousRole'],
      status: data['status'],
    }));
});

/**
 * Zod schema for mapping the ManageTeamMemberRolesResponseResult application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manageTeamMemberRolesResponseResultRequest = z.lazy(() => {
  return z
    .object({
      entityType: z.string().optional(),
      entityId: manageTeamMemberRolesResponseResultEntityIdRequest.optional(),
      role: z.string().optional().nullable(),
      previousRole: z.string().optional().nullable(),
      status: z.string().optional(),
    })
    .transform((data) => ({
      entityType: data['entityType'],
      entityId: data['entityId'],
      role: data['role'],
      previousRole: data['previousRole'],
      status: data['status'],
    }));
});
