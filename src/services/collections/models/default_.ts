import { z } from 'zod';

export const default_ = z.union([z.literal('light'), z.literal('dark')]);

export type Default_ = z.infer<typeof default_>;
