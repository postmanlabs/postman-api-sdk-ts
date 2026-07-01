import { z } from 'zod';

export const componentType = z.union([z.literal('OAS2'), z.literal('OAS3'), z.literal('OAS3_1')]);

export type ComponentType = z.infer<typeof componentType>;
