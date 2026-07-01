import { z } from 'zod';

export const addVariableType = z.union([z.literal('secret'), z.literal('default')]);

export type AddVariableType = z.infer<typeof addVariableType>;
