import { z } from 'zod';

export const invitePartnerResponseResultsStatus = z.union([
  z.literal('EMAIL_SENT'),
  z.literal('ALREADY_INVITED'),
  z.literal('PARTNER_ADDED'),
  z.literal('FAILED'),
]);

export type InvitePartnerResponseResultsStatus = z.infer<typeof invitePartnerResponseResultsStatus>;
