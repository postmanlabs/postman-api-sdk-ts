import { z } from 'zod';

export const collectionSpecInformationState = z.union([
  z.literal('in-sync'),
  z.literal('out-of-sync'),
  z.literal('sync-in-progress'),
]);

export type CollectionSpecInformationState = z.infer<typeof collectionSpecInformationState>;
