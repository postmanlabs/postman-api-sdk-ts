import { z } from 'zod';

export const collectionTransformFormat = z.union([z.literal('json'), z.literal('yaml')]);

export type CollectionTransformFormat = z.infer<typeof collectionTransformFormat>;
