import { z } from 'zod';

export const elementType = z.union([z.literal('collections'), z.literal('specs')]);

export type ElementType = z.infer<typeof elementType>;
