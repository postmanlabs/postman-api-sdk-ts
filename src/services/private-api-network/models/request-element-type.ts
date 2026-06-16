import { z } from 'zod';

export const requestElementType = z.literal('workspace');

export type RequestElementType = z.infer<typeof requestElementType>;
