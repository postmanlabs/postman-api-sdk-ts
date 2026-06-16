import { z } from 'zod';

export const rfaForAddMember = z.union([z.literal('enabled'), z.literal('disabled')]);

export type RfaForAddMember = z.infer<typeof rfaForAddMember>;
