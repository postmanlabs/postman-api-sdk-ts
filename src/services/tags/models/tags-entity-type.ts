import { z } from 'zod';

export const tagsEntityType = z.union([
  z.literal('api'),
  z.literal('collection'),
  z.literal('workspace'),
]);

export type TagsEntityType = z.infer<typeof tagsEntityType>;
