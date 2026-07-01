import { z } from 'zod';

export const getApiCatalogServiceMonitorRunsDataStatus = z.union([
  z.literal('passed'),
  z.literal('failed'),
]);

export type GetApiCatalogServiceMonitorRunsDataStatus = z.infer<
  typeof getApiCatalogServiceMonitorRunsDataStatus
>;
