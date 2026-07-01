import { z } from 'zod';

export const asyncTaskFailedStatus = z.literal('failed');

export type AsyncTaskFailedStatus = z.infer<typeof asyncTaskFailedStatus>;
