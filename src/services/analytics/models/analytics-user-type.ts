import { z } from 'zod';

export const analyticsUserType = z.union([z.literal('new'), z.literal('returning')]);

export type AnalyticsUserType = z.infer<typeof analyticsUserType>;
