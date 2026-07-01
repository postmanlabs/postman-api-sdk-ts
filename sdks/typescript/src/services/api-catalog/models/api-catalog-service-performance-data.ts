import { z } from 'zod';

/**
 * Zod schema for the ApiCatalogServicePerformanceData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const apiCatalogServicePerformanceData = z.lazy(() => {
  return z.object({
    minResponseMs: z.number(),
    maxResponseMs: z.number(),
  });
});

/**
 * Information about the response time range across all requests in the run.
 * @typedef  {ApiCatalogServicePerformanceData} apiCatalogServicePerformanceData - Information about the response time range across all requests in the run. - Information about the response time range across all requests in the run.
 * @property {number} - The fastest individual response time, in milliseconds.
 * @property {number} - The slowest individual response time, in milliseconds.
 */
export type ApiCatalogServicePerformanceData = z.infer<typeof apiCatalogServicePerformanceData>;

/**
 * Zod schema for mapping API responses to the ApiCatalogServicePerformanceData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCatalogServicePerformanceDataResponse = z.lazy(() => {
  return z
    .object({
      minResponseMs: z.number(),
      maxResponseMs: z.number(),
    })
    .transform((data) => ({
      minResponseMs: data['minResponseMs'],
      maxResponseMs: data['maxResponseMs'],
    }));
});

/**
 * Zod schema for mapping the ApiCatalogServicePerformanceData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCatalogServicePerformanceDataRequest = z.lazy(() => {
  return z
    .object({
      minResponseMs: z.number(),
      maxResponseMs: z.number(),
    })
    .transform((data) => ({
      minResponseMs: data['minResponseMs'],
      maxResponseMs: data['maxResponseMs'],
    }));
});
