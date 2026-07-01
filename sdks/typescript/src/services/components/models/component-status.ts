import { z } from 'zod';

export const componentStatus = z.union([z.literal('active'), z.literal('archived')]);

export type ComponentStatus = z.infer<typeof componentStatus>;
