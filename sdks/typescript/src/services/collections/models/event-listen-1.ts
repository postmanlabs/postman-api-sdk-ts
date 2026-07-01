import { z } from 'zod';

export const eventListen1 = z.union([z.literal('test'), z.literal('prerequest')]);

export type EventListen1 = z.infer<typeof eventListen1>;
