import { z } from 'zod';

export const format = z.union([z.literal('JSON'), z.literal('YAML')]);

export type Format = z.infer<typeof format>;
