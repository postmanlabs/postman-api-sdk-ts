import { z } from 'zod';

export const analyticsDuration = z.union([
  z.literal('last_30_days'),
  z.literal('last_180_days'),
  z.literal('last_month'),
  z.literal('last_6_months'),
  z.literal('last_7_days'),
  z.literal('last_1_year'),
]);

export type AnalyticsDuration = z.infer<typeof analyticsDuration>;
