import { z } from 'zod';

export const sortCreatedUpdatedAt = z.union([z.literal('createdAt'), z.literal('updatedAt')]);

export type SortCreatedUpdatedAt = z.infer<typeof sortCreatedUpdatedAt>;
