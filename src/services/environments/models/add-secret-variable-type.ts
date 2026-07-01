import { z } from 'zod';

export const addSecretVariableType = z.union([z.literal('secret'), z.literal('default')]);

export type AddSecretVariableType = z.infer<typeof addSecretVariableType>;
