import { z } from 'zod';

export const ascDesc = z.union([z.literal('asc'), z.literal('desc')]);

export type AscDesc = z.infer<typeof ascDesc>;
