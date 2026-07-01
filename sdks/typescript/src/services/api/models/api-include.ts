import { z } from 'zod';

export const apiInclude = z.union([
  z.literal('collections'),
  z.literal('versions'),
  z.literal('schemas'),
  z.literal('gitInfo'),
]);

export type ApiInclude = z.infer<typeof apiInclude>;
