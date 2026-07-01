import { z } from 'zod';

export const getApiCatalogServiceCiRunsDataStatus = z.union([
  z.literal('passed'),
  z.literal('failed'),
]);

export type GetApiCatalogServiceCiRunsDataStatus = z.infer<
  typeof getApiCatalogServiceCiRunsDataStatus
>;
