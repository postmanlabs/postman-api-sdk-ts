import { z } from 'zod';

export const resource = z.union([
  z.literal('collection'),
  z.literal('request'),
  z.literal('response'),
  z.literal('folder'),
  z.literal('extensibleCollection'),
  z.literal('extensibleCollectionItem'),
]);

export type Resource = z.infer<typeof resource>;
