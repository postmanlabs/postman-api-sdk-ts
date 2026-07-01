import { z } from 'zod';

export const postmanType = z.literal('cloud');

export type PostmanType = z.infer<typeof postmanType>;
