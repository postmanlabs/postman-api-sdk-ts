import { z } from 'zod';

export const workspaceTypeQuery = z.union([
  z.literal('personal'),
  z.literal('team'),
  z.literal('private'),
  z.literal('public'),
  z.literal('partner'),
]);

export type WorkspaceTypeQuery = z.infer<typeof workspaceTypeQuery>;
