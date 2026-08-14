import { z } from 'zod';
import {
  InvalidEntriesForManageTeamMemberRolesResultEntityId,
  invalidEntriesForManageTeamMemberRolesResultEntityId,
  invalidEntriesForManageTeamMemberRolesResultEntityIdRequest,
  invalidEntriesForManageTeamMemberRolesResultEntityIdResponse,
} from './invalid-entries-for-manage-team-member-roles-result-entity-id';

/**
 * Zod schema for the InvalidEntriesForManageTeamMemberRolesResult model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const invalidEntriesForManageTeamMemberRolesResult = z.lazy(() => {
  return z.object({
    entityType: z.string().optional(),
    entityId: invalidEntriesForManageTeamMemberRolesResultEntityId.optional(),
    role: z.string().optional().nullable(),
    status: z.string().optional(),
    reason: z.string().optional(),
  });
});

/**
 * @typedef {InvalidEntriesForManageTeamMemberRolesResult} invalidEntriesForManageTeamMemberRolesResult
 * @property {string} entityType - The entity type.
 * @property {InvalidEntriesForManageTeamMemberRolesResultEntityId} entityId - The entity ID.
 * @property {string} role - The assigned role.
 * @property {string} status - The `Invalid` response status.
 * @property {string} reason - The reason for the error.
 */
export type InvalidEntriesForManageTeamMemberRolesResult = z.infer<
  typeof invalidEntriesForManageTeamMemberRolesResult
>;

/**
 * Zod schema for mapping API responses to the InvalidEntriesForManageTeamMemberRolesResult application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const invalidEntriesForManageTeamMemberRolesResultResponse = z.lazy(() => {
  return z
    .object({
      entityType: z.string().optional(),
      entityId: invalidEntriesForManageTeamMemberRolesResultEntityIdResponse.optional(),
      role: z.string().optional().nullable(),
      status: z.string().optional(),
      reason: z.string().optional(),
    })
    .transform((data) => ({
      entityType: data['entityType'],
      entityId: data['entityId'],
      role: data['role'],
      status: data['status'],
      reason: data['reason'],
    }));
});

/**
 * Zod schema for mapping the InvalidEntriesForManageTeamMemberRolesResult application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const invalidEntriesForManageTeamMemberRolesResultRequest = z.lazy(() => {
  return z
    .object({
      entityType: z.string().optional(),
      entityId: invalidEntriesForManageTeamMemberRolesResultEntityIdRequest.optional(),
      role: z.string().optional().nullable(),
      status: z.string().optional(),
      reason: z.string().optional(),
    })
    .transform((data) => ({
      entityType: data['entityType'],
      entityId: data['entityId'],
      role: data['role'],
      status: data['status'],
      reason: data['reason'],
    }));
});
