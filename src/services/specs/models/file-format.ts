import { z } from 'zod';

export const fileFormat = z.union([
  z.literal('json'),
  z.literal('yaml'),
  z.literal('proto'),
  z.literal('graphql'),
  z.literal('smithy'),
]);

export type FileFormat = z.infer<typeof fileFormat>;
