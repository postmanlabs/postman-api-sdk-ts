import { z } from 'zod';

export const specCollectionInformationState = z.union([
  z.literal('in-sync'),
  z.literal('out-of-sync'),
  z.literal('sync-in-progress'),
]);

export type SpecCollectionInformationState = z.infer<typeof specCollectionInformationState>;
