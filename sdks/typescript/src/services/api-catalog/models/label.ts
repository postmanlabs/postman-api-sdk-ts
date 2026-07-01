import { z } from 'zod';

export const label = z.literal('last_7_days');

export type Label = z.infer<typeof label>;
