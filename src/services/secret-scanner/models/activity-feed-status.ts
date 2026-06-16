import { z } from 'zod';

export const activityFeedStatus = z.union([
  z.literal('FALSE_POSITIVE'),
  z.literal('ACCEPTED_RISK'),
  z.literal('REVOKED'),
  z.literal('ACTIVE'),
]);

export type ActivityFeedStatus = z.infer<typeof activityFeedStatus>;
