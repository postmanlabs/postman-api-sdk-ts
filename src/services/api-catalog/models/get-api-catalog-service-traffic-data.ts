import { z } from 'zod';

/**
 * Zod schema for the GetApiCatalogServiceTrafficData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogServiceTrafficData = z.lazy(() => {
  return z.object({
    p95LatencyMs: z.number().optional(),
    errorRatePct: z.number().optional(),
    totalRequests: z.number().optional(),
    totalRequestsDeltaPct: z.number().optional().nullable(),
    totalErrors: z.number().optional(),
    totalEndpoints: z.number().optional(),
    p95LatencyMsDeltaPct: z.number().optional().nullable(),
    errorRatePctDeltaPct: z.number().optional().nullable(),
  });
});

/**
 * Information about traffic and performance within the time window. If there's no traffic data, this returns a null value.
 * @typedef  {GetApiCatalogServiceTrafficData} getApiCatalogServiceTrafficData - Information about traffic and performance within the time window. If there's no traffic data, this returns a null value. - Information about traffic and performance within the time window. If there's no traffic data, this returns a null value.
 * @property {number} - The 95th-percentile response latency, in milliseconds.
 * @property {number} - The percentage of requests that resulted in errors.
 * @property {number} - The total number of requests.
 * @property {number} - The percentage change in total requests compared to the preceding seven day window.
 * @property {number} - The total number of error responses.
 * @property {number} - The total number of distinct endpoints.
 * @property {number} - The percentage change in p95 latency compared to the preceding seven day window.
 * @property {number} - The percentage change in error rate compared to the preceding seven day window.
 */
export type GetApiCatalogServiceTrafficData = z.infer<typeof getApiCatalogServiceTrafficData>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogServiceTrafficData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceTrafficDataResponse = z.lazy(() => {
  return z
    .object({
      p95LatencyMs: z.number().optional(),
      errorRatePct: z.number().optional(),
      totalRequests: z.number().optional(),
      totalRequestsDeltaPct: z.number().optional().nullable(),
      totalErrors: z.number().optional(),
      totalEndpoints: z.number().optional(),
      p95LatencyMsDeltaPct: z.number().optional().nullable(),
      errorRatePctDeltaPct: z.number().optional().nullable(),
    })
    .transform((data) => ({
      p95LatencyMs: data['p95LatencyMs'],
      errorRatePct: data['errorRatePct'],
      totalRequests: data['totalRequests'],
      totalRequestsDeltaPct: data['totalRequestsDeltaPct'],
      totalErrors: data['totalErrors'],
      totalEndpoints: data['totalEndpoints'],
      p95LatencyMsDeltaPct: data['p95LatencyMsDeltaPct'],
      errorRatePctDeltaPct: data['errorRatePctDeltaPct'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogServiceTrafficData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceTrafficDataRequest = z.lazy(() => {
  return z
    .object({
      p95LatencyMs: z.number().optional(),
      errorRatePct: z.number().optional(),
      totalRequests: z.number().optional(),
      totalRequestsDeltaPct: z.number().optional().nullable(),
      totalErrors: z.number().optional(),
      totalEndpoints: z.number().optional(),
      p95LatencyMsDeltaPct: z.number().optional().nullable(),
      errorRatePctDeltaPct: z.number().optional().nullable(),
    })
    .transform((data) => ({
      p95LatencyMs: data['p95LatencyMs'],
      errorRatePct: data['errorRatePct'],
      totalRequests: data['totalRequests'],
      totalRequestsDeltaPct: data['totalRequestsDeltaPct'],
      totalErrors: data['totalErrors'],
      totalEndpoints: data['totalEndpoints'],
      p95LatencyMsDeltaPct: data['p95LatencyMsDeltaPct'],
      errorRatePctDeltaPct: data['errorRatePctDeltaPct'],
    }));
});
