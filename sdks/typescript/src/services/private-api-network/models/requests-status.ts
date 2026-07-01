import { z } from 'zod';

export const requestsStatus = z.union([z.literal('pending'), z.literal('denied')]);

export type RequestsStatus = z.infer<typeof requestsStatus>;
