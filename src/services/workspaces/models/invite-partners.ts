import { z } from 'zod';
import {
  ManagePartnerWorkspaceInvitesTargetObjectEmails,
  managePartnerWorkspaceInvitesTargetObjectEmails,
  managePartnerWorkspaceInvitesTargetObjectEmailsRequest,
  managePartnerWorkspaceInvitesTargetObjectEmailsResponse,
} from './manage-partner-workspace-invites-target-object-emails';

/**
 * Zod schema for the InvitePartners model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const invitePartners = z.lazy(() => {
  return z.object({
    action: z.string(),
    targetEntity: z.string(),
    targetEntityId: z.string().min(1).max(60),
    roleId: z.string(),
    target: managePartnerWorkspaceInvitesTargetObjectEmails,
  });
});

/**
 * Invite partners to a Partner Workspace.
 * @typedef {InvitePartners} invitePartners
 * @property {InvitePartnersAction} action - The `invite_partner` action.
 * @property {InvitePartnersTargetEntity} targetEntity - The `workspace` value.
 * @property {string} targetEntityId - The Partner Workspace's ID.
 * @property {RoleId} roleId - The role ID to assign to invited partners:
- `4` — Viewer
- `5` — Editor
- `6` — Viewer and Partner Lead
- `7` — Editor and Partner Lead

 * @property {ManagePartnerWorkspaceInvitesTargetObjectEmails} target - The target on which to perform the action.
 */
export type InvitePartners = z.infer<typeof invitePartners>;

/**
 * Zod schema for mapping API responses to the InvitePartners application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const invitePartnersResponse = z.lazy(() => {
  return z
    .object({
      action: z.string(),
      targetEntity: z.string(),
      targetEntityId: z.string().min(1).max(60),
      roleId: z.string(),
      target: managePartnerWorkspaceInvitesTargetObjectEmailsResponse,
    })
    .transform((data) => ({
      action: data['action'],
      targetEntity: data['targetEntity'],
      targetEntityId: data['targetEntityId'],
      roleId: data['roleId'],
      target: data['target'],
    }));
});

/**
 * Zod schema for mapping the InvitePartners application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const invitePartnersRequest = z.lazy(() => {
  return z
    .object({
      action: z.string(),
      targetEntity: z.string(),
      targetEntityId: z.string().min(1).max(60),
      roleId: z.string(),
      target: managePartnerWorkspaceInvitesTargetObjectEmailsRequest,
    })
    .transform((data) => ({
      action: data['action'],
      targetEntity: data['targetEntity'],
      targetEntityId: data['targetEntityId'],
      roleId: data['roleId'],
      target: data['target'],
    }));
});
