import { z } from 'zod';

export const removePartnersAction = z.literal('remove_partner');

export type RemovePartnersAction = z.infer<typeof removePartnersAction>;
