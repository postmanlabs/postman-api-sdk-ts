import { z } from 'zod';

export const elementType2 = z.union([
  z.literal('collection'),
  z.literal('workspace'),
  z.literal('environment'),
  z.literal('mock'),
  z.literal('monitor'),
]);

export type ElementType2 = z.infer<typeof elementType2>;
