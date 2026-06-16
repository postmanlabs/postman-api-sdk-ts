import { z } from 'zod';

export const op = z.literal('update');

export type Op = z.infer<typeof op>;
