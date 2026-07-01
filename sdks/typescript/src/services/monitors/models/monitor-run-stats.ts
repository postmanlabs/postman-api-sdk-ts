import { z } from 'zod';
import { Assertions, assertions, assertionsRequest, assertionsResponse } from './assertions';
import {
  MonitorRunStatsRequests,
  monitorRunStatsRequests,
  monitorRunStatsRequestsRequest,
  monitorRunStatsRequestsResponse,
} from './monitor-run-stats-requests';

/**
 * Zod schema for the MonitorRunStats model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorRunStats = z.lazy(() => {
  return z.object({
    assertions: assertions.optional(),
    requests: monitorRunStatsRequests.optional(),
    runCount: z.number().optional(),
    errorCount: z.number().optional(),
    abortedCount: z.number().optional(),
    responseLatency: z.number().optional(),
    responseSize: z.number().optional(),
  });
});

/**
 * Information about the monitor run's stats.
 * @typedef  {MonitorRunStats} monitorRunStats - Information about the monitor run's stats. - Information about the monitor run's stats.
 * @property {Assertions} - Information about the monitor's tests.
 * @property {MonitorRunStatsRequests} - Information about the monitor's requests.
 * @property {number} - The number of monitor runs across the selected monitor regions.
 * @property {number} - The number of errors encountered during the monitor's run.
 * @property {number} - The number of runs terminated.
 * @property {number} - The total time it took to run the monitor, in milliseconds.
 * @property {number} - The total response size. This includes the runs in all the selected regions.
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
      assertions: assertionsResponse.optional(),
      requests: monitorRunStatsRequestsResponse.optional(),
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
      assertions: assertionsRequest.optional(),
      requests: monitorRunStatsRequestsRequest.optional(),
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
