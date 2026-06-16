import { z } from 'zod';

export const mode = z.union([z.literal('copy'), z.literal('move')]);

export type Mode = z.infer<typeof mode>;
