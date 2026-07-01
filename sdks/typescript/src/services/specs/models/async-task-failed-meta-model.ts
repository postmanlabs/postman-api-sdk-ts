import { z } from 'zod';

export const asyncTaskFailedMetaModel = z.union([z.literal('collection'), z.literal('spec')]);

export type AsyncTaskFailedMetaModel = z.infer<typeof asyncTaskFailedMetaModel>;
