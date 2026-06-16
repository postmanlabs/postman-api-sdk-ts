import { z } from 'zod';

export const fileType = z.union([z.literal('ROOT'), z.literal('DEFAULT')]);

export type FileType = z.infer<typeof fileType>;
