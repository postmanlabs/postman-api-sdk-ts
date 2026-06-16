import { z } from 'zod';

export const elementTypeCollection = z.literal('collection');

export type ElementTypeCollection = z.infer<typeof elementTypeCollection>;
