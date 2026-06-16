import { z } from 'zod';

export const collectionPullRequestsDataStatus = z.union([
  z.literal('open'),
  z.literal('approved'),
  z.literal('declined'),
  z.literal('merged'),
]);

export type CollectionPullRequestsDataStatus = z.infer<typeof collectionPullRequestsDataStatus>;
