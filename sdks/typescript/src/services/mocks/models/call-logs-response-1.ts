import { z } from 'zod';
import {
  ResponseHeaders,
  responseHeaders,
  responseHeadersRequest,
  responseHeadersResponse,
} from './response-headers';
import {
  ResponseBody,
  responseBody,
  responseBodyRequest,
  responseBodyResponse,
} from './response-body';

/**
 * Zod schema for the CallLogsResponse1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const callLogsResponse1 = z.lazy(() => {
  return z.object({
    type: z.string().optional(),
    statusCode: z.number().optional(),
    headers: responseHeaders.optional(),
    body: responseBody.optional(),
  });
});

/**
 * The server response's response information.
 * @typedef  {CallLogsResponse1} callLogsResponse1 - The server response's response information. - The server response's response information.
 * @property {string} - The type of response.
 * @property {number} - The response's status code.
 * @property {ResponseHeaders} - The response's headers.
 * @property {ResponseBody} - The response's body information.
 */
export type CallLogsResponse1 = z.infer<typeof callLogsResponse1>;

/**
 * Zod schema for mapping API responses to the CallLogsResponse1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const callLogsResponse1Response = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      statusCode: z.number().optional(),
      headers: responseHeadersResponse.optional(),
      body: responseBodyResponse.optional(),
    })
    .transform((data) => ({
      type: data['type'],
      statusCode: data['statusCode'],
      headers: data['headers'],
      body: data['body'],
    }));
});

/**
 * Zod schema for mapping the CallLogsResponse1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const callLogsResponse1Request = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      statusCode: z.number().optional(),
      headers: responseHeadersRequest.optional(),
      body: responseBodyRequest.optional(),
    })
    .transform((data) => ({
      type: data['type'],
      statusCode: data['statusCode'],
      headers: data['headers'],
      body: data['body'],
    }));
});
