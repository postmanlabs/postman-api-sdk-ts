import { z } from 'zod';

export const reviewPullRequestAction = z.union([
  z.literal('approve'),
  z.literal('decline'),
  z.literal('merge'),
  z.literal('unapprove'),
]);

export type ReviewPullRequestAction = z.infer<typeof reviewPullRequestAction>;
