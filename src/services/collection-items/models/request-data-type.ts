import { z } from 'zod';

export const requestDataType = z.union([z.literal('text'), z.literal('file')]);

export type RequestDataType = z.infer<typeof requestDataType>;
