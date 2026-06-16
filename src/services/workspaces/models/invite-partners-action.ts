import { z } from 'zod';

export const invitePartnersAction = z.literal('invite_partner');

export type InvitePartnersAction = z.infer<typeof invitePartnersAction>;
