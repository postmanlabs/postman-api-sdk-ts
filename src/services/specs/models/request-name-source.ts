import { z } from 'zod';

export const requestNameSource = z.union([z.literal('Fallback'), z.literal('URL')]);

export type RequestNameSource = z.infer<typeof requestNameSource>;
