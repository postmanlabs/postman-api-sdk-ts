import { z } from 'zod';

export const approveDenyAccessRequestAction = z.union([z.literal('approve'), z.literal('deny')]);

export type ApproveDenyAccessRequestAction = z.infer<typeof approveDenyAccessRequestAction>;
