import { z } from 'zod';

export const sourceType = z.literal('draft');

export type SourceType = z.infer<typeof sourceType>;
