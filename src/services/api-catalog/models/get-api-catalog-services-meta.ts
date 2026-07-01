import { z } from 'zod';
import {
  ApiCatalogServiceMetadataTimeRangeData,
  apiCatalogServiceMetadataTimeRangeData,
  apiCatalogServiceMetadataTimeRangeDataRequest,
  apiCatalogServiceMetadataTimeRangeDataResponse,
} from './api-catalog-service-metadata-time-range-data';

/**
 * Zod schema for the GetApiCatalogServicesMeta model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogServicesMeta = z.lazy(() => {
  return z.object({
    nextCursor: z.string().nullable(),
    limit: z.number(),
    filters: z.any(),
    timeRange: apiCatalogServiceMetadataTimeRangeData,
  });
});

/**
 * The response's meta information for paginated results.
 * @typedef  {GetApiCatalogServicesMeta} getApiCatalogServicesMeta - The response's meta information for paginated results. - The response's meta information for paginated results.
 * @property {string} - The pagination cursor that points to the next record in the results set.
 * @property {number} - The maximum number of records in the paginated response.
 * @property {any} - The filters applied to the request.
 * @property {ApiCatalogServiceMetadataTimeRangeData} - The time window for the returned data.
 */
export type GetApiCatalogServicesMeta = z.infer<typeof getApiCatalogServicesMeta>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogServicesMeta application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServicesMetaResponse = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().nullable(),
      limit: z.number(),
      filters: z.any(),
      timeRange: apiCatalogServiceMetadataTimeRangeDataResponse,
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
      limit: data['limit'],
      filters: data['filters'],
      timeRange: data['timeRange'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogServicesMeta application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServicesMetaRequest = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().nullable(),
      limit: z.number(),
      filters: z.any(),
      timeRange: apiCatalogServiceMetadataTimeRangeDataRequest,
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
      limit: data['limit'],
      filters: data['filters'],
      timeRange: data['timeRange'],
    }));
});
