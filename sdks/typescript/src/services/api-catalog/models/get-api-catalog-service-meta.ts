import { z } from 'zod';
import {
  ApiCatalogServiceMetadataTimeRangeData,
  apiCatalogServiceMetadataTimeRangeData,
  apiCatalogServiceMetadataTimeRangeDataRequest,
  apiCatalogServiceMetadataTimeRangeDataResponse,
} from './api-catalog-service-metadata-time-range-data';

/**
 * Zod schema for the GetApiCatalogServiceMeta model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogServiceMeta = z.lazy(() => {
  return z.object({
    filters: z.any().optional(),
    timeRange: apiCatalogServiceMetadataTimeRangeData,
  });
});

/**
 * The response's meta information for paginated results.
 * @typedef  {GetApiCatalogServiceMeta} getApiCatalogServiceMeta - The response's meta information for paginated results. - The response's meta information for paginated results.
 * @property {any} - The filters applied to the request.
 * @property {ApiCatalogServiceMetadataTimeRangeData} - The time window for the returned data.
 */
export type GetApiCatalogServiceMeta = z.infer<typeof getApiCatalogServiceMeta>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogServiceMeta application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceMetaResponse = z.lazy(() => {
  return z
    .object({
      filters: z.any().optional(),
      timeRange: apiCatalogServiceMetadataTimeRangeDataResponse,
    })
    .transform((data) => ({
      filters: data['filters'],
      timeRange: data['timeRange'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogServiceMeta application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceMetaRequest = z.lazy(() => {
  return z
    .object({
      filters: z.any().optional(),
      timeRange: apiCatalogServiceMetadataTimeRangeDataRequest,
    })
    .transform((data) => ({
      filters: data['filters'],
      timeRange: data['timeRange'],
    }));
});
