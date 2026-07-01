import { z } from 'zod';

export const updateUsernameOperationsOp = z.literal('replace');

export type UpdateUsernameOperationsOp = z.infer<typeof updateUsernameOperationsOp>;
