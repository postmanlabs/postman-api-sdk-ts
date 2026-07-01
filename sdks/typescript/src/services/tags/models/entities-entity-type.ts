import { z } from 'zod';

export const entitiesEntityType = z.union([z.literal('collection'), z.literal('workspace')]);

export type EntitiesEntityType = z.infer<typeof entitiesEntityType>;
