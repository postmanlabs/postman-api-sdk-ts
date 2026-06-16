import { z } from 'zod';

export const eventListen2 = z.union([z.literal('test'), z.literal('prerequest')]);

export type EventListen2 = z.infer<typeof eventListen2>;
