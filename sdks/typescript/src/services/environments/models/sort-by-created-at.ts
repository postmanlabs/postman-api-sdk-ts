import { z } from 'zod';

export const sortByCreatedAt = z.literal('createdAt');

export type SortByCreatedAt = z.infer<typeof sortByCreatedAt>;
