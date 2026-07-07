import { z } from 'zod';
import {
  RequestHeaders,
  requestHeaders,
  requestHeadersRequest,
  requestHeadersResponse,
} from './request-headers';
import { RequestBody, requestBody, requestBodyRequest, requestBodyResponse } from './request-body';

/**
 * Zod schema for the CallLogsRequest1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const callLogsRequest1 = z.lazy(() => {
  return z.object({
    method: z.string().optional(),
    path: z.string().optional(),
    headers: requestHeaders.optional(),
    body: requestBody.optional(),
  });
});

/**
 * The server response's request information.
 * @typedef  {CallLogsRequest1} callLogsRequest1 - The server response's request information. - The server response's request information.
 * @property {string} - The request method.
 * @property {string} - The request's path.
 * @property {RequestHeaders} - The request's headers.
 * @property {RequestBody} - The request's body information.
 */
export type CallLogsRequest1 = z.infer<typeof callLogsRequest1>;

/**
 * Zod schema for mapping API responses to the CallLogsRequest1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const callLogsRequest1Response = z.lazy(() => {
  return z
    .object({
      method: z.string().optional(),
      path: z.string().optional(),
      headers: requestHeadersResponse.optional(),
      body: requestBodyResponse.optional(),
    })
    .transform((data) => ({
      method: data['method'],
      path: data['path'],
      headers: data['headers'],
      body: data['body'],
    }));
});

/**
 * Zod schema for mapping the CallLogsRequest1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const callLogsRequest1Request = z.lazy(() => {
  return z
    .object({
      method: z.string().optional(),
      path: z.string().optional(),
      headers: requestHeadersRequest.optional(),
      body: requestBodyRequest.optional(),
    })
    .transform((data) => ({
      method: data['method'],
      path: data['path'],
      headers: data['headers'],
      body: data['body'],
    }));
});
