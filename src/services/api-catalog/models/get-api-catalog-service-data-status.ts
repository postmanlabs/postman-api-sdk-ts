import { z } from 'zod';

export const getApiCatalogServiceDataStatus = z.union([
  z.literal('healthy'),
  z.literal('warning'),
  z.literal('critical'),
  z.literal('inactive'),
]);

export type GetApiCatalogServiceDataStatus = z.infer<typeof getApiCatalogServiceDataStatus>;
