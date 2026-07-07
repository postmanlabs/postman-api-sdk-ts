import { z } from 'zod';
import {
  ApiCatalogServiceMetadataTimeRangeData,
  apiCatalogServiceMetadataTimeRangeData,
  apiCatalogServiceMetadataTimeRangeDataRequest,
  apiCatalogServiceMetadataTimeRangeDataResponse,
} from './api-catalog-service-metadata-time-range-data';

/**
 * Zod schema for the GetApiCatalogServiceMonitorRunsMeta model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogServiceMonitorRunsMeta = z.lazy(() => {
  return z.object({
    nextCursor: z.string().nullable(),
    limit: z.number(),
    filters: z.any(),
    timeRange: apiCatalogServiceMetadataTimeRangeData,
    totalRuns: z.number(),
    passedRuns: z.number(),
    failedRuns: z.number(),
    successRatePct: z.number(),
  });
});

/**
 * The response's meta information for paginated results.
 * @typedef  {GetApiCatalogServiceMonitorRunsMeta} getApiCatalogServiceMonitorRunsMeta - The response's meta information for paginated results. - The response's meta information for paginated results.
 * @property {string} - The pagination cursor that points to the next record in the results set.
 * @property {number} - The maximum number of records in the paginated response.
 * @property {any} - The filters applied to the request.
 * @property {ApiCatalogServiceMetadataTimeRangeData} - The time window for the returned data.
 * @property {number} - The total number of runs that match the given filters.
 * @property {number} - The number of successful runs.
 * @property {number} - The number of runs with at least one failure.
 * @property {number} - The percentage of runs that passed, rounded to two decimal places.
 */
export type GetApiCatalogServiceMonitorRunsMeta = z.infer<
  typeof getApiCatalogServiceMonitorRunsMeta
>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogServiceMonitorRunsMeta application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceMonitorRunsMetaResponse = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().nullable(),
      limit: z.number(),
      filters: z.any(),
      timeRange: apiCatalogServiceMetadataTimeRangeDataResponse,
      totalRuns: z.number(),
      passedRuns: z.number(),
      failedRuns: z.number(),
      successRatePct: z.number(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
      limit: data['limit'],
      filters: data['filters'],
      timeRange: data['timeRange'],
      totalRuns: data['totalRuns'],
      passedRuns: data['passedRuns'],
      failedRuns: data['failedRuns'],
      successRatePct: data['successRatePct'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogServiceMonitorRunsMeta application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceMonitorRunsMetaRequest = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().nullable(),
      limit: z.number(),
      filters: z.any(),
      timeRange: apiCatalogServiceMetadataTimeRangeDataRequest,
      totalRuns: z.number(),
      passedRuns: z.number(),
      failedRuns: z.number(),
      successRatePct: z.number(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
      limit: data['limit'],
      filters: data['filters'],
      timeRange: data['timeRange'],
      totalRuns: data['totalRuns'],
      passedRuns: data['passedRuns'],
      failedRuns: data['failedRuns'],
      successRatePct: data['successRatePct'],
    }));
});
