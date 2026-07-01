import { z } from 'zod';

/**
 * Zod schema for the GetApiCatalogDiscoveryMetaData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogDiscoveryMetaData = z.lazy(() => {
  return z.object({
    total: z.number().optional(),
    nextCursor: z.string().optional().nullable(),
  });
});

/**
 * The response's meta information for paginated results.
 * @typedef  {GetApiCatalogDiscoveryMetaData} getApiCatalogDiscoveryMetaData - The response's meta information for paginated results. - The response's meta information for paginated results.
 * @property {number} - The number of records found.
 * @property {string} - The pagination cursor that points to the next record in the results set.
 */
export type GetApiCatalogDiscoveryMetaData = z.infer<typeof getApiCatalogDiscoveryMetaData>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogDiscoveryMetaData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogDiscoveryMetaDataResponse = z.lazy(() => {
  return z
    .object({
      total: z.number().optional(),
      nextCursor: z.string().optional().nullable(),
    })
    .transform((data) => ({
      total: data['total'],
      nextCursor: data['nextCursor'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogDiscoveryMetaData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogDiscoveryMetaDataRequest = z.lazy(() => {
  return z
    .object({
      total: z.number().optional(),
      nextCursor: z.string().optional().nullable(),
    })
    .transform((data) => ({
      total: data['total'],
      nextCursor: data['nextCursor'],
    }));
});
