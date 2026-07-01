import { z } from 'zod';

export const commentDataStatus = z.union([z.literal('Open'), z.literal('Resolved')]);

export type CommentDataStatus = z.infer<typeof commentDataStatus>;
