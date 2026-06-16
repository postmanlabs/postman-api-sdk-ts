import { z } from 'zod';
import {
  UpdateMockServerResponseServerResponseHeaders,
  updateMockServerResponseServerResponseHeaders,
  updateMockServerResponseServerResponseHeadersRequest,
  updateMockServerResponseServerResponseHeadersResponse,
} from './update-mock-server-response-server-response-headers';
import {
  UpdateMockServerResponseServerResponseLanguage,
  updateMockServerResponseServerResponseLanguage,
} from './update-mock-server-response-server-response-language';

/**
 * Zod schema for the UpdateMockServerResponseServerResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateMockServerResponseServerResponse = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    statusCode: z.number().optional(),
    headers: z.array(updateMockServerResponseServerResponseHeaders).optional(),
    language: updateMockServerResponseServerResponseLanguage.optional().nullable(),
    body: z.string().optional(),
  });
});

/**
 *
 * @typedef  {UpdateMockServerResponseServerResponse} updateMockServerResponseServerResponse
 * @property {string} - The server response's name.
 * @property {number} - The server response's 5xx HTTP response code. This property only accepts [5xx values](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml).
 * @property {UpdateMockServerResponseServerResponseHeaders[]} - The server response's request headers, such as Content-Type, Accept, encoding, and other information.
 * @property {UpdateMockServerResponseServerResponseLanguage} - The server response's body language type.
 * @property {string} - The server response's body that returns when you call the mock server.
 */
export type UpdateMockServerResponseServerResponse = z.infer<
  typeof updateMockServerResponseServerResponse
>;

/**
 * Zod schema for mapping API responses to the UpdateMockServerResponseServerResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateMockServerResponseServerResponseResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      statusCode: z.number().optional(),
      headers: z.array(updateMockServerResponseServerResponseHeadersResponse).optional(),
      language: updateMockServerResponseServerResponseLanguage.optional().nullable(),
      body: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      statusCode: data['statusCode'],
      headers: data['headers'],
      language: data['language'],
      body: data['body'],
    }));
});

/**
 * Zod schema for mapping the UpdateMockServerResponseServerResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateMockServerResponseServerResponseRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      statusCode: z.number().optional(),
      headers: z.array(updateMockServerResponseServerResponseHeadersRequest).optional(),
      language: updateMockServerResponseServerResponseLanguage.optional().nullable(),
      body: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      statusCode: data['statusCode'],
      headers: data['headers'],
      language: data['language'],
      body: data['body'],
    }));
});
