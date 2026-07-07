import { z } from 'zod';

export enum UpdateSecretResolutionRequestResolution {
  FALSE_POSITIVE = 'FALSE_POSITIVE',
  REVOKED = 'REVOKED',
  ACCEPTED_RISK = 'ACCEPTED_RISK',
}
