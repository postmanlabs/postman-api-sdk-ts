import { z } from 'zod';

export const teamRole = z.union([z.literal('VIEWER'), z.literal('EDITOR')]);

export type TeamRole = z.infer<typeof teamRole>;
