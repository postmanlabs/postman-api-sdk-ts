import { z } from 'zod';
import {
  MonitorRunAssertionStats,
  monitorRunAssertionStats,
  monitorRunAssertionStatsRequest,
  monitorRunAssertionStatsResponse,
} from './monitor-run-assertion-stats';
import {
  MonitorRunRequestsStats,
  monitorRunRequestsStats,
  monitorRunRequestsStatsRequest,
  monitorRunRequestsStatsResponse,
} from './monitor-run-requests-stats';

/**
 * Zod schema for the MonitorRunStats model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorRunStats = z.lazy(() => {
  return z.object({
    assertions: monitorRunAssertionStats.optional(),
    requests: monitorRunRequestsStats.optional(),
    runCount: z.number().optional(),
    errorCount: z.number().optional(),
    abortedCount: z.number().optional(),
    responseLatency: z.number().optional(),
    responseSize: z.number().optional(),
  });
});

/**
 * Information about the monitor run's stats.
 * @typedef {MonitorRunStats} monitorRunStats
 * @property {MonitorRunAssertionStats} assertions - Information about the monitor's tests.
 * @property {MonitorRunRequestsStats} requests - Information about the monitor's requests.
 * @property {number} runCount - The number of monitor runs across the selected monitor regions.
 * @property {number} errorCount - The number of errors encountered during the monitor's run.
 * @property {number} abortedCount - The number of runs terminated.
 * @property {number} responseLatency - The total time it took to run the monitor, in milliseconds.
 * @property {number} responseSize - The total response size. This includes the runs in all the selected regions.
 */
export type MonitorRunStats = z.infer<typeof monitorRunStats>;

/**
 * Zod schema for mapping API responses to the MonitorRunStats application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRunStatsResponse = z.lazy(() => {
  return z
    .object({
      assertions: monitorRunAssertionStatsResponse.optional(),
      requests: monitorRunRequestsStatsResponse.optional(),
      runCount: z.number().optional(),
      errorCount: z.number().optional(),
      abortedCount: z.number().optional(),
      responseLatency: z.number().optional(),
      responseSize: z.number().optional(),
    })
    .transform((data) => ({
      assertions: data['assertions'],
      requests: data['requests'],
      runCount: data['runCount'],
      errorCount: data['errorCount'],
      abortedCount: data['abortedCount'],
      responseLatency: data['responseLatency'],
      responseSize: data['responseSize'],
    }));
});

/**
 * Zod schema for mapping the MonitorRunStats application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRunStatsRequest = z.lazy(() => {
  return z
    .object({
      assertions: monitorRunAssertionStatsRequest.optional(),
      requests: monitorRunRequestsStatsRequest.optional(),
      runCount: z.number().optional(),
      errorCount: z.number().optional(),
      abortedCount: z.number().optional(),
      responseLatency: z.number().optional(),
      responseSize: z.number().optional(),
    })
    .transform((data) => ({
      assertions: data['assertions'],
      requests: data['requests'],
      runCount: data['runCount'],
      errorCount: data['errorCount'],
      abortedCount: data['abortedCount'],
      responseLatency: data['responseLatency'],
      responseSize: data['responseSize'],
    }));
});
