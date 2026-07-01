import { z } from 'zod';
import { Method, method } from './method';
import { Performance, performance, performanceRequest, performanceResponse } from './performance';
import { Errors, errors, errorsRequest, errorsResponse } from './errors';

/**
 * Zod schema for the GetApiCatalogServiceEndpointsData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogServiceEndpointsData = z.lazy(() => {
  return z.object({
    method: method,
    path: z.string(),
    host: z.string(),
    requestCount: z.number(),
    performance: performance,
    errors: errors,
  });
});

/**
 *
 * @typedef  {GetApiCatalogServiceEndpointsData} getApiCatalogServiceEndpointsData
 * @property {Method} - The endpoint's HTTP method.
 * @property {string} - The endpoint's URL path template.
 * @property {string} - The hostname the endpoint was observed on.
 * @property {number} - The total number of requests to this endpoint within the time window.
 * @property {Performance} - Information about latency percentile metrics.
 * @property {Errors} - Information about the endpoint's errors.
 */
export type GetApiCatalogServiceEndpointsData = z.infer<typeof getApiCatalogServiceEndpointsData>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogServiceEndpointsData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceEndpointsDataResponse = z.lazy(() => {
  return z
    .object({
      method: method,
      path: z.string(),
      host: z.string(),
      requestCount: z.number(),
      performance: performanceResponse,
      errors: errorsResponse,
    })
    .transform((data) => ({
      method: data['method'],
      path: data['path'],
      host: data['host'],
      requestCount: data['requestCount'],
      performance: data['performance'],
      errors: data['errors'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogServiceEndpointsData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceEndpointsDataRequest = z.lazy(() => {
  return z
    .object({
      method: method,
      path: z.string(),
      host: z.string(),
      requestCount: z.number(),
      performance: performanceRequest,
      errors: errorsRequest,
    })
    .transform((data) => ({
      method: data['method'],
      path: data['path'],
      host: data['host'],
      requestCount: data['requestCount'],
      performance: data['performance'],
      errors: data['errors'],
    }));
});
