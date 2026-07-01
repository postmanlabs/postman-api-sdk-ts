import { z } from 'zod';

export const removePartnerFromPartnershipAction = z.literal('remove_partner');

export type RemovePartnerFromPartnershipAction = z.infer<typeof removePartnerFromPartnershipAction>;
