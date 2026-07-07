import { z } from 'zod';
import {
  ApiCatalogServiceCollectionData,
  apiCatalogServiceCollectionData,
  apiCatalogServiceCollectionDataRequest,
  apiCatalogServiceCollectionDataResponse,
} from './api-catalog-service-collection-data';
import {
  ApiCatalogServiceEnvironmentData,
  apiCatalogServiceEnvironmentData,
  apiCatalogServiceEnvironmentDataRequest,
  apiCatalogServiceEnvironmentDataResponse,
} from './api-catalog-service-environment-data';
import {
  GetApiCatalogServiceMonitorRunsDataSummary,
  getApiCatalogServiceMonitorRunsDataSummary,
  getApiCatalogServiceMonitorRunsDataSummaryRequest,
  getApiCatalogServiceMonitorRunsDataSummaryResponse,
} from './get-api-catalog-service-monitor-runs-data-summary';
import {
  ApiCatalogServicePerformanceData,
  apiCatalogServicePerformanceData,
  apiCatalogServicePerformanceDataRequest,
  apiCatalogServicePerformanceDataResponse,
} from './api-catalog-service-performance-data';

/**
 * Zod schema for the GetApiCatalogServiceMonitorRunsData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogServiceMonitorRunsData = z.lazy(() => {
  return z.object({
    id: z.string(),
    status: z.string(),
    timestamp: z.string(),
    collection: apiCatalogServiceCollectionData,
    environment: apiCatalogServiceEnvironmentData,
    summary: getApiCatalogServiceMonitorRunsDataSummary,
    performance: apiCatalogServicePerformanceData,
  });
});

/**
 *
 * @typedef  {GetApiCatalogServiceMonitorRunsData} getApiCatalogServiceMonitorRunsData
 * @property {string} - The monitor run's ID.
 * @property {GetApiCatalogServiceMonitorRunsDataStatus} - Whether the monitor run passed or failed.
 * @property {string} - The date and time at which the run completed.
 * @property {ApiCatalogServiceCollectionData} - Information about the collection.
 * @property {ApiCatalogServiceEnvironmentData} - Information about the environment.
 * @property {GetApiCatalogServiceMonitorRunsDataSummary} - Information about the monitor run.
 * @property {ApiCatalogServicePerformanceData} - Information about the response time range across all requests in the run.
 */
export type GetApiCatalogServiceMonitorRunsData = z.infer<
  typeof getApiCatalogServiceMonitorRunsData
>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogServiceMonitorRunsData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceMonitorRunsDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      status: z.string(),
      timestamp: z.string(),
      collection: apiCatalogServiceCollectionDataResponse,
      environment: apiCatalogServiceEnvironmentDataResponse,
      summary: getApiCatalogServiceMonitorRunsDataSummaryResponse,
      performance: apiCatalogServicePerformanceDataResponse,
    })
    .transform((data) => ({
      id: data['id'],
      status: data['status'],
      timestamp: data['timestamp'],
      collection: data['collection'],
      environment: data['environment'],
      summary: data['summary'],
      performance: data['performance'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogServiceMonitorRunsData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceMonitorRunsDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      status: z.string(),
      timestamp: z.string(),
      collection: apiCatalogServiceCollectionDataRequest,
      environment: apiCatalogServiceEnvironmentDataRequest,
      summary: getApiCatalogServiceMonitorRunsDataSummaryRequest,
      performance: apiCatalogServicePerformanceDataRequest,
    })
    .transform((data) => ({
      id: data['id'],
      status: data['status'],
      timestamp: data['timestamp'],
      collection: data['collection'],
      environment: data['environment'],
      summary: data['summary'],
      performance: data['performance'],
    }));
});
