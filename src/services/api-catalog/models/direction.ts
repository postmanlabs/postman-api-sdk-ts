import { z } from 'zod';

export const direction = z.union([z.literal('inbound'), z.literal('outbound')]);

export type Direction = z.infer<typeof direction>;
