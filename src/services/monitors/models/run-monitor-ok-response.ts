import { z } from 'zod';
import {
  SuccessfulResponseRun,
  successfulResponseRun,
  successfulResponseRunRequest,
  successfulResponseRunResponse,
} from './successful-response-run';

/**
 * Zod schema for the RunMonitorOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const runMonitorOkResponse = z.lazy(() => {
  return z.object({
    run: successfulResponseRun.optional(),
  });
});

/**
 * @typedef {RunMonitorOkResponse} runMonitorOkResponse
 * @property {SuccessfulResponseRun} run - Information about the monitor run. If you pass the `async=true` query parameter, the response does not return the `stats`, `executions`, and `failures` responses. To get this information for an asynchronous run, call the GET `/monitors/{id}` endpoint.
 */
export type RunMonitorOkResponse = z.infer<typeof runMonitorOkResponse>;

/**
 * Zod schema for mapping API responses to the RunMonitorOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const runMonitorOkResponseResponse = z.lazy(() => {
  return z
    .object({
      run: successfulResponseRunResponse.optional(),
    })
    .transform((data) => ({
      run: data['run'],
    }));
});

/**
 * Zod schema for mapping the RunMonitorOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const runMonitorOkResponseRequest = z.lazy(() => {
  return z
    .object({
      run: successfulResponseRunRequest.optional(),
    })
    .transform((data) => ({
      run: data['run'],
    }));
});
