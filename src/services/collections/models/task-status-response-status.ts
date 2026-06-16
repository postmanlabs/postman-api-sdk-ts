import { z } from 'zod';

export const taskStatusResponseStatus = z.union([
  z.literal('successful'),
  z.literal('in-progress'),
  z.literal('failed'),
]);

export type TaskStatusResponseStatus = z.infer<typeof taskStatusResponseStatus>;
