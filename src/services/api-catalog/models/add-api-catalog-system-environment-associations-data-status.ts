import { z } from 'zod';

export const addApiCatalogSystemEnvironmentAssociationsDataStatus = z.union([
  z.literal('created'),
  z.literal('existing'),
  z.literal('replaced'),
  z.literal('excluded'),
]);

export type AddApiCatalogSystemEnvironmentAssociationsDataStatus = z.infer<
  typeof addApiCatalogSystemEnvironmentAssociationsDataStatus
>;
