import { z } from 'zod';
import {
  MonitorRunExecutionsItem,
  monitorRunExecutionsItem,
  monitorRunExecutionsItemRequest,
  monitorRunExecutionsItemResponse,
} from './monitor-run-executions-item';
import {
  MonitorRunRequests,
  monitorRunRequests,
  monitorRunRequestsRequest,
  monitorRunRequestsResponse,
} from './monitor-run-requests';
import {
  MonitorRunResponses,
  monitorRunResponses,
  monitorRunResponsesRequest,
  monitorRunResponsesResponse,
} from './monitor-run-responses';
import {
  MonitorRunErrors,
  monitorRunErrors,
  monitorRunErrorsRequest,
  monitorRunErrorsResponse,
} from './monitor-run-errors';

/**
 * Zod schema for the MonitorRunExecutions model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorRunExecutions = z.lazy(() => {
  return z.object({
    id: z.number().optional(),
    item: monitorRunExecutionsItem.optional(),
    request: monitorRunRequests.optional(),
    response: monitorRunResponses.optional(),
    errors: z.array(monitorRunErrors).optional(),
  });
});

/**
 *
 * @typedef  {MonitorRunExecutions} monitorRunExecutions
 * @property {number} - The execution ID.
 * @property {MonitorRunExecutionsItem} - Information about the executed item.
 * @property {MonitorRunRequests} - Information about the monitor run's requests.
 * @property {MonitorRunResponses} - Information about the monitor run's response.
 * @property {MonitorRunErrors[]} - If the execution encounter errors, a list of errors and their information.
 */
export type MonitorRunExecutions = z.infer<typeof monitorRunExecutions>;

/**
 * Zod schema for mapping API responses to the MonitorRunExecutions application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRunExecutionsResponse = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      item: monitorRunExecutionsItemResponse.optional(),
      request: monitorRunRequestsResponse.optional(),
      response: monitorRunResponsesResponse.optional(),
      errors: z.array(monitorRunErrorsResponse).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      item: data['item'],
      request: data['request'],
      response: data['response'],
      errors: data['errors'],
    }));
});

/**
 * Zod schema for mapping the MonitorRunExecutions application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRunExecutionsRequest = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      item: monitorRunExecutionsItemRequest.optional(),
      request: monitorRunRequestsRequest.optional(),
      response: monitorRunResponsesRequest.optional(),
      errors: z.array(monitorRunErrorsRequest).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      item: data['item'],
      request: data['request'],
      response: data['response'],
      errors: data['errors'],
    }));
});
