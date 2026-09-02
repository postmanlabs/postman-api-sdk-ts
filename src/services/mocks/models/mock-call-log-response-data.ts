import { z } from 'zod';
import {
  CallLogsResponseHeadersData,
  callLogsResponseHeadersData,
  callLogsResponseHeadersDataRequest,
  callLogsResponseHeadersDataResponse,
} from './call-logs-response-headers-data';
import {
  MockServerResponseBodyData,
  mockServerResponseBodyData,
  mockServerResponseBodyDataRequest,
  mockServerResponseBodyDataResponse,
} from './mock-server-response-body-data';

/**
 * Zod schema for the MockCallLogResponseData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const mockCallLogResponseData = z.lazy(() => {
  return z.object({
    type: z.string().optional(),
    statusCode: z.number().optional(),
    headers: z.array(callLogsResponseHeadersData).optional(),
    body: mockServerResponseBodyData.optional(),
  });
});

/**
 * The server response's response information.
 * @typedef {MockCallLogResponseData} mockCallLogResponseData
 * @property {string} type - The type of response.
 * @property {number} statusCode - The response's status code.
 * @property {CallLogsResponseHeadersData[]} headers - The response's headers.
 * @property {MockServerResponseBodyData} body - The response's body information.
 */
export type MockCallLogResponseData = z.infer<typeof mockCallLogResponseData>;

/**
 * Zod schema for mapping API responses to the MockCallLogResponseData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockCallLogResponseDataResponse = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      statusCode: z.number().optional(),
      headers: z.array(callLogsResponseHeadersDataResponse).optional(),
      body: mockServerResponseBodyDataResponse.optional(),
    })
    .transform((data) => ({
      type: data['type'],
      statusCode: data['statusCode'],
      headers: data['headers'],
      body: data['body'],
    }));
});

/**
 * Zod schema for mapping the MockCallLogResponseData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockCallLogResponseDataRequest = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      statusCode: z.number().optional(),
      headers: z.array(callLogsResponseHeadersDataRequest).optional(),
      body: mockServerResponseBodyDataRequest.optional(),
    })
    .transform((data) => ({
      type: data['type'],
      statusCode: data['statusCode'],
      headers: data['headers'],
      body: data['body'],
    }));
});
