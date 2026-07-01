import { z } from 'zod';

export const getCollectionUpdateStatusStatus = z.union([
  z.literal('successful'),
  z.literal('failed'),
  z.literal('in-progress'),
]);

export type GetCollectionUpdateStatusStatus = z.infer<typeof getCollectionUpdateStatusStatus>;
