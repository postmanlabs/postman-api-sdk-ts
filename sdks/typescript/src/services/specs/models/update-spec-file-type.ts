import { z } from 'zod';

export const updateSpecFileType = z.union([z.literal('DEFAULT'), z.literal('ROOT')]);

export type UpdateSpecFileType = z.infer<typeof updateSpecFileType>;
