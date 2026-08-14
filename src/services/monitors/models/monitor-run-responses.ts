import { z } from 'zod';

/**
 * Zod schema for the MonitorRunResponses model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorRunResponses = z.lazy(() => {
  return z.object({
    body: z.any().optional(),
    code: z.number().optional(),
    headers: z.any().optional(),
    responseSize: z.number().optional(),
    responseTime: z.number().optional(),
  });
});

/**
 * Information about the monitor run's response.
 * @typedef {MonitorRunResponses} monitorRunResponses
 * @property {any} body - Information about the request body, such as Content-Length.
 * @property {number} code - The response's HTTP status code.
 * @property {any} headers - Information about the response headers, such as Content-Type, Accept, encoding, and other information.
 * @property {number} responseSize - The response size, in bytes.
 * @property {number} responseTime - The response time, in milliseconds.
 */
export type MonitorRunResponses = z.infer<typeof monitorRunResponses>;

/**
 * Zod schema for mapping API responses to the MonitorRunResponses application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRunResponsesResponse = z.lazy(() => {
  return z
    .object({
      body: z.any().optional(),
      code: z.number().optional(),
      headers: z.any().optional(),
      responseSize: z.number().optional(),
      responseTime: z.number().optional(),
    })
    .transform((data) => ({
      body: data['body'],
      code: data['code'],
      headers: data['headers'],
      responseSize: data['responseSize'],
      responseTime: data['responseTime'],
    }));
});

/**
 * Zod schema for mapping the MonitorRunResponses application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRunResponsesRequest = z.lazy(() => {
  return z
    .object({
      body: z.any().optional(),
      code: z.number().optional(),
      headers: z.any().optional(),
      responseSize: z.number().optional(),
      responseTime: z.number().optional(),
    })
    .transform((data) => ({
      body: data['body'],
      code: data['code'],
      headers: data['headers'],
      responseSize: data['responseSize'],
      responseTime: data['responseTime'],
    }));
});
