import { z } from 'zod';

export const getAsyncTaskStatusMetaModel2 = z.union([z.literal('collection'), z.literal('spec')]);

export type GetAsyncTaskStatusMetaModel2 = z.infer<typeof getAsyncTaskStatusMetaModel2>;
