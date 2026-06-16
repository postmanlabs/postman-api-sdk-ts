import { z } from 'zod';

export const requestDeniedRequestStatus = z.union([z.literal('approved'), z.literal('denied')]);

export type RequestDeniedRequestStatus = z.infer<typeof requestDeniedRequestStatus>;
