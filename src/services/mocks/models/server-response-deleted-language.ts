import { z } from 'zod';

export const serverResponseDeletedLanguage = z.union([
  z.literal('text'),
  z.literal('javascript'),
  z.literal('json'),
  z.literal('html'),
  z.literal('xml'),
]);

export type ServerResponseDeletedLanguage = z.infer<typeof serverResponseDeletedLanguage>;
