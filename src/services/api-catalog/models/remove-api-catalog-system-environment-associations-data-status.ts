import { z } from 'zod';

export const removeApiCatalogSystemEnvironmentAssociationsDataStatus = z.union([
  z.literal('deleted'),
  z.literal('notFound'),
]);

export type RemoveApiCatalogSystemEnvironmentAssociationsDataStatus = z.infer<
  typeof removeApiCatalogSystemEnvironmentAssociationsDataStatus
>;
