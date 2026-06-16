import { z } from 'zod';

export const createRequestDataMode = z.union([
  z.literal('raw'),
  z.literal('urlencoded'),
  z.literal('formdata'),
  z.literal('binary'),
  z.literal('graphql'),
]);

export type CreateRequestDataMode = z.infer<typeof createRequestDataMode>;
