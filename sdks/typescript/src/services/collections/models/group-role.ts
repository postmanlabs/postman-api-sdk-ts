import { z } from 'zod';

export const groupRole = z.union([z.literal('VIEWER'), z.literal('EDITOR')]);

export type GroupRole = z.infer<typeof groupRole>;
