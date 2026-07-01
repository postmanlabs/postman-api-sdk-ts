import { z } from 'zod';

export const mockCreateUpdateResponseMockConfigDelayPreset = z.union([
  z.literal('1'),
  z.literal('2'),
]);

export type MockCreateUpdateResponseMockConfigDelayPreset = z.infer<
  typeof mockCreateUpdateResponseMockConfigDelayPreset
>;
