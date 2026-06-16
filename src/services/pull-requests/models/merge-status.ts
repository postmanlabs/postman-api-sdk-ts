import { z } from 'zod';

export const mergeStatus = z.union([
  z.literal('inactive'),
  z.literal('inprogress'),
  z.literal('failed'),
]);

export type MergeStatus = z.infer<typeof mergeStatus>;
