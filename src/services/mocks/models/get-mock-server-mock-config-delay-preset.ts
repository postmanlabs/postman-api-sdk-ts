import { z } from 'zod';

export const getMockServerMockConfigDelayPreset = z.union([z.literal('1'), z.literal('2')]);

export type GetMockServerMockConfigDelayPreset = z.infer<typeof getMockServerMockConfigDelayPreset>;
