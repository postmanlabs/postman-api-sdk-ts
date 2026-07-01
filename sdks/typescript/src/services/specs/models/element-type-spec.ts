import { z } from 'zod';

export const elementTypeSpec = z.literal('spec');

export type ElementTypeSpec = z.infer<typeof elementTypeSpec>;
