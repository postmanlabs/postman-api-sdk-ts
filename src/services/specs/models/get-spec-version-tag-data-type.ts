import { z } from 'zod';

export const getSpecVersionTagDataType = z.union([z.literal('FILE'), z.literal('FOLDER')]);

export type GetSpecVersionTagDataType = z.infer<typeof getSpecVersionTagDataType>;
