import { z } from 'zod';

/**
 * Zod schema for the GetApiCatalogServiceMonitorRunsDataSummary model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogServiceMonitorRunsDataSummary = z.lazy(() => {
  return z.object({
    totalRequests: z.number(),
    failedRequests: z.number(),
    totalAssertions: z.number(),
    failedAssertions: z.number(),
    durationMs: z.number(),
  });
});

/**
 * Information about the monitor run.
 * @typedef  {GetApiCatalogServiceMonitorRunsDataSummary} getApiCatalogServiceMonitorRunsDataSummary - Information about the monitor run. - Information about the monitor run.
 * @property {number} - The total number of HTTP requests executed in the run.
 * @property {number} - The number of requests that failed.
 * @property {number} - The total number of test assertions evaluated.
 * @property {number} - The number of failed assertions.
 * @property {number} - The total execution duration, in milliseconds.
 */
export type GetApiCatalogServiceMonitorRunsDataSummary = z.infer<
  typeof getApiCatalogServiceMonitorRunsDataSummary
>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogServiceMonitorRunsDataSummary application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceMonitorRunsDataSummaryResponse = z.lazy(() => {
  return z
    .object({
      totalRequests: z.number(),
      failedRequests: z.number(),
      totalAssertions: z.number(),
      failedAssertions: z.number(),
      durationMs: z.number(),
    })
    .transform((data) => ({
      totalRequests: data['totalRequests'],
      failedRequests: data['failedRequests'],
      totalAssertions: data['totalAssertions'],
      failedAssertions: data['failedAssertions'],
      durationMs: data['durationMs'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogServiceMonitorRunsDataSummary application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceMonitorRunsDataSummaryRequest = z.lazy(() => {
  return z
    .object({
      totalRequests: z.number(),
      failedRequests: z.number(),
      totalAssertions: z.number(),
      failedAssertions: z.number(),
      durationMs: z.number(),
    })
    .transform((data) => ({
      totalRequests: data['totalRequests'],
      failedRequests: data['failedRequests'],
      totalAssertions: data['totalAssertions'],
      failedAssertions: data['failedAssertions'],
      durationMs: data['durationMs'],
    }));
});
