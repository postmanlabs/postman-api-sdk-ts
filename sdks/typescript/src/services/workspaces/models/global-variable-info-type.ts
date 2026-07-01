import { z } from 'zod';

export const globalVariableInfoType = z.union([z.literal('default'), z.literal('secret')]);

export type GlobalVariableInfoType = z.infer<typeof globalVariableInfoType>;
