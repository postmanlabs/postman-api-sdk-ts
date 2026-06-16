import { z } from 'zod';

export const specFileInformationType = z.union([z.literal('ROOT'), z.literal('DEFAULT')]);

export type SpecFileInformationType = z.infer<typeof specFileInformationType>;
