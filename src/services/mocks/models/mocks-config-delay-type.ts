import { z } from 'zod';

export const mocksConfigDelayType = z.literal('fixed');

export type MocksConfigDelayType = z.infer<typeof mocksConfigDelayType>;
