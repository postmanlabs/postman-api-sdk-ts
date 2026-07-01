import { z } from 'zod';

export const panRequestElementType = z.literal('workspace');

export type PanRequestElementType = z.infer<typeof panRequestElementType>;
