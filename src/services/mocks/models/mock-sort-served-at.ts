import { z } from 'zod';

export const mockSortServedAt = z.literal('servedAt');

export type MockSortServedAt = z.infer<typeof mockSortServedAt>;
