import { z } from 'zod';
import {
  RunExceeds300SecondsRun,
  runExceeds300SecondsRun,
  runExceeds300SecondsRunRequest,
  runExceeds300SecondsRunResponse,
} from './run-exceeds-300-seconds-run';

/**
 * Zod schema for the RunExceeds300Seconds model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const runExceeds300Seconds = z.lazy(() => {
  return z.object({
    run: runExceeds300SecondsRun.optional(),
  });
});

/**
 *
 * @typedef  {RunExceeds300Seconds} runExceeds300Seconds
 * @property {RunExceeds300SecondsRun} - The response if the monitor's run exceeds 300 seconds. To get information about the monitor's run, call the GET `/monitors/{id}` endpoint.
 */
export type RunExceeds300Seconds = z.infer<typeof runExceeds300Seconds>;

/**
 * Zod schema for mapping API responses to the RunExceeds300Seconds application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const runExceeds300SecondsResponse = z.lazy(() => {
  return z
    .object({
      run: runExceeds300SecondsRunResponse.optional(),
    })
    .transform((data) => ({
      run: data['run'],
    }));
});

/**
 * Zod schema for mapping the RunExceeds300Seconds application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const runExceeds300SecondsRequest = z.lazy(() => {
  return z
    .object({
      run: runExceeds300SecondsRunRequest.optional(),
    })
    .transform((data) => ({
      run: data['run'],
    }));
});
