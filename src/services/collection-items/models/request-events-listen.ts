import { z } from 'zod';

export const requestEventsListen = z.union([z.literal('test'), z.literal('prerequest')]);

export type RequestEventsListen = z.infer<typeof requestEventsListen>;
