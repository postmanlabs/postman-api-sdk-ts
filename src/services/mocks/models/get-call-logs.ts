import { z } from 'zod';
import { CallLogs, callLogs, callLogsRequest, callLogsResponse } from './call-logs';
import {
  GetCallLogsMeta,
  getCallLogsMeta,
  getCallLogsMetaRequest,
  getCallLogsMetaResponse,
} from './get-call-logs-meta';

/**
 * Zod schema for the GetCallLogs model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getCallLogs = z.lazy(() => {
  return z.object({
    callLogs: z.array(callLogs).optional(),
    meta: getCallLogsMeta.optional(),
  });
});

/**
 * @typedef {GetCallLogs} getCallLogs
 * @property {CallLogs[]} callLogs - A list of call logs.
 * @property {GetCallLogsMeta} meta - The response's non-standard meta information.
 */
export type GetCallLogs = z.infer<typeof getCallLogs>;

/**
 * Zod schema for mapping API responses to the GetCallLogs application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getCallLogsResponse = z.lazy(() => {
  return z
    .object({
      'call-logs': z.array(callLogsResponse).optional(),
      meta: getCallLogsMetaResponse.optional(),
    })
    .transform((data) => ({
      callLogs: data['call-logs'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the GetCallLogs application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getCallLogsRequest = z.lazy(() => {
  return z
    .object({
      callLogs: z.array(callLogsRequest).optional(),
      meta: getCallLogsMetaRequest.optional(),
    })
    .transform((data) => ({
      'call-logs': data['callLogs'],
      meta: data['meta'],
    }));
});
