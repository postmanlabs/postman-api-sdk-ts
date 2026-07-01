import { z } from 'zod';
import {
  GetApiCatalogServicesMeta,
  getApiCatalogServicesMeta,
  getApiCatalogServicesMetaRequest,
  getApiCatalogServicesMetaResponse,
} from './get-api-catalog-services-meta';
import {
  ApiCatalogServiceServiceData,
  apiCatalogServiceServiceData,
  apiCatalogServiceServiceDataRequest,
  apiCatalogServiceServiceDataResponse,
} from './api-catalog-service-service-data';

/**
 * Zod schema for the GetApiCatalogServices model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogServices = z.lazy(() => {
  return z.object({
    meta: getApiCatalogServicesMeta.optional(),
    data: z.array(apiCatalogServiceServiceData).optional(),
  });
});

/**
 *
 * @typedef  {GetApiCatalogServices} getApiCatalogServices
 * @property {GetApiCatalogServicesMeta} - The response's meta information for paginated results.
 * @property {ApiCatalogServiceServiceData[]} - A list of list of services.
 */
export type GetApiCatalogServices = z.infer<typeof getApiCatalogServices>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogServices application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServicesResponse = z.lazy(() => {
  return z
    .object({
      meta: getApiCatalogServicesMetaResponse.optional(),
      data: z.array(apiCatalogServiceServiceDataResponse).optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogServices application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServicesRequest = z.lazy(() => {
  return z
    .object({
      meta: getApiCatalogServicesMetaRequest.optional(),
      data: z.array(apiCatalogServiceServiceDataRequest).optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});
