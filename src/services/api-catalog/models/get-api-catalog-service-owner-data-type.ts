import { z } from 'zod';

export const getApiCatalogServiceOwnerDataType = z.union([z.literal('user'), z.literal('group')]);

export type GetApiCatalogServiceOwnerDataType = z.infer<typeof getApiCatalogServiceOwnerDataType>;
