import { z } from 'zod';

export const pullRequestUpdatedStatus = z.union([
  z.literal('open'),
  z.literal('approved'),
  z.literal('declined'),
  z.literal('merged'),
]);

export type PullRequestUpdatedStatus = z.infer<typeof pullRequestUpdatedStatus>;
