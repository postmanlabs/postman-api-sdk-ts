import { z } from 'zod';

export const getAsyncTaskStatusMetaModel1 = z.union([
  z.literal('collection'),
  z.literal('api-version'),
]);

export type GetAsyncTaskStatusMetaModel1 = z.infer<typeof getAsyncTaskStatusMetaModel1>;
