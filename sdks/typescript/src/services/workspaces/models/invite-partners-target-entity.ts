import { z } from 'zod';

export const invitePartnersTargetEntity = z.literal('workspace');

export type InvitePartnersTargetEntity = z.infer<typeof invitePartnersTargetEntity>;
