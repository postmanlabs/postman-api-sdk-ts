import { z } from 'zod';

/**
 * Zod schema for the PostApiCatalogDiscoveryServicesResponseMetaData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const postApiCatalogDiscoveryServicesResponseMetaData = z.lazy(() => {
  return z.object({
    total: z.number().optional(),
    created: z.number().optional(),
    updated: z.number().optional(),
  });
});

/**
 * The operation's metadata summary.
 * @typedef  {PostApiCatalogDiscoveryServicesResponseMetaData} postApiCatalogDiscoveryServicesResponseMetaData - The operation's metadata summary. - The operation's metadata summary.
 * @property {number} - The total number of services processed.
 * @property {number} - The number of new services created.
 * @property {number} - The number of existing services updated.
 */
export type PostApiCatalogDiscoveryServicesResponseMetaData = z.infer<
  typeof postApiCatalogDiscoveryServicesResponseMetaData
>;

/**
 * Zod schema for mapping API responses to the PostApiCatalogDiscoveryServicesResponseMetaData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const postApiCatalogDiscoveryServicesResponseMetaDataResponse = z.lazy(() => {
  return z
    .object({
      total: z.number().optional(),
      created: z.number().optional(),
      updated: z.number().optional(),
    })
    .transform((data) => ({
      total: data['total'],
      created: data['created'],
      updated: data['updated'],
    }));
});

/**
 * Zod schema for mapping the PostApiCatalogDiscoveryServicesResponseMetaData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const postApiCatalogDiscoveryServicesResponseMetaDataRequest = z.lazy(() => {
  return z
    .object({
      total: z.number().optional(),
      created: z.number().optional(),
      updated: z.number().optional(),
    })
    .transform((data) => ({
      total: data['total'],
      created: data['created'],
      updated: data['updated'],
    }));
});
