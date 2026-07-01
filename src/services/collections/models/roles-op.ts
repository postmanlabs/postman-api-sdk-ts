import { z } from 'zod';

export const rolesOp = z.literal('update');

export type RolesOp = z.infer<typeof rolesOp>;
