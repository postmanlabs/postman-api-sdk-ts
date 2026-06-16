import { z } from 'zod';

export const dataAction = z.union([z.literal('create'), z.literal('update'), z.literal('destroy')]);

export type DataAction = z.infer<typeof dataAction>;
