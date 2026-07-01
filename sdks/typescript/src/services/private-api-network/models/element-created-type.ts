import { z } from 'zod';

export const elementCreatedType = z.literal('workspace');

export type ElementCreatedType = z.infer<typeof elementCreatedType>;
