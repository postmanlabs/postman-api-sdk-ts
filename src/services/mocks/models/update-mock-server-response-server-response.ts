import { z } from 'zod';
import {
  MockServerResponseHeadersData,
  mockServerResponseHeadersData,
  mockServerResponseHeadersDataRequest,
  mockServerResponseHeadersDataResponse,
} from './mock-server-response-headers-data';

/**
 * Zod schema for the UpdateMockServerResponseServerResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateMockServerResponseServerResponse = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    statusCode: z.number().optional(),
    headers: z.array(mockServerResponseHeadersData).optional(),
    language: z.string().optional().nullable(),
    body: z.string().optional(),
  });
});

/**
 * The server response fields to update.
 * @typedef {UpdateMockServerResponseServerResponse} updateMockServerResponseServerResponse
 * @property {string} name - The server response's name.
 * @property {number} statusCode - The server response's 5xx HTTP response code. This property only accepts [5xx values](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml).
 * @property {MockServerResponseHeadersData[]} headers - The server response's request headers, such as Content-Type, Accept, encoding, and other information.
 * @property {MockServerResponseLanguage} language - The server response's body language type.
 * @property {string} body - The server response's body that returns when you call the mock server.
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
      headers: z.array(mockServerResponseHeadersDataResponse).optional(),
      language: z.string().optional().nullable(),
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
      headers: z.array(mockServerResponseHeadersDataRequest).optional(),
      language: z.string().optional().nullable(),
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
