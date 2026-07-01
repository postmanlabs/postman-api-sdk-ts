import { z } from 'zod';

export const analyticsResource = z.union([
  z.literal('user'),
  z.literal('team'),
  z.literal('workspace'),
  z.literal('ai'),
  z.literal('api_development'),
  z.literal('api_testing'),
  z.literal('api_production'),
  z.literal('api_distribution'),
  z.literal('api_management'),
]);

export type AnalyticsResource = z.infer<typeof analyticsResource>;
