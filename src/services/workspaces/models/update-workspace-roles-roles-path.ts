import { z } from 'zod';

export const updateWorkspaceRolesRolesPath = z.union([
  z.literal('/user'),
  z.literal('/usergroup'),
  z.literal('/partner'),
]);

export type UpdateWorkspaceRolesRolesPath = z.infer<typeof updateWorkspaceRolesRolesPath>;
