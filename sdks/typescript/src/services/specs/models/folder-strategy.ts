import { z } from 'zod';

export const folderStrategy = z.union([z.literal('Paths'), z.literal('Tags')]);

export type FolderStrategy = z.infer<typeof folderStrategy>;
