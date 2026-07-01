import { z } from 'zod';

export const collectionModelQuery = z.literal('minimal');

export type CollectionModelQuery = z.infer<typeof collectionModelQuery>;
