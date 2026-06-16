import { z } from 'zod';

export const documentationLayout = z.union([
  z.literal('classic-single-column'),
  z.literal('classic-double-column'),
]);

export type DocumentationLayout = z.infer<typeof documentationLayout>;
