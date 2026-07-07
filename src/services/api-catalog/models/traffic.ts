import { z } from 'zod';

/**
 * Zod schema for the Traffic model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const traffic = z.lazy(() => {
  return z.object({
    p95LatencyMs: z.number().nullable(),
    errorRatePct: z.number().nullable(),
  });
});

/**
 * Information about traffic and performance within the time window. If there's no traffic data, this returns a null value.
 * @typedef  {Traffic} traffic - Information about traffic and performance within the time window. If there's no traffic data, this returns a null value. - Information about traffic and performance within the time window. If there's no traffic data, this returns a null value.
 * @property {number} - The 95th-percentile response latency, in milliseconds.
 * @property {number} - The percentage of requests that resulted in errors.
 */
export type Traffic = z.infer<typeof traffic>;

/**
 * Zod schema for mapping API responses to the Traffic application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const trafficResponse = z.lazy(() => {
  return z
    .object({
      p95LatencyMs: z.number().nullable(),
      errorRatePct: z.number().nullable(),
    })
    .transform((data) => ({
      p95LatencyMs: data['p95LatencyMs'],
      errorRatePct: data['errorRatePct'],
    }));
});

/**
 * Zod schema for mapping the Traffic application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const trafficRequest = z.lazy(() => {
  return z
    .object({
      p95LatencyMs: z.number().nullable(),
      errorRatePct: z.number().nullable(),
    })
    .transform((data) => ({
      p95LatencyMs: data['p95LatencyMs'],
      errorRatePct: data['errorRatePct'],
    }));
});
