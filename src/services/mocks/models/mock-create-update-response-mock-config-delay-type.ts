import { z } from 'zod';

export const mockCreateUpdateResponseMockConfigDelayType = z.literal('fixed');

export type MockCreateUpdateResponseMockConfigDelayType = z.infer<
  typeof mockCreateUpdateResponseMockConfigDelayType
>;
