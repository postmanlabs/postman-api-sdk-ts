import { z } from 'zod';

export const workspaceIncludeQuery = z.union([z.literal('mocks:deactivated'), z.literal('scim')]);

export type WorkspaceIncludeQuery = z.infer<typeof workspaceIncludeQuery>;
