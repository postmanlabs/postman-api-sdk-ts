import { z } from 'zod';

export const apiCatalogServiceStatusFilter = z.union([z.literal('passed'), z.literal('failed')]);

export type ApiCatalogServiceStatusFilter = z.infer<typeof apiCatalogServiceStatusFilter>;
