import { z } from 'zod';
import { RunInfo, runInfo, runInfoRequest, runInfoResponse } from './run-info';

/**
 * Zod schema for the RunExceeds300SecondsRun model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const runExceeds300SecondsRun = z.lazy(() => {
  return z.object({
    info: runInfo.optional(),
  });
});

/**
 * The response if the monitor's run exceeds 300 seconds. To get information about the monitor's run, call the GET `/monitors/{id}` endpoint.
 * @typedef  {RunExceeds300SecondsRun} runExceeds300SecondsRun - The response if the monitor's run exceeds 300 seconds. To get information about the monitor's run, call the GET `/monitors/{id}` endpoint. - The response if the monitor's run exceeds 300 seconds. To get information about the monitor's run, call the GET `/monitors/{id}` endpoint.
 * @property {RunInfo} - Information about the monitor.
 */
export type RunExceeds300SecondsRun = z.infer<typeof runExceeds300SecondsRun>;

/**
 * Zod schema for mapping API responses to the RunExceeds300SecondsRun application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const runExceeds300SecondsRunResponse = z.lazy(() => {
  return z
    .object({
      info: runInfoResponse.optional(),
    })
    .transform((data) => ({
      info: data['info'],
    }));
});

/**
 * Zod schema for mapping the RunExceeds300SecondsRun application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const runExceeds300SecondsRunRequest = z.lazy(() => {
  return z
    .object({
      info: runInfoRequest.optional(),
    })
    .transform((data) => ({
      info: data['info'],
    }));
});
