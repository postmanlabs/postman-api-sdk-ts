import { z } from 'zod';

export const historyResolution = z.union([
  z.literal('FALSE_POSITIVE'),
  z.literal('ACCEPTED_RISK'),
  z.literal('REVOKED'),
  z.literal('ACTIVE'),
]);

export type HistoryResolution = z.infer<typeof historyResolution>;
