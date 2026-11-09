import { z } from 'zod';

export enum SecretResolutionStatus {
  FALSE_POSITIVE = 'FALSE_POSITIVE',
  ACCEPTED_RISK = 'ACCEPTED_RISK',
  REVOKED = 'REVOKED',
  ACTIVE = 'ACTIVE',
}
