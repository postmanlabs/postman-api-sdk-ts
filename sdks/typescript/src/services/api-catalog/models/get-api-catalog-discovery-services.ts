import { z } from 'zod';
import {
  GetApiCatalogDiscoveryMetaData,
  getApiCatalogDiscoveryMetaData,
  getApiCatalogDiscoveryMetaDataRequest,
  getApiCatalogDiscoveryMetaDataResponse,
} from './get-api-catalog-discovery-meta-data';
import {
  GetApiCatalogServiceData1,
  getApiCatalogServiceData1,
  getApiCatalogServiceData1Request,
  getApiCatalogServiceData1Response,
} from './get-api-catalog-service-data-1';

/**
 * Zod schema for the GetApiCatalogDiscoveryServices model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogDiscoveryServices = z.lazy(() => {
  return z.object({
    meta: getApiCatalogDiscoveryMetaData.optional(),
    data: z.array(getApiCatalogServiceData1).optional(),
  });
});

/**
 *
 * @typedef  {GetApiCatalogDiscoveryServices} getApiCatalogDiscoveryServices
 * @property {GetApiCatalogDiscoveryMetaData} - The response's meta information for paginated results.
 * @property {GetApiCatalogServiceData1[]} - A list of discovered services.
 */
export type GetApiCatalogDiscoveryServices = z.infer<typeof getApiCatalogDiscoveryServices>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogDiscoveryServices application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogDiscoveryServicesResponse = z.lazy(() => {
  return z
    .object({
      meta: getApiCatalogDiscoveryMetaDataResponse.optional(),
      data: z.array(getApiCatalogServiceData1Response).optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogDiscoveryServices application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogDiscoveryServicesRequest = z.lazy(() => {
  return z
    .object({
      meta: getApiCatalogDiscoveryMetaDataRequest.optional(),
      data: z.array(getApiCatalogServiceData1Request).optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});
