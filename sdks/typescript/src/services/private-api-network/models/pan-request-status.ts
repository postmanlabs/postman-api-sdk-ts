import { z } from 'zod';

export const panRequestStatus = z.union([z.literal('pending'), z.literal('denied')]);

export type PanRequestStatus = z.infer<typeof panRequestStatus>;
