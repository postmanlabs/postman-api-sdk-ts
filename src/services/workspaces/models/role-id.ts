import { z } from 'zod';

export const roleId = z.union([z.literal('4'), z.literal('5'), z.literal('6'), z.literal('7')]);

export type RoleId = z.infer<typeof roleId>;
