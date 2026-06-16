import { z } from 'zod';

export const getSpecFileType = z.union([z.literal('ROOT'), z.literal('DEFAULT')]);

export type GetSpecFileType = z.infer<typeof getSpecFileType>;
