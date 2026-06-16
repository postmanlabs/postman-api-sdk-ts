import { z } from 'zod';

export const getAsyncTaskStatusMetaModel = z.union([z.literal('collection'), z.literal('spec')]);

export type GetAsyncTaskStatusMetaModel = z.infer<typeof getAsyncTaskStatusMetaModel>;
