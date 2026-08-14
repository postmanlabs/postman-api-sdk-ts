import { z } from 'zod';

/**
 * Zod schema for the GetRunnerMetrics model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getRunnerMetrics = z.lazy(() => {
  return z.object({
    lastPingAt: z.string().optional(),
    oldestQueuedRunAgeSeconds: z.number().optional(),
    queueDepth: z.number().optional(),
  });
});

/**
 * The runner instance's metrics information.
 * @typedef {GetRunnerMetrics} getRunnerMetrics
 * @property {string} lastPingAt - The last date and time the runner sent results to the Postman cloud.
 * @property {number} oldestQueuedRunAgeSeconds - The age of the monitor, in seconds, that has been waiting the longest to run in the runner.
 * @property {number} queueDepth - The number of pending Postman monitor runs in the runner's queue.
 */
export type GetRunnerMetrics = z.infer<typeof getRunnerMetrics>;

/**
 * Zod schema for mapping API responses to the GetRunnerMetrics application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getRunnerMetricsResponse = z.lazy(() => {
  return z
    .object({
      lastPingAt: z.string().optional(),
      oldestQueuedRunAgeSeconds: z.number().optional(),
      queueDepth: z.number().optional(),
    })
    .transform((data) => ({
      lastPingAt: data['lastPingAt'],
      oldestQueuedRunAgeSeconds: data['oldestQueuedRunAgeSeconds'],
      queueDepth: data['queueDepth'],
    }));
});

/**
 * Zod schema for mapping the GetRunnerMetrics application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getRunnerMetricsRequest = z.lazy(() => {
  return z
    .object({
      lastPingAt: z.string().optional(),
      oldestQueuedRunAgeSeconds: z.number().optional(),
      queueDepth: z.number().optional(),
    })
    .transform((data) => ({
      lastPingAt: data['lastPingAt'],
      oldestQueuedRunAgeSeconds: data['oldestQueuedRunAgeSeconds'],
      queueDepth: data['queueDepth'],
    }));
});
