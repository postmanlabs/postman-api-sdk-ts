import { z } from 'zod';

export const updateSecretResolutionRequestResolution = z.union([
  z.literal('FALSE_POSITIVE'),
  z.literal('REVOKED'),
  z.literal('ACCEPTED_RISK'),
]);

export type UpdateSecretResolutionRequestResolution = z.infer<
  typeof updateSecretResolutionRequestResolution
>;
