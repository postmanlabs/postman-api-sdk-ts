import { z } from 'zod';
import {
  invitePartnerResponse,
  invitePartnerResponseRequest,
  invitePartnerResponseResponse,
} from './invite-partner-response';
import {
  removePartnerResponse,
  removePartnerResponseRequest,
  removePartnerResponseResponse,
} from './remove-partner-response';

/**
 * Zod schema for the ManagePartnerWorkspaceInvitesResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const managePartnerWorkspaceInvitesResponse = z.lazy(() => {
  return z.union([invitePartnerResponse, removePartnerResponse]);
});

/**
 *
 * @typedef  {ManagePartnerWorkspaceInvitesResponse} managePartnerWorkspaceInvitesResponse
 * @property {InvitePartnerResponse}
 * @property {RemovePartnerResponse}
 */
export type ManagePartnerWorkspaceInvitesResponse = z.infer<
  typeof managePartnerWorkspaceInvitesResponse
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const managePartnerWorkspaceInvitesResponseResponse = z.lazy(() => {
  return z.union([invitePartnerResponseResponse, removePartnerResponseResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const managePartnerWorkspaceInvitesResponseRequest = z.lazy(() => {
  return z.union([invitePartnerResponseRequest, removePartnerResponseRequest]);
});
