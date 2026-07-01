import { z } from 'zod';

export const getApiCatalogServiceComplianceDataCliRunStatus = z.union([
  z.literal('passed'),
  z.literal('failed'),
]);

export type GetApiCatalogServiceComplianceDataCliRunStatus = z.infer<
  typeof getApiCatalogServiceComplianceDataCliRunStatus
>;
