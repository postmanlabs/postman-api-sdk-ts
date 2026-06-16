import { z } from 'zod';

export const mergeCollectionForkStrategy = z.union([
  z.literal('deleteSource'),
  z.literal('updateSourceWithDestination'),
]);

export type MergeCollectionForkStrategy = z.infer<typeof mergeCollectionForkStrategy>;
