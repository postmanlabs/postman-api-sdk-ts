import { z } from 'zod';

/**
 * Zod schema for the Performance model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const performance = z.lazy(() => {
  return z.object({
    p90LatencyMs: z.number(),
    p95LatencyMs: z.number(),
  });
});

/**
 * Information about latency percentile metrics.
 * @typedef  {Performance} performance - Information about latency percentile metrics. - Information about latency percentile metrics.
 * @property {number} - The 90th-percentile response latency, in milliseconds.
 * @property {number} - The 95th-percentile response latency, in milliseconds.
 */
export type Performance = z.infer<typeof performance>;

/**
 * Zod schema for mapping API responses to the Performance application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const performanceResponse = z.lazy(() => {
  return z
    .object({
      p90LatencyMs: z.number(),
      p95LatencyMs: z.number(),
    })
    .transform((data) => ({
      p90LatencyMs: data['p90LatencyMs'],
      p95LatencyMs: data['p95LatencyMs'],
    }));
});

/**
 * Zod schema for mapping the Performance application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const performanceRequest = z.lazy(() => {
  return z
    .object({
      p90LatencyMs: z.number(),
      p95LatencyMs: z.number(),
    })
    .transform((data) => ({
      p90LatencyMs: data['p90LatencyMs'],
      p95LatencyMs: data['p95LatencyMs'],
    }));
});
