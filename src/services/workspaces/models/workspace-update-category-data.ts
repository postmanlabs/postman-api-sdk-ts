import { z } from 'zod';

export const workspaceUpdateCategoryData = z.union([
  z.literal('improvement'),
  z.literal('new_feature'),
  z.literal('bug_fix'),
  z.literal('breaking_change'),
  z.literal('announcement'),
]);

export type WorkspaceUpdateCategoryData = z.infer<typeof workspaceUpdateCategoryData>;
