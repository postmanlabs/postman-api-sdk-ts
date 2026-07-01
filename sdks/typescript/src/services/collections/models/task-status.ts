import { z } from 'zod';

export const taskStatus = z.union([
  z.literal('processing'),
  z.literal('completed'),
  z.literal('failed'),
]);

export type TaskStatus = z.infer<typeof taskStatus>;
