import { z } from 'zod';
import {
  ManagePartnerWorkspaceInvitesTargetObjectUserId,
  managePartnerWorkspaceInvitesTargetObjectUserId,
  managePartnerWorkspaceInvitesTargetObjectUserIdRequest,
  managePartnerWorkspaceInvitesTargetObjectUserIdResponse,
} from './manage-partner-workspace-invites-target-object-user-id';

/**
 * Zod schema for the RemovePartnerFromPartnership model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const removePartnerFromPartnership = z.lazy(() => {
  return z.object({
    targetEntity: z.string(),
    targetEntityId: z.string().min(1).max(60),
    action: z.string(),
    target: managePartnerWorkspaceInvitesTargetObjectUserId,
  });
});

/**
 * The request body for removing partners from partnership with a team.
 * @typedef {RemovePartnerFromPartnership} removePartnerFromPartnership
 * @property {RemovePartnerFromPartnershipTargetEntity} targetEntity - The `team` value.
 * @property {string} targetEntityId - The team ID from which to remove partners.
 * @property {RemovePartnerFromPartnershipAction} action - The `remove_partner` action.
 * @property {ManagePartnerWorkspaceInvitesTargetObjectUserId} target
 */
export type RemovePartnerFromPartnership = z.infer<typeof removePartnerFromPartnership>;

/**
 * Zod schema for mapping API responses to the RemovePartnerFromPartnership application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const removePartnerFromPartnershipResponse = z.lazy(() => {
  return z
    .object({
      targetEntity: z.string(),
      targetEntityId: z.string().min(1).max(60),
      action: z.string(),
      target: managePartnerWorkspaceInvitesTargetObjectUserIdResponse,
    })
    .transform((data) => ({
      targetEntity: data['targetEntity'],
      targetEntityId: data['targetEntityId'],
      action: data['action'],
      target: data['target'],
    }));
});

/**
 * Zod schema for mapping the RemovePartnerFromPartnership application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const removePartnerFromPartnershipRequest = z.lazy(() => {
  return z
    .object({
      targetEntity: z.string(),
      targetEntityId: z.string().min(1).max(60),
      action: z.string(),
      target: managePartnerWorkspaceInvitesTargetObjectUserIdRequest,
    })
    .transform((data) => ({
      targetEntity: data['targetEntity'],
      targetEntityId: data['targetEntityId'],
      action: data['action'],
      target: data['target'],
    }));
});
