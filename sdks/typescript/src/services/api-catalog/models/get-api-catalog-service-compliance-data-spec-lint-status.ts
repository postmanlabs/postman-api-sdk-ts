import { z } from 'zod';

export const getApiCatalogServiceComplianceDataSpecLintStatus = z.union([
  z.literal('passed'),
  z.literal('failed'),
]);

export type GetApiCatalogServiceComplianceDataSpecLintStatus = z.infer<
  typeof getApiCatalogServiceComplianceDataSpecLintStatus
>;
