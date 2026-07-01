import { z } from 'zod';

export const valueRole = z.union([z.literal('VIEWER'), z.literal('EDITOR')]);

export type ValueRole = z.infer<typeof valueRole>;
