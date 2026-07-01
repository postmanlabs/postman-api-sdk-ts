import { z } from 'zod';
import {
  GetApiCatalogServiceComplianceDataMonitorRun,
  getApiCatalogServiceComplianceDataMonitorRun,
  getApiCatalogServiceComplianceDataMonitorRunRequest,
  getApiCatalogServiceComplianceDataMonitorRunResponse,
} from './get-api-catalog-service-compliance-data-monitor-run';
import {
  GetApiCatalogServiceComplianceDataCliRun,
  getApiCatalogServiceComplianceDataCliRun,
  getApiCatalogServiceComplianceDataCliRunRequest,
  getApiCatalogServiceComplianceDataCliRunResponse,
} from './get-api-catalog-service-compliance-data-cli-run';
import {
  GetApiCatalogServiceComplianceDataSpecLint,
  getApiCatalogServiceComplianceDataSpecLint,
  getApiCatalogServiceComplianceDataSpecLintRequest,
  getApiCatalogServiceComplianceDataSpecLintResponse,
} from './get-api-catalog-service-compliance-data-spec-lint';
import {
  CollectionRuns,
  collectionRuns,
  collectionRunsRequest,
  collectionRunsResponse,
} from './collection-runs';

/**
 * Zod schema for the GetApiCatalogServiceComplianceData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogServiceComplianceData = z.lazy(() => {
  return z.object({
    monitorRun: getApiCatalogServiceComplianceDataMonitorRun,
    cliRun: getApiCatalogServiceComplianceDataCliRun,
    specLint: getApiCatalogServiceComplianceDataSpecLint,
    collectionRuns: collectionRuns,
  });
});

/**
 * Information about compliance and governance.
 * @typedef  {GetApiCatalogServiceComplianceData} getApiCatalogServiceComplianceData - Information about compliance and governance. - Information about compliance and governance.
 * @property {GetApiCatalogServiceComplianceDataMonitorRun} - The scheduled monitor run summary.
 * @property {GetApiCatalogServiceComplianceDataCliRun} - Information about the CI/CD pipeline.
 * @property {GetApiCatalogServiceComplianceDataSpecLint} - Information about the API specification lint.
 * @property {CollectionRuns} - Information about collection runs, including monitor runs, CI pipeline runs, and manual runs.
 */
export type GetApiCatalogServiceComplianceData = z.infer<typeof getApiCatalogServiceComplianceData>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogServiceComplianceData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceComplianceDataResponse = z.lazy(() => {
  return z
    .object({
      monitorRun: getApiCatalogServiceComplianceDataMonitorRunResponse,
      cliRun: getApiCatalogServiceComplianceDataCliRunResponse,
      specLint: getApiCatalogServiceComplianceDataSpecLintResponse,
      collectionRuns: collectionRunsResponse,
    })
    .transform((data) => ({
      monitorRun: data['monitorRun'],
      cliRun: data['cliRun'],
      specLint: data['specLint'],
      collectionRuns: data['collectionRuns'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogServiceComplianceData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceComplianceDataRequest = z.lazy(() => {
  return z
    .object({
      monitorRun: getApiCatalogServiceComplianceDataMonitorRunRequest,
      cliRun: getApiCatalogServiceComplianceDataCliRunRequest,
      specLint: getApiCatalogServiceComplianceDataSpecLintRequest,
      collectionRuns: collectionRunsRequest,
    })
    .transform((data) => ({
      monitorRun: data['monitorRun'],
      cliRun: data['cliRun'],
      specLint: data['specLint'],
      collectionRuns: data['collectionRuns'],
    }));
});
