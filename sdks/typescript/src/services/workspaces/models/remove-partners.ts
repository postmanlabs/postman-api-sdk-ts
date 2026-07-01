import { z } from 'zod';
import {
  RemovePartnersTargetEntity,
  removePartnersTargetEntity,
} from './remove-partners-target-entity';
import { RemovePartnersAction, removePartnersAction } from './remove-partners-action';
import {
  ManagePartnerWorkspaceInvitesTargetObjectUserId,
  managePartnerWorkspaceInvitesTargetObjectUserId,
  managePartnerWorkspaceInvitesTargetObjectUserIdRequest,
  managePartnerWorkspaceInvitesTargetObjectUserIdResponse,
} from './manage-partner-workspace-invites-target-object-user-id';

/**
 * Zod schema for the RemovePartners model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const removePartners = z.lazy(() => {
  return z.object({
    targetEntity: removePartnersTargetEntity,
    targetEntityId: z.string().min(1).max(60),
    action: removePartnersAction,
    target: managePartnerWorkspaceInvitesTargetObjectUserId,
  });
});

/**
 * The request body for removing partners from a Partner Workspace.
 * @typedef  {RemovePartners} removePartners - The request body for removing partners from a Partner Workspace. - The request body for removing partners from a Partner Workspace.
 * @property {RemovePartnersTargetEntity} - The `workspace` value.
 * @property {string} - The Partner Workspace ID from which to remove partners.
 * @property {RemovePartnersAction} - The `remove_partner` action.
 * @property {ManagePartnerWorkspaceInvitesTargetObjectUserId}
 */
export type RemovePartners = z.infer<typeof removePartners>;

/**
 * Zod schema for mapping API responses to the RemovePartners application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const removePartnersResponse = z.lazy(() => {
  return z
    .object({
      targetEntity: removePartnersTargetEntity,
      targetEntityId: z.string().min(1).max(60),
      action: removePartnersAction,
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
 * Zod schema for mapping the RemovePartners application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const removePartnersRequest = z.lazy(() => {
  return z
    .object({
      targetEntity: removePartnersTargetEntity,
      targetEntityId: z.string().min(1).max(60),
      action: removePartnersAction,
      target: managePartnerWorkspaceInvitesTargetObjectUserIdRequest,
    })
    .transform((data) => ({
      targetEntity: data['targetEntity'],
      targetEntityId: data['targetEntityId'],
      action: data['action'],
      target: data['target'],
    }));
});
