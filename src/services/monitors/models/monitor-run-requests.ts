import { z } from 'zod';

/**
 * Zod schema for the MonitorRunRequests model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorRunRequests = z.lazy(() => {
  return z.object({
    method: z.string().optional(),
    url: z.string().optional(),
    body: z.any().optional(),
    headers: z.any().optional(),
    timestamp: z.string().optional(),
  });
});

/**
 * Information about the monitor run's requests.
 * @typedef  {MonitorRunRequests} monitorRunRequests - Information about the monitor run's requests. - Information about the monitor run's requests.
 * @property {string} - The HTTP request method.
 * @property {string} - The request's URL.
 * @property {any} - Information about the request body, such as Content-Length.
 * @property {any} - Information about the request headers, such as Content-Type, Accept, encoding, and other information.
 * @property {string} - The date and time of the request.
 */
export type MonitorRunRequests = z.infer<typeof monitorRunRequests>;

/**
 * Zod schema for mapping API responses to the MonitorRunRequests application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRunRequestsResponse = z.lazy(() => {
  return z
    .object({
      method: z.string().optional(),
      url: z.string().optional(),
      body: z.any().optional(),
      headers: z.any().optional(),
      timestamp: z.string().optional(),
    })
    .transform((data) => ({
      method: data['method'],
      url: data['url'],
      body: data['body'],
      headers: data['headers'],
      timestamp: data['timestamp'],
    }));
});

/**
 * Zod schema for mapping the MonitorRunRequests application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRunRequestsRequest = z.lazy(() => {
  return z
    .object({
      method: z.string().optional(),
      url: z.string().optional(),
      body: z.any().optional(),
      headers: z.any().optional(),
      timestamp: z.string().optional(),
    })
    .transform((data) => ({
      method: data['method'],
      url: data['url'],
      body: data['body'],
      headers: data['headers'],
      timestamp: data['timestamp'],
    }));
});
