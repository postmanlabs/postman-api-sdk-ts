import { z } from 'zod';
import {
  GetApiCatalogServiceComplianceDataMonitorRunStatus,
  getApiCatalogServiceComplianceDataMonitorRunStatus,
} from './get-api-catalog-service-compliance-data-monitor-run-status';

/**
 * Zod schema for the GetApiCatalogServiceComplianceDataMonitorRun model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogServiceComplianceDataMonitorRun = z.lazy(() => {
  return z.object({
    status: getApiCatalogServiceComplianceDataMonitorRunStatus.nullable(),
    totalMonitors: z.number(),
    activeMonitors: z.number(),
    passingMonitors: z.number(),
    failingMonitors: z.number(),
    lastRunAt: z.string().nullable(),
  });
});

/**
 * The scheduled monitor run summary.
 * @typedef  {GetApiCatalogServiceComplianceDataMonitorRun} getApiCatalogServiceComplianceDataMonitorRun - The scheduled monitor run summary. - The scheduled monitor run summary.
 * @property {GetApiCatalogServiceComplianceDataMonitorRunStatus} - Whether the monitor's latest runs passed or failed. If no runs exist, this returns a null value.
 * @property {number} - The total number of monitors in the workspace. This value is the same as the as `entityCounts.monitors` value.
 * @property {number} - The number of distinct monitors with at least one run in the time window.
 * @property {number} - The number of distinct monitors whose latest run passed within the time window.
 * @property {number} - The number of distinct monitors whose latest run failed within the time window.
 * @property {string} - The date and time of the most recent run across all monitors. If no runs exist, this returns a null value.
 */
export type GetApiCatalogServiceComplianceDataMonitorRun = z.infer<
  typeof getApiCatalogServiceComplianceDataMonitorRun
>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogServiceComplianceDataMonitorRun application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceComplianceDataMonitorRunResponse = z.lazy(() => {
  return z
    .object({
      status: getApiCatalogServiceComplianceDataMonitorRunStatus.nullable(),
      totalMonitors: z.number(),
      activeMonitors: z.number(),
      passingMonitors: z.number(),
      failingMonitors: z.number(),
      lastRunAt: z.string().nullable(),
    })
    .transform((data) => ({
      status: data['status'],
      totalMonitors: data['totalMonitors'],
      activeMonitors: data['activeMonitors'],
      passingMonitors: data['passingMonitors'],
      failingMonitors: data['failingMonitors'],
      lastRunAt: data['lastRunAt'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogServiceComplianceDataMonitorRun application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceComplianceDataMonitorRunRequest = z.lazy(() => {
  return z
    .object({
      status: getApiCatalogServiceComplianceDataMonitorRunStatus.nullable(),
      totalMonitors: z.number(),
      activeMonitors: z.number(),
      passingMonitors: z.number(),
      failingMonitors: z.number(),
      lastRunAt: z.string().nullable(),
    })
    .transform((data) => ({
      status: data['status'],
      totalMonitors: data['totalMonitors'],
      activeMonitors: data['activeMonitors'],
      passingMonitors: data['passingMonitors'],
      failingMonitors: data['failingMonitors'],
      lastRunAt: data['lastRunAt'],
    }));
});
