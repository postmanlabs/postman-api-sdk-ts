import { z } from 'zod';
import {
  MonitorRunStats,
  monitorRunStats,
  monitorRunStatsRequest,
  monitorRunStatsResponse,
} from './monitor-run-stats';

/**
 * Zod schema for the MonitorLastRun model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorLastRun = z.lazy(() => {
  return z.object({
    status: z.string().optional(),
    startedAt: z.string().optional(),
    finishedAt: z.string().optional(),
    stats: monitorRunStats.optional(),
  });
});

/**
 * Information about the monitor's previous run.
 * @typedef  {MonitorLastRun} monitorLastRun - Information about the monitor's previous run. - Information about the monitor's previous run.
 * @property {string} - The monitor's status after its last run.
 * @property {string} - The date and time at which the monitor's previous run started.
 * @property {string} - The date and time at which the monitor's previous run completed.
 * @property {MonitorRunStats} - Information about the monitor run's stats.
 */
export type MonitorLastRun = z.infer<typeof monitorLastRun>;

/**
 * Zod schema for mapping API responses to the MonitorLastRun application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorLastRunResponse = z.lazy(() => {
  return z
    .object({
      status: z.string().optional(),
      startedAt: z.string().optional(),
      finishedAt: z.string().optional(),
      stats: monitorRunStatsResponse.optional(),
    })
    .transform((data) => ({
      status: data['status'],
      startedAt: data['startedAt'],
      finishedAt: data['finishedAt'],
      stats: data['stats'],
    }));
});

/**
 * Zod schema for mapping the MonitorLastRun application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorLastRunRequest = z.lazy(() => {
  return z
    .object({
      status: z.string().optional(),
      startedAt: z.string().optional(),
      finishedAt: z.string().optional(),
      stats: monitorRunStatsRequest.optional(),
    })
    .transform((data) => ({
      status: data['status'],
      startedAt: data['startedAt'],
      finishedAt: data['finishedAt'],
      stats: data['stats'],
    }));
});
