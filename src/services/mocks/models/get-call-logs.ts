import { z } from 'zod';
import {
  MockCallLogData,
  mockCallLogData,
  mockCallLogDataRequest,
  mockCallLogDataResponse,
} from './mock-call-log-data';
import {
  GetSpecVersionTagsMeta,
  getSpecVersionTagsMeta,
  getSpecVersionTagsMetaRequest,
  getSpecVersionTagsMetaResponse,
} from '../../common/get-spec-version-tags-meta';

/**
 * Zod schema for the GetCallLogs model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getCallLogs = z.lazy(() => {
  return z.object({
    callLogs: z.array(mockCallLogData).optional(),
    meta: getSpecVersionTagsMeta.optional(),
  });
});

/**
 * @typedef {GetCallLogs} getCallLogs
 * @property {MockCallLogData[]} callLogs - A list of call logs.
 * @property {GetSpecVersionTagsMeta} meta - The response's meta information for paginated results.
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
      'call-logs': z.array(mockCallLogDataResponse).optional(),
      meta: getSpecVersionTagsMetaResponse.optional(),
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
      callLogs: z.array(mockCallLogDataRequest).optional(),
      meta: getSpecVersionTagsMetaRequest.optional(),
    })
    .transform((data) => ({
      'call-logs': data['callLogs'],
      meta: data['meta'],
    }));
});
