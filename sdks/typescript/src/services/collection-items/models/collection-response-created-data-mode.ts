import { z } from 'zod';

export const collectionResponseCreatedDataMode = z.union([
  z.literal('raw'),
  z.literal('urlencoded'),
  z.literal('formdata'),
  z.literal('binary'),
  z.literal('graphql'),
]);

export type CollectionResponseCreatedDataMode = z.infer<typeof collectionResponseCreatedDataMode>;
