import { z } from 'zod';

export const updateActiveStateOperationsOp = z.literal('replace');

export type UpdateActiveStateOperationsOp = z.infer<typeof updateActiveStateOperationsOp>;
