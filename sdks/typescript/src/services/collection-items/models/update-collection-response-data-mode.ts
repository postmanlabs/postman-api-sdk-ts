import { z } from 'zod';

export const updateCollectionResponseDataMode = z.union([
  z.literal('raw'),
  z.literal('urlencoded'),
  z.literal('formdata'),
  z.literal('binary'),
  z.literal('graphql'),
]);

export type UpdateCollectionResponseDataMode = z.infer<typeof updateCollectionResponseDataMode>;
