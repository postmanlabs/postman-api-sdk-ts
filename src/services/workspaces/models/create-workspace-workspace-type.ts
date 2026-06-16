import { z } from 'zod';

export const createWorkspaceWorkspaceType = z.union([
  z.literal('personal'),
  z.literal('private'),
  z.literal('public'),
  z.literal('team'),
  z.literal('partner'),
]);

export type CreateWorkspaceWorkspaceType = z.infer<typeof createWorkspaceWorkspaceType>;
