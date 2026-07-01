import { z } from 'zod';

export const getWorkspacesWorkspaceDataVisibility = z.union([
  z.literal('personal'),
  z.literal('team'),
  z.literal('private'),
  z.literal('public'),
  z.literal('partner'),
]);

export type GetWorkspacesWorkspaceDataVisibility = z.infer<
  typeof getWorkspacesWorkspaceDataVisibility
>;
