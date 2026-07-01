import { z } from 'zod';

export const getApiCatalogServiceSpecificationLintsDataStatus = z.union([
  z.literal('passed'),
  z.literal('failed'),
]);

export type GetApiCatalogServiceSpecificationLintsDataStatus = z.infer<
  typeof getApiCatalogServiceSpecificationLintsDataStatus
>;
