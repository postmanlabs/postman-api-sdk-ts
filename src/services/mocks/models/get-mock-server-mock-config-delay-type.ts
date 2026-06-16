import { z } from 'zod';

export const getMockServerMockConfigDelayType = z.literal('fixed');

export type GetMockServerMockConfigDelayType = z.infer<typeof getMockServerMockConfigDelayType>;
