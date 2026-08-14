import { z } from 'zod';
import {
  MonitorRunInformation,
  monitorRunInformation,
  monitorRunInformationRequest,
  monitorRunInformationResponse,
} from './monitor-run-information';
import {
  MonitorRunStats,
  monitorRunStats,
  monitorRunStatsRequest,
  monitorRunStatsResponse,
} from './monitor-run-stats';
import {
  MonitorRunExecutions,
  monitorRunExecutions,
  monitorRunExecutionsRequest,
  monitorRunExecutionsResponse,
} from './monitor-run-executions';

/**
 * Zod schema for the SuccessfulResponseRun model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseRun = z.lazy(() => {
  return z.object({
    info: monitorRunInformation.optional(),
    stats: monitorRunStats.optional(),
    executions: z.array(monitorRunExecutions).optional(),
    failures: z.array(z.any()).optional(),
  });
});

/**
 * Information about the monitor run. If you pass the `async=true` query parameter, the response does not return the `stats`, `executions`, and `failures` responses. To get this information for an asynchronous run, call the GET `/monitors/{id}` endpoint.
 * @typedef {SuccessfulResponseRun} successfulResponseRun
 * @property {MonitorRunInformation} info - Information about the monitor.
 * @property {MonitorRunStats} stats - Information about the monitor run's stats.
 * @property {MonitorRunExecutions[]} executions - Information about the monitor run's executions.
 * @property {any[]} failures - If the monitor run failed, information about the run's failures.
 */
export type SuccessfulResponseRun = z.infer<typeof successfulResponseRun>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseRun application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseRunResponse = z.lazy(() => {
  return z
    .object({
      info: monitorRunInformationResponse.optional(),
      stats: monitorRunStatsResponse.optional(),
      executions: z.array(monitorRunExecutionsResponse).optional(),
      failures: z.array(z.any()).optional(),
    })
    .transform((data) => ({
      info: data['info'],
      stats: data['stats'],
      executions: data['executions'],
      failures: data['failures'],
    }));
});

/**
 * Zod schema for mapping the SuccessfulResponseRun application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseRunRequest = z.lazy(() => {
  return z
    .object({
      info: monitorRunInformationRequest.optional(),
      stats: monitorRunStatsRequest.optional(),
      executions: z.array(monitorRunExecutionsRequest).optional(),
      failures: z.array(z.any()).optional(),
    })
    .transform((data) => ({
      info: data['info'],
      stats: data['stats'],
      executions: data['executions'],
      failures: data['failures'],
    }));
});
