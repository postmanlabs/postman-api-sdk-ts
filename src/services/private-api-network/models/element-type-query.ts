import { z } from 'zod';

export const elementTypeQuery = z.literal('workspace');

export type ElementTypeQuery = z.infer<typeof elementTypeQuery>;
