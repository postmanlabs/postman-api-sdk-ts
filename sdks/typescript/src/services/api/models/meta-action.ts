import { z } from 'zod';

export const metaAction = z.union([z.literal('update'), z.literal('create')]);

export type MetaAction = z.infer<typeof metaAction>;
