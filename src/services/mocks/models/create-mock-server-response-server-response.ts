import { z } from 'zod';
import {
  CreateMockServerResponseServerResponseHeaders,
  createMockServerResponseServerResponseHeaders,
  createMockServerResponseServerResponseHeadersRequest,
  createMockServerResponseServerResponseHeadersResponse,
} from './create-mock-server-response-server-response-headers';
import {
  CreateMockServerResponseServerResponseLanguage,
  createMockServerResponseServerResponseLanguage,
} from './create-mock-server-response-server-response-language';

/**
 * Zod schema for the CreateMockServerResponseServerResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createMockServerResponseServerResponse = z.lazy(() => {
  return z.object({
    name: z.string(),
    statusCode: z.number(),
    headers: z.array(createMockServerResponseServerResponseHeaders).optional(),
    language: createMockServerResponseServerResponseLanguage.optional().nullable(),
    body: z.string().optional(),
  });
});

/**
 *
 * @typedef  {CreateMockServerResponseServerResponse} createMockServerResponseServerResponse
 * @property {string} - The server response's name.
 * @property {number} - The server response's 5xx HTTP response code. This property only accepts 5xx values.
 * @property {CreateMockServerResponseServerResponseHeaders[]} - The server response's request headers, such as Content-Type, Accept, encoding, and other information.
 * @property {CreateMockServerResponseServerResponseLanguage} - The server response's body language type.
 * @property {string} - The server response's body that returns when calling the mock server.
 */
export type CreateMockServerResponseServerResponse = z.infer<
  typeof createMockServerResponseServerResponse
>;

/**
 * Zod schema for mapping API responses to the CreateMockServerResponseServerResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createMockServerResponseServerResponseResponse = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      statusCode: z.number(),
      headers: z.array(createMockServerResponseServerResponseHeadersResponse).optional(),
      language: createMockServerResponseServerResponseLanguage.optional().nullable(),
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
 * Zod schema for mapping the CreateMockServerResponseServerResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createMockServerResponseServerResponseRequest = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      statusCode: z.number(),
      headers: z.array(createMockServerResponseServerResponseHeadersRequest).optional(),
      language: createMockServerResponseServerResponseLanguage.optional().nullable(),
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
