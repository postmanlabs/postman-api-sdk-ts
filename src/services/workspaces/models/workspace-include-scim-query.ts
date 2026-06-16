import { z } from 'zod';

export const workspaceIncludeScimQuery = z.literal('scim');

export type WorkspaceIncludeScimQuery = z.infer<typeof workspaceIncludeScimQuery>;
