import { z } from 'zod';

export const jsonStringifiedType = z.literal('string');

export type JsonStringifiedType = z.infer<typeof jsonStringifiedType>;
