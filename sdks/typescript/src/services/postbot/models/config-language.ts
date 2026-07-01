import { z } from 'zod';

export const configLanguage = z.union([
  z.literal('javascript'),
  z.literal('typescript'),
  z.literal('python'),
]);

export type ConfigLanguage = z.infer<typeof configLanguage>;
