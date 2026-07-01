import { z } from 'zod';

export const multiFileSpecType = z.union([z.literal('DEFAULT'), z.literal('ROOT')]);

export type MultiFileSpecType = z.infer<typeof multiFileSpecType>;
