import { z } from 'zod';
import {
  InvitePartnerResponseResultsStatus,
  invitePartnerResponseResultsStatus,
} from './invite-partner-response-results-status';

/**
 * Zod schema for the InvitePartnerResponseResults model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const invitePartnerResponseResults = z.lazy(() => {
  return z.object({
    email: z.string().optional(),
    status: invitePartnerResponseResultsStatus.optional(),
    userId: z.string().optional(),
    message: z.string().optional(),
    invitationLink: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {InvitePartnerResponseResults} invitePartnerResponseResults   
 * @property {string} - The invited user's email address.
 * @property {InvitePartnerResponseResultsStatus} - The invitation status:
- `EMAIL_SENT` — An invitation email was sent.
- `ALREADY_INVITED` — The user already has a pending invitation.
- `PARTNER_ADDED` — The existing user was added to the workspace directly.
- `FAILED` — The invitation failed.

 * @property {string} - The user ID. This only returns for the `PARTNER_ADDED` status.
 * @property {string} - A response message.
 * @property {string} - An invitation link. This only returns for the `EMAIL_SENT` and `ALREADY_INVITED` statuses.
 */
export type InvitePartnerResponseResults = z.infer<typeof invitePartnerResponseResults>;

/**
 * Zod schema for mapping API responses to the InvitePartnerResponseResults application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const invitePartnerResponseResultsResponse = z.lazy(() => {
  return z
    .object({
      email: z.string().optional(),
      status: invitePartnerResponseResultsStatus.optional(),
      userId: z.string().optional(),
      message: z.string().optional(),
      invitationLink: z.string().optional(),
    })
    .transform((data) => ({
      email: data['email'],
      status: data['status'],
      userId: data['userId'],
      message: data['message'],
      invitationLink: data['invitationLink'],
    }));
});

/**
 * Zod schema for mapping the InvitePartnerResponseResults application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const invitePartnerResponseResultsRequest = z.lazy(() => {
  return z
    .object({
      email: z.string().optional(),
      status: invitePartnerResponseResultsStatus.optional(),
      userId: z.string().optional(),
      message: z.string().optional(),
      invitationLink: z.string().optional(),
    })
    .transform((data) => ({
      email: data['email'],
      status: data['status'],
      userId: data['userId'],
      message: data['message'],
      invitationLink: data['invitationLink'],
    }));
});
