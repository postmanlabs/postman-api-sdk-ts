import { z } from 'zod';

export const dataResolution = z.union([
  z.literal('FALSE_POSITIVE'),
  z.literal('ACCEPTED_RISK'),
  z.literal('REVOKED'),
  z.literal('ACTIVE'),
]);

export type DataResolution = z.infer<typeof dataResolution>;
