import { z } from 'zod';

export const metaResourceType = z.literal('User');

export type MetaResourceType = z.infer<typeof metaResourceType>;
