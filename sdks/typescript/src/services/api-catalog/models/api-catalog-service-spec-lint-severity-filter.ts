import { z } from 'zod';

export const apiCatalogServiceSpecLintSeverityFilter = z.union([
  z.literal('info'),
  z.literal('warning'),
  z.literal('error'),
]);

export type ApiCatalogServiceSpecLintSeverityFilter = z.infer<
  typeof apiCatalogServiceSpecLintSeverityFilter
>;
