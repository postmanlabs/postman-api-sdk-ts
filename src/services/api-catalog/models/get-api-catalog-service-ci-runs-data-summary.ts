import { z } from 'zod';

/**
 * Zod schema for the GetApiCatalogServiceCiRunsDataSummary model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogServiceCiRunsDataSummary = z.lazy(() => {
  return z.object({
    totalRequests: z.number(),
    failedRequests: z.number(),
    totalAssertions: z.number(),
    failedAssertions: z.number(),
    durationMs: z.number(),
  });
});

/**
 * Information about the CI run.
 * @typedef  {GetApiCatalogServiceCiRunsDataSummary} getApiCatalogServiceCiRunsDataSummary - Information about the CI run. - Information about the CI run.
 * @property {number} - The total number of HTTP requests executed in the run.
 * @property {number} - The number of requests that failed.
 * @property {number} - The total number of test assertions evaluated.
 * @property {number} - The number of failed assertions.
 * @property {number} - Total execution duration in milliseconds.
 */
export type GetApiCatalogServiceCiRunsDataSummary = z.infer<
  typeof getApiCatalogServiceCiRunsDataSummary
>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogServiceCiRunsDataSummary application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceCiRunsDataSummaryResponse = z.lazy(() => {
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
 * Zod schema for mapping the GetApiCatalogServiceCiRunsDataSummary application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceCiRunsDataSummaryRequest = z.lazy(() => {
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
