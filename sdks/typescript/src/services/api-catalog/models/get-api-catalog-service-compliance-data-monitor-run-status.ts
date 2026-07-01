import { z } from 'zod';

export const getApiCatalogServiceComplianceDataMonitorRunStatus = z.union([
  z.literal('passed'),
  z.literal('failed'),
]);

export type GetApiCatalogServiceComplianceDataMonitorRunStatus = z.infer<
  typeof getApiCatalogServiceComplianceDataMonitorRunStatus
>;
