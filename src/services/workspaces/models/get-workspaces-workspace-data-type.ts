import { z } from 'zod';

export const getWorkspacesWorkspaceDataType = z.union([
  z.literal('personal'),
  z.literal('team'),
  z.literal('private'),
  z.literal('public'),
  z.literal('partner'),
]);

export type GetWorkspacesWorkspaceDataType = z.infer<typeof getWorkspacesWorkspaceDataType>;
