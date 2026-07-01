import { z } from 'zod';

export const userNameType = z.literal('user');

export type UserNameType = z.infer<typeof userNameType>;
