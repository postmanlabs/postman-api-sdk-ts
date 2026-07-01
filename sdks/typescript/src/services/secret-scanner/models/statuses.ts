import { z } from 'zod';

export const statuses = z.union([
  z.literal('FALSE_POSITIVE'),
  z.literal('ACCEPTED_RISK'),
  z.literal('REVOKED'),
]);

export type Statuses = z.infer<typeof statuses>;
