import { z } from 'zod';
import {
  MockServerResponseHeadersData,
  mockServerResponseHeadersData,
  mockServerResponseHeadersDataRequest,
  mockServerResponseHeadersDataResponse,
} from './mock-server-response-headers-data';
import {
  MockCallLogRequestBodyData,
  mockCallLogRequestBodyData,
  mockCallLogRequestBodyDataRequest,
  mockCallLogRequestBodyDataResponse,
} from './mock-call-log-request-body-data';

/**
 * Zod schema for the MockCallLogRequestData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const mockCallLogRequestData = z.lazy(() => {
  return z.object({
    method: z.string().optional(),
    path: z.string().optional(),
    headers: z.array(mockServerResponseHeadersData).optional(),
    body: mockCallLogRequestBodyData.optional(),
  });
});

/**
 * The server response's request information.
 * @typedef {MockCallLogRequestData} mockCallLogRequestData
 * @property {string} method - The request method.
 * @property {string} path - The request's path.
 * @property {MockServerResponseHeadersData[]} headers - The request's headers.
 * @property {MockCallLogRequestBodyData} body - The request's body information.
 */
export type MockCallLogRequestData = z.infer<typeof mockCallLogRequestData>;

/**
 * Zod schema for mapping API responses to the MockCallLogRequestData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockCallLogRequestDataResponse = z.lazy(() => {
  return z
    .object({
      method: z.string().optional(),
      path: z.string().optional(),
      headers: z.array(mockServerResponseHeadersDataResponse).optional(),
      body: mockCallLogRequestBodyDataResponse.optional(),
    })
    .transform((data) => ({
      method: data['method'],
      path: data['path'],
      headers: data['headers'],
      body: data['body'],
    }));
});

/**
 * Zod schema for mapping the MockCallLogRequestData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockCallLogRequestDataRequest = z.lazy(() => {
  return z
    .object({
      method: z.string().optional(),
      path: z.string().optional(),
      headers: z.array(mockServerResponseHeadersDataRequest).optional(),
      body: mockCallLogRequestBodyDataRequest.optional(),
    })
    .transform((data) => ({
      method: data['method'],
      path: data['path'],
      headers: data['headers'],
      body: data['body'],
    }));
});
