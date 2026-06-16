import { z } from 'zod';

export const workspaceVisibilities = z.union([z.literal('team'), z.literal('public')]);

export type WorkspaceVisibilities = z.infer<typeof workspaceVisibilities>;
