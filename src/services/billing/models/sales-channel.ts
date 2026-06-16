import { z } from 'zod';

export const salesChannel = z.union([z.literal('SELF_SERVE'), z.literal('SALES_SERVE')]);

export type SalesChannel = z.infer<typeof salesChannel>;
