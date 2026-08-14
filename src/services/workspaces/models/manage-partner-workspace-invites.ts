import { z } from 'zod';
import { invitePartners, invitePartnersRequest, invitePartnersResponse } from './invite-partners';
import { removePartners, removePartnersRequest, removePartnersResponse } from './remove-partners';
import {
  removePartnerFromPartnership,
  removePartnerFromPartnershipRequest,
  removePartnerFromPartnershipResponse,
} from './remove-partner-from-partnership';

/**
 * Zod schema for the ManagePartnerWorkspaceInvites model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const managePartnerWorkspaceInvites = z.lazy(() => {
  return z.union([invitePartners, removePartners, removePartnerFromPartnership]);
});

/**
 * @typedef {ManagePartnerWorkspaceInvites} managePartnerWorkspaceInvites
 */
export type ManagePartnerWorkspaceInvites = z.infer<typeof managePartnerWorkspaceInvites>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const managePartnerWorkspaceInvitesResponse1 = z.lazy(() => {
  return z.union([
    invitePartnersResponse,
    removePartnersResponse,
    removePartnerFromPartnershipResponse,
  ]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const managePartnerWorkspaceInvitesRequest = z.lazy(() => {
  return z.union([
    invitePartnersRequest,
    removePartnersRequest,
    removePartnerFromPartnershipRequest,
  ]);
});
