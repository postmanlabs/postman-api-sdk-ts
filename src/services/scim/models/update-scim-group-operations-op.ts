import { z } from 'zod';

export const updateScimGroupOperationsOp = z.union([
  z.literal('replace'),
  z.literal('remove'),
  z.literal('add'),
]);

export type UpdateScimGroupOperationsOp = z.infer<typeof updateScimGroupOperationsOp>;
