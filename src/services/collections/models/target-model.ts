import { z } from 'zod';

export const targetModel = z.union([
  z.literal('collection'),
  z.literal('folder'),
  z.literal('request'),
]);

export type TargetModel = z.infer<typeof targetModel>;
