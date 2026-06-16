import { z } from 'zod';

export const generateSpecFromCollectionType = z.union([
  z.literal('OPENAPI:2.0'),
  z.literal('OPENAPI:3.0'),
  z.literal('OPENAPI:3.1'),
]);

export type GenerateSpecFromCollectionType = z.infer<typeof generateSpecFromCollectionType>;
