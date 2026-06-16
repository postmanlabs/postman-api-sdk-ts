import { z } from 'zod';

export const position = z.union([
  z.literal('start'),
  z.literal('end'),
  z.literal('before'),
  z.literal('after'),
]);

export type Position = z.infer<typeof position>;
