import { z } from 'zod';

export const mocksConfigDelayPreset = z.union([z.literal('1'), z.literal('2')]);

export type MocksConfigDelayPreset = z.infer<typeof mocksConfigDelayPreset>;
