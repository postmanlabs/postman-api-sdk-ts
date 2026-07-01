import { z } from 'zod';

export const removePartnerResponseResultsStatus = z.union([
  z.literal('REMOVED'),
  z.literal('FAILED'),
]);

export type RemovePartnerResponseResultsStatus = z.infer<typeof removePartnerResponseResultsStatus>;
