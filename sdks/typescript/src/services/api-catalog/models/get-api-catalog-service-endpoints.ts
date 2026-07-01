import { z } from 'zod';
import {
  GetApiCatalogServiceEndpointsMeta,
  getApiCatalogServiceEndpointsMeta,
  getApiCatalogServiceEndpointsMetaRequest,
  getApiCatalogServiceEndpointsMetaResponse,
} from './get-api-catalog-service-endpoints-meta';
import {
  GetApiCatalogServiceEndpointsData,
  getApiCatalogServiceEndpointsData,
  getApiCatalogServiceEndpointsDataRequest,
  getApiCatalogServiceEndpointsDataResponse,
} from './get-api-catalog-service-endpoints-data';

/**
 * Zod schema for the GetApiCatalogServiceEndpoints model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogServiceEndpoints = z.lazy(() => {
  return z.object({
    meta: getApiCatalogServiceEndpointsMeta,
    data: z.array(getApiCatalogServiceEndpointsData),
  });
});

/**
 *
 * @typedef  {GetApiCatalogServiceEndpoints} getApiCatalogServiceEndpoints
 * @property {GetApiCatalogServiceEndpointsMeta} - The response's meta information for paginated results.
 * @property {GetApiCatalogServiceEndpointsData[]} - A list of observed API endpoints with traffic and performance metrics.
 */
export type GetApiCatalogServiceEndpoints = z.infer<typeof getApiCatalogServiceEndpoints>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogServiceEndpoints application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceEndpointsResponse = z.lazy(() => {
  return z
    .object({
      meta: getApiCatalogServiceEndpointsMetaResponse,
      data: z.array(getApiCatalogServiceEndpointsDataResponse),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogServiceEndpoints application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceEndpointsRequest = z.lazy(() => {
  return z
    .object({
      meta: getApiCatalogServiceEndpointsMetaRequest,
      data: z.array(getApiCatalogServiceEndpointsDataRequest),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});
