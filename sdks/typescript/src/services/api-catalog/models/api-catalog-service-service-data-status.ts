import { z } from 'zod';

export const apiCatalogServiceServiceDataStatus = z.union([
  z.literal('healthy'),
  z.literal('warning'),
  z.literal('critical'),
  z.literal('inactive'),
]);

export type ApiCatalogServiceServiceDataStatus = z.infer<typeof apiCatalogServiceServiceDataStatus>;
