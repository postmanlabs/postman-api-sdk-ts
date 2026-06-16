import { z } from 'zod';
import { RoleDisplayName, roleDisplayName } from './role-display-name';
import {
  InvitePartnerResponseResults,
  invitePartnerResponseResults,
  invitePartnerResponseResultsRequest,
  invitePartnerResponseResultsResponse,
} from './invite-partner-response-results';

/**
 * Zod schema for the InvitePartnerResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const invitePartnerResponse = z.lazy(() => {
  return z.object({
    targetEntity: z.string().optional(),
    targetEntityId: z.string().optional(),
    roleId: z.string().optional(),
    action: z.string().optional(),
    roleDisplayName: roleDisplayName.optional(),
    results: z.array(invitePartnerResponseResults).optional(),
  });
});

/**
 *
 * @typedef  {InvitePartnerResponse} invitePartnerResponse
 * @property {string} - The target entity.
 * @property {string} - The target entity's ID.
 * @property {string} - The role ID assigned to the users.
 * @property {string} - The action peformed.
 * @property {RoleDisplayName} - The assigned role's display name.
 * @property {InvitePartnerResponseResults[]} - A list of the action results for each email address.
 */
export type InvitePartnerResponse = z.infer<typeof invitePartnerResponse>;

/**
 * Zod schema for mapping API responses to the InvitePartnerResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const invitePartnerResponseResponse = z.lazy(() => {
  return z
    .object({
      targetEntity: z.string().optional(),
      targetEntityId: z.string().optional(),
      roleId: z.string().optional(),
      action: z.string().optional(),
      roleDisplayName: roleDisplayName.optional(),
      results: z.array(invitePartnerResponseResultsResponse).optional(),
    })
    .transform((data) => ({
      targetEntity: data['targetEntity'],
      targetEntityId: data['targetEntityId'],
      roleId: data['roleId'],
      action: data['action'],
      roleDisplayName: data['roleDisplayName'],
      results: data['results'],
    }));
});

/**
 * Zod schema for mapping the InvitePartnerResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const invitePartnerResponseRequest = z.lazy(() => {
  return z
    .object({
      targetEntity: z.string().optional(),
      targetEntityId: z.string().optional(),
      roleId: z.string().optional(),
      action: z.string().optional(),
      roleDisplayName: roleDisplayName.optional(),
      results: z.array(invitePartnerResponseResultsRequest).optional(),
    })
    .transform((data) => ({
      targetEntity: data['targetEntity'],
      targetEntityId: data['targetEntityId'],
      roleId: data['roleId'],
      action: data['action'],
      roleDisplayName: data['roleDisplayName'],
      results: data['results'],
    }));
});
