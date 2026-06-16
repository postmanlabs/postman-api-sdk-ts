import { z } from 'zod';

export const analyticsEntityType = z.union([
  z.literal('collection'),
  z.literal('specification'),
  z.literal('mock'),
  z.literal('flow'),
  z.literal('sdk-collection'),
  z.literal('sdk-specification'),
]);

export type AnalyticsEntityType = z.infer<typeof analyticsEntityType>;
