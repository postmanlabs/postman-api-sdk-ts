import { z } from 'zod';

export const mergePullCollectionChangesStrategy = z.union([
  z.literal('default'),
  z.literal('updateSourceWithDestination'),
  z.literal('deleteSource'),
]);

export type MergePullCollectionChangesStrategy = z.infer<typeof mergePullCollectionChangesStrategy>;
