import { z } from 'zod';

export const updateWorkspaceWorkspaceType = z.union([
  z.literal('private'),
  z.literal('personal'),
  z.literal('team'),
  z.literal('public'),
]);

export type UpdateWorkspaceWorkspaceType = z.infer<typeof updateWorkspaceWorkspaceType>;
