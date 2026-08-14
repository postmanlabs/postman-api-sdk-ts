import { z } from 'zod';
import {
  removeFromWorkspace,
  removeFromWorkspaceRequest,
  removeFromWorkspaceResponse,
} from './remove-from-workspace';
import {
  removeFromTeamPartnership,
  removeFromTeamPartnershipRequest,
  removeFromTeamPartnershipResponse,
} from './remove-from-team-partnership';

/**
 * Zod schema for the ManagePartnerWorkspaceInvitesTargetObjectUserId model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const managePartnerWorkspaceInvitesTargetObjectUserId = z.lazy(() => {
  return z.union([removeFromWorkspace, removeFromTeamPartnership]);
});

/**
 * @typedef {ManagePartnerWorkspaceInvitesTargetObjectUserId} managePartnerWorkspaceInvitesTargetObjectUserId
 */
export type ManagePartnerWorkspaceInvitesTargetObjectUserId = z.infer<
  typeof managePartnerWorkspaceInvitesTargetObjectUserId
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const managePartnerWorkspaceInvitesTargetObjectUserIdResponse = z.lazy(() => {
  return z.union([removeFromWorkspaceResponse, removeFromTeamPartnershipResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const managePartnerWorkspaceInvitesTargetObjectUserIdRequest = z.lazy(() => {
  return z.union([removeFromWorkspaceRequest, removeFromTeamPartnershipRequest]);
});
