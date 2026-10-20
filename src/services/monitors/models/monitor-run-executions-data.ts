import { z } from 'zod';
import {
  MonitorRunExecutionsDataItem,
  monitorRunExecutionsDataItem,
  monitorRunExecutionsDataItemRequest,
  monitorRunExecutionsDataItemResponse,
} from './monitor-run-executions-data-item';
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
  MonitorRunErrorsData,
  monitorRunErrorsData,
  monitorRunErrorsDataRequest,
  monitorRunErrorsDataResponse,
} from './monitor-run-errors-data';

/**
 * Zod schema for the MonitorRunExecutionsData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorRunExecutionsData = z.lazy(() => {
  return z.object({
    id: z.number().optional(),
    item: monitorRunExecutionsDataItem.optional(),
    request: monitorRunRequests.optional(),
    response: monitorRunResponses.optional(),
    errors: z.array(monitorRunErrorsData).optional(),
  });
});

/**
 * @typedef {MonitorRunExecutionsData} monitorRunExecutionsData
 * @property {number} id - The execution ID.
 * @property {MonitorRunExecutionsDataItem} item - Information about the executed item.
 * @property {MonitorRunRequests} request - Information about the monitor run's requests.
 * @property {MonitorRunResponses} response - Information about the monitor run's response.
 * @property {MonitorRunErrorsData[]} errors - If the execution encounter errors, a list of errors and their information.
 */
export type MonitorRunExecutionsData = z.infer<typeof monitorRunExecutionsData>;

/**
 * Zod schema for mapping API responses to the MonitorRunExecutionsData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRunExecutionsDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      item: monitorRunExecutionsDataItemResponse.optional(),
      request: monitorRunRequestsResponse.optional(),
      response: monitorRunResponsesResponse.optional(),
      errors: z.array(monitorRunErrorsDataResponse).optional(),
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
 * Zod schema for mapping the MonitorRunExecutionsData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRunExecutionsDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      item: monitorRunExecutionsDataItemRequest.optional(),
      request: monitorRunRequestsRequest.optional(),
      response: monitorRunResponsesRequest.optional(),
      errors: z.array(monitorRunErrorsDataRequest).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      item: data['item'],
      request: data['request'],
      response: data['response'],
      errors: data['errors'],
    }));
});
