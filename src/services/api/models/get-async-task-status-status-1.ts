import { z } from 'zod';

export const getAsyncTaskStatusStatus1 = z.union([
  z.literal('pending'),
  z.literal('failed'),
  z.literal('completed'),
]);

export type GetAsyncTaskStatusStatus1 = z.infer<typeof getAsyncTaskStatusStatus1>;
