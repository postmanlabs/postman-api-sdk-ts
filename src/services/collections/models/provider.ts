import { z } from 'zod';

export const provider = z.literal('postman');

export type Provider = z.infer<typeof provider>;
