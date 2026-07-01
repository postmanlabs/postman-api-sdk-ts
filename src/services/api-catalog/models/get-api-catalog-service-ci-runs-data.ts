import { z } from 'zod';
import {
  GetApiCatalogServiceCiRunsDataStatus,
  getApiCatalogServiceCiRunsDataStatus,
} from './get-api-catalog-service-ci-runs-data-status';
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
import { DataSource, dataSource, dataSourceRequest, dataSourceResponse } from './data-source';
import { Pipeline, pipeline, pipelineRequest, pipelineResponse } from './pipeline';
import { Execution, execution, executionRequest, executionResponse } from './execution';
import {
  GetApiCatalogServiceCiRunsDataSummary,
  getApiCatalogServiceCiRunsDataSummary,
  getApiCatalogServiceCiRunsDataSummaryRequest,
  getApiCatalogServiceCiRunsDataSummaryResponse,
} from './get-api-catalog-service-ci-runs-data-summary';
import {
  ApiCatalogServicePerformanceData,
  apiCatalogServicePerformanceData,
  apiCatalogServicePerformanceDataRequest,
  apiCatalogServicePerformanceDataResponse,
} from './api-catalog-service-performance-data';

/**
 * Zod schema for the GetApiCatalogServiceCiRunsData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogServiceCiRunsData = z.lazy(() => {
  return z.object({
    id: z.string(),
    status: getApiCatalogServiceCiRunsDataStatus,
    timestamp: z.string(),
    collection: apiCatalogServiceCollectionData,
    environment: apiCatalogServiceEnvironmentData,
    source: dataSource,
    pipeline: pipeline,
    execution: execution.nullable(),
    summary: getApiCatalogServiceCiRunsDataSummary,
    performance: apiCatalogServicePerformanceData,
  });
});

/**
 *
 * @typedef  {GetApiCatalogServiceCiRunsData} getApiCatalogServiceCiRunsData
 * @property {string} - The CI run's ID.
 * @property {GetApiCatalogServiceCiRunsDataStatus} - Whether the CI run passed or failed.
 * @property {string} - The date and time at which the run completed.
 * @property {ApiCatalogServiceCollectionData} - Information about the collection.
 * @property {ApiCatalogServiceEnvironmentData} - Information about the environment.
 * @property {DataSource} - Information about the Git source control for the CI run.
 * @property {Pipeline} - Information about the CI/CD pipeline.
 * @property {Execution} - Information about the environment run.
 * @property {GetApiCatalogServiceCiRunsDataSummary} - Information about the CI run.
 * @property {ApiCatalogServicePerformanceData} - Information about the response time range across all requests in the run.
 */
export type GetApiCatalogServiceCiRunsData = z.infer<typeof getApiCatalogServiceCiRunsData>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogServiceCiRunsData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceCiRunsDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      status: getApiCatalogServiceCiRunsDataStatus,
      timestamp: z.string(),
      collection: apiCatalogServiceCollectionDataResponse,
      environment: apiCatalogServiceEnvironmentDataResponse,
      source: dataSourceResponse,
      pipeline: pipelineResponse,
      execution: executionResponse.nullable(),
      summary: getApiCatalogServiceCiRunsDataSummaryResponse,
      performance: apiCatalogServicePerformanceDataResponse,
    })
    .transform((data) => ({
      id: data['id'],
      status: data['status'],
      timestamp: data['timestamp'],
      collection: data['collection'],
      environment: data['environment'],
      source: data['source'],
      pipeline: data['pipeline'],
      execution: data['execution'],
      summary: data['summary'],
      performance: data['performance'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogServiceCiRunsData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceCiRunsDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      status: getApiCatalogServiceCiRunsDataStatus,
      timestamp: z.string(),
      collection: apiCatalogServiceCollectionDataRequest,
      environment: apiCatalogServiceEnvironmentDataRequest,
      source: dataSourceRequest,
      pipeline: pipelineRequest,
      execution: executionRequest.nullable(),
      summary: getApiCatalogServiceCiRunsDataSummaryRequest,
      performance: apiCatalogServicePerformanceDataRequest,
    })
    .transform((data) => ({
      id: data['id'],
      status: data['status'],
      timestamp: data['timestamp'],
      collection: data['collection'],
      environment: data['environment'],
      source: data['source'],
      pipeline: data['pipeline'],
      execution: data['execution'],
      summary: data['summary'],
      performance: data['performance'],
    }));
});
