import { z } from 'zod';

export const tokenType = z.literal('Bearer');

export type TokenType = z.infer<typeof tokenType>;
