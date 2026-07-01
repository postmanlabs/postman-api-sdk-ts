import { z } from 'zod';

export const getAsyncTaskStatusStatus2 = z.union([
  z.literal('pending'),
  z.literal('failed'),
  z.literal('completed'),
]);

export type GetAsyncTaskStatusStatus2 = z.infer<typeof getAsyncTaskStatusStatus2>;
