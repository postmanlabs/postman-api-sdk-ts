import { z } from 'zod';

export const updateRequestDataMode = z.union([
  z.literal('raw'),
  z.literal('urlencoded'),
  z.literal('formdata'),
  z.literal('binary'),
  z.literal('graphql'),
]);

export type UpdateRequestDataMode = z.infer<typeof updateRequestDataMode>;
