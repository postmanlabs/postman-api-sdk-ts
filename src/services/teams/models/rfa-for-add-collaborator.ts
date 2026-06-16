import { z } from 'zod';

export const rfaForAddCollaborator = z.union([z.literal('enabled'), z.literal('disabled')]);

export type RfaForAddCollaborator = z.infer<typeof rfaForAddCollaborator>;
