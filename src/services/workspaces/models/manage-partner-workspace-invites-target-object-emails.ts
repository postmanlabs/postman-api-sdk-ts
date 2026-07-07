import { z } from 'zod';

/**
 * Zod schema for the ManagePartnerWorkspaceInvitesTargetObjectEmails model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const managePartnerWorkspaceInvitesTargetObjectEmails = z.lazy(() => {
  return z.object({
    emails: z
      .array(z.string())
      .min(1)
      .refine((items) => new Set(items.map((item) => JSON.stringify(item))).size === items.length, {
        message: 'Array items must be unique',
      }),
  });
});

/**
 * The target on which to perform the action.
 * @typedef  {ManagePartnerWorkspaceInvitesTargetObjectEmails} managePartnerWorkspaceInvitesTargetObjectEmails - The target on which to perform the action. - The target on which to perform the action.
 * @property {string[]} - A list of the partners' email addresses.
 */
export type ManagePartnerWorkspaceInvitesTargetObjectEmails = z.infer<
  typeof managePartnerWorkspaceInvitesTargetObjectEmails
>;

/**
 * Zod schema for mapping API responses to the ManagePartnerWorkspaceInvitesTargetObjectEmails application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const managePartnerWorkspaceInvitesTargetObjectEmailsResponse = z.lazy(() => {
  return z
    .object({
      emails: z
        .array(z.string())
        .min(1)
        .refine(
          (items) => new Set(items.map((item) => JSON.stringify(item))).size === items.length,
          { message: 'Array items must be unique' },
        ),
    })
    .transform((data) => ({
      emails: data['emails'],
    }));
});

/**
 * Zod schema for mapping the ManagePartnerWorkspaceInvitesTargetObjectEmails application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const managePartnerWorkspaceInvitesTargetObjectEmailsRequest = z.lazy(() => {
  return z
    .object({
      emails: z
        .array(z.string())
        .min(1)
        .refine(
          (items) => new Set(items.map((item) => JSON.stringify(item))).size === items.length,
          { message: 'Array items must be unique' },
        ),
    })
    .transform((data) => ({
      emails: data['emails'],
    }));
});
