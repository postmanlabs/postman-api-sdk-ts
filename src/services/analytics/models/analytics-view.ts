import { z } from 'zod';

export const analyticsView = z.union([
  z.literal('detailed'),
  z.literal('summary'),
  z.literal('trend'),
]);

export type AnalyticsView = z.infer<typeof analyticsView>;
