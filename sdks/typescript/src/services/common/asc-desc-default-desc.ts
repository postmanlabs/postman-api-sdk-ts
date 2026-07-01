import { z } from 'zod';

export const ascDescDefaultDesc = z.union([z.literal('asc'), z.literal('desc')]);

export type AscDescDefaultDesc = z.infer<typeof ascDescDefaultDesc>;
