import { z } from 'zod';

export const workspaceElementTypeQuery = z.union([
  z.literal('collection'),
  z.literal('specification'),
]);

export type WorkspaceElementTypeQuery = z.infer<typeof workspaceElementTypeQuery>;
