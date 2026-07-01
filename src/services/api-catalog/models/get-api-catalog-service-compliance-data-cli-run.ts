import { z } from 'zod';
import {
  GetApiCatalogServiceComplianceDataCliRunStatus,
  getApiCatalogServiceComplianceDataCliRunStatus,
} from './get-api-catalog-service-compliance-data-cli-run-status';

/**
 * Zod schema for the GetApiCatalogServiceComplianceDataCliRun model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogServiceComplianceDataCliRun = z.lazy(() => {
  return z.object({
    status: getApiCatalogServiceComplianceDataCliRunStatus.nullable(),
    activePipelines: z.number(),
    passingPipelines: z.number(),
    failingPipelines: z.number(),
    lastRunAt: z.string().nullable(),
  });
});

/**
 * Information about the CI/CD pipeline.
 * @typedef  {GetApiCatalogServiceComplianceDataCliRun} getApiCatalogServiceComplianceDataCliRun - Information about the CI/CD pipeline. - Information about the CI/CD pipeline.
 * @property {GetApiCatalogServiceComplianceDataCliRunStatus} - Whether the pipelines' latest runs passed or failed. If no runs exist, this returns a null value.
 * @property {number} - The number of distinct pipelines with at least one run within the time window.
 * @property {number} - The number of distinct pipelines whose latest run passed within the time window.
 * @property {number} - The number of distinct pipelines whose latest run failed within the time window.
 * @property {string} - The date and time of the most recent run across all pipelines. If no runs exist, this returns a null value.
 */
export type GetApiCatalogServiceComplianceDataCliRun = z.infer<
  typeof getApiCatalogServiceComplianceDataCliRun
>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogServiceComplianceDataCliRun application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceComplianceDataCliRunResponse = z.lazy(() => {
  return z
    .object({
      status: getApiCatalogServiceComplianceDataCliRunStatus.nullable(),
      activePipelines: z.number(),
      passingPipelines: z.number(),
      failingPipelines: z.number(),
      lastRunAt: z.string().nullable(),
    })
    .transform((data) => ({
      status: data['status'],
      activePipelines: data['activePipelines'],
      passingPipelines: data['passingPipelines'],
      failingPipelines: data['failingPipelines'],
      lastRunAt: data['lastRunAt'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogServiceComplianceDataCliRun application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceComplianceDataCliRunRequest = z.lazy(() => {
  return z
    .object({
      status: getApiCatalogServiceComplianceDataCliRunStatus.nullable(),
      activePipelines: z.number(),
      passingPipelines: z.number(),
      failingPipelines: z.number(),
      lastRunAt: z.string().nullable(),
    })
    .transform((data) => ({
      status: data['status'],
      activePipelines: data['activePipelines'],
      passingPipelines: data['passingPipelines'],
      failingPipelines: data['failingPipelines'],
      lastRunAt: data['lastRunAt'],
    }));
});
