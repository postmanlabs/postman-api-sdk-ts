import { z } from 'zod';
import {
  ApiCatalogServiceMetadataTimeRangeData,
  apiCatalogServiceMetadataTimeRangeData,
  apiCatalogServiceMetadataTimeRangeDataRequest,
  apiCatalogServiceMetadataTimeRangeDataResponse,
} from './api-catalog-service-metadata-time-range-data';

/**
 * Zod schema for the GetApiCatalogServiceEndpointsMeta model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogServiceEndpointsMeta = z.lazy(() => {
  return z.object({
    nextCursor: z.string().nullable(),
    limit: z.number(),
    filters: z.any(),
    timeRange: apiCatalogServiceMetadataTimeRangeData,
    totalEndpoints: z.number(),
    totalRequests: z.number(),
  });
});

/**
 * The response's meta information for paginated results.
 * @typedef  {GetApiCatalogServiceEndpointsMeta} getApiCatalogServiceEndpointsMeta - The response's meta information for paginated results. - The response's meta information for paginated results.
 * @property {string} - The pagination cursor that points to the next record in the results set.
 * @property {number} - The maximum number of records in the paginated response.
 * @property {any} - The filters applied to the request.
 * @property {ApiCatalogServiceMetadataTimeRangeData} - The time window for the returned data.
 * @property {number} - The total number of endpoints that match the given filters.
 * @property {number} - The total number of requests that match the given filters.
 */
export type GetApiCatalogServiceEndpointsMeta = z.infer<typeof getApiCatalogServiceEndpointsMeta>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogServiceEndpointsMeta application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceEndpointsMetaResponse = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().nullable(),
      limit: z.number(),
      filters: z.any(),
      timeRange: apiCatalogServiceMetadataTimeRangeDataResponse,
      totalEndpoints: z.number(),
      totalRequests: z.number(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
      limit: data['limit'],
      filters: data['filters'],
      timeRange: data['timeRange'],
      totalEndpoints: data['totalEndpoints'],
      totalRequests: data['totalRequests'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogServiceEndpointsMeta application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceEndpointsMetaRequest = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().nullable(),
      limit: z.number(),
      filters: z.any(),
      timeRange: apiCatalogServiceMetadataTimeRangeDataRequest,
      totalEndpoints: z.number(),
      totalRequests: z.number(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
      limit: data['limit'],
      filters: data['filters'],
      timeRange: data['timeRange'],
      totalEndpoints: data['totalEndpoints'],
      totalRequests: data['totalRequests'],
    }));
});
