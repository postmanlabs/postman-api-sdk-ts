import { z } from 'zod';

export const successfulResponseResolution = z.union([
  z.literal('FALSE_POSITIVE'),
  z.literal('ACCEPTED_RISK'),
  z.literal('REVOKED'),
  z.literal('ACTIVE'),
]);

export type SuccessfulResponseResolution = z.infer<typeof successfulResponseResolution>;
