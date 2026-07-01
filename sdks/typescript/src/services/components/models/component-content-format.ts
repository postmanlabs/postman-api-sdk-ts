import { z } from 'zod';

export const componentContentFormat = z.union([z.literal('JSON'), z.literal('YAML')]);

export type ComponentContentFormat = z.infer<typeof componentContentFormat>;
