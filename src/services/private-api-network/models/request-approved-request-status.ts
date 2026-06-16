import { z } from 'zod';

export const requestApprovedRequestStatus = z.union([z.literal('approved'), z.literal('denied')]);

export type RequestApprovedRequestStatus = z.infer<typeof requestApprovedRequestStatus>;
