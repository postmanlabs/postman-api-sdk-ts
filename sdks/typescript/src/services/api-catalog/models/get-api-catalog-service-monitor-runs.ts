import { z } from 'zod';
import {
  GetApiCatalogServiceMonitorRunsMeta,
  getApiCatalogServiceMonitorRunsMeta,
  getApiCatalogServiceMonitorRunsMetaRequest,
  getApiCatalogServiceMonitorRunsMetaResponse,
} from './get-api-catalog-service-monitor-runs-meta';
import {
  GetApiCatalogServiceMonitorRunsData,
  getApiCatalogServiceMonitorRunsData,
  getApiCatalogServiceMonitorRunsDataRequest,
  getApiCatalogServiceMonitorRunsDataResponse,
} from './get-api-catalog-service-monitor-runs-data';

/**
 * Zod schema for the GetApiCatalogServiceMonitorRuns model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogServiceMonitorRuns = z.lazy(() => {
  return z.object({
    meta: getApiCatalogServiceMonitorRunsMeta,
    data: z.array(getApiCatalogServiceMonitorRunsData),
  });
});

/**
 *
 * @typedef  {GetApiCatalogServiceMonitorRuns} getApiCatalogServiceMonitorRuns
 * @property {GetApiCatalogServiceMonitorRunsMeta} - The response's meta information for paginated results.
 * @property {GetApiCatalogServiceMonitorRunsData[]} - A list of monitor runs.
 */
export type GetApiCatalogServiceMonitorRuns = z.infer<typeof getApiCatalogServiceMonitorRuns>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogServiceMonitorRuns application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceMonitorRunsResponse = z.lazy(() => {
  return z
    .object({
      meta: getApiCatalogServiceMonitorRunsMetaResponse,
      data: z.array(getApiCatalogServiceMonitorRunsDataResponse),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogServiceMonitorRuns application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceMonitorRunsRequest = z.lazy(() => {
  return z
    .object({
      meta: getApiCatalogServiceMonitorRunsMetaRequest,
      data: z.array(getApiCatalogServiceMonitorRunsDataRequest),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});
