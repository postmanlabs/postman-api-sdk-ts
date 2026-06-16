import { z } from 'zod';

export const getAsyncTaskStatusStatus = z.union([
  z.literal('pending'),
  z.literal('failed'),
  z.literal('completed'),
]);

export type GetAsyncTaskStatusStatus = z.infer<typeof getAsyncTaskStatusStatus>;
