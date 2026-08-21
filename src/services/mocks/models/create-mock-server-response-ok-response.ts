import { z } from 'zod';
import {
  SuccessfulResponseHeaders,
  successfulResponseHeaders,
  successfulResponseHeadersRequest,
  successfulResponseHeadersResponse,
} from './successful-response-headers';

/**
 * Zod schema for the CreateMockServerResponseOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createMockServerResponseOkResponse = z.lazy(() => {
  return z.object({
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    id: z.string().optional(),
    name: z.string().optional(),
    statusCode: z.number().optional(),
    headers: z.array(successfulResponseHeaders).optional(),
    language: z.string().optional().nullable(),
    body: z.string().optional(),
    createdBy: z.string().optional(),
    updatedBy: z.string().optional(),
    mock: z.string().optional(),
    additionalProperties: z.record(z.unknown()).optional(),
  });
});

/**
 * Information about the mock server's response.
 * @typedef {CreateMockServerResponseOkResponse} createMockServerResponseOkResponse
 * @property {string} createdAt - The date and time at which the server response was created.
 * @property {string} updatedAt - The date and time at which the server response was last updated.
 * @property {string} id - The server response's ID.
 * @property {string} name - The server response's name.
 * @property {number} statusCode - The server response's 5xx HTTP response code.
 * @property {SuccessfulResponseHeaders[]} headers - The server response's request headers key-value pairs, such as Content-Type, Accept, encoding, and other information.
 * @property {string} language - The server response's body language type.
 * @property {string} body - The server response's body that returns when calling the mock server.
 * @property {string} createdBy - The user ID of the user who created the server response.
 * @property {string} updatedBy - The user ID of the user who last updated the server response.
 * @property {string} mock - The associated mock server's ID.
 */
export type CreateMockServerResponseOkResponse = z.infer<typeof createMockServerResponseOkResponse>;

/**
 * Zod schema for mapping API responses to the CreateMockServerResponseOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createMockServerResponseOkResponseResponse = z.lazy(() => {
  return z
    .object({
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      id: z.string().optional(),
      name: z.string().optional(),
      statusCode: z.number().optional(),
      headers: z.array(successfulResponseHeadersResponse).optional(),
      language: z.string().optional().nullable(),
      body: z.string().optional(),
      createdBy: z.string().optional(),
      updatedBy: z.string().optional(),
      mock: z.string().optional(),
    })
    .passthrough()
    .transform((data) => {
      const additionalProperties: { [key: string]: unknown } = {};
      const declaredKeys = new Set<string>([
        'createdAt',
        'updatedAt',
        'id',
        'name',
        'statusCode',
        'headers',
        'language',
        'body',
        'createdBy',
        'updatedBy',
        'mock',
      ]);
      for (const key of globalThis.Object.keys(data)) {
        if (!declaredKeys.has(key)) {
          additionalProperties[key] = (data as { [key: string]: unknown })[key];
        }
      }
      return {
        createdAt: data['createdAt'],
        updatedAt: data['updatedAt'],
        id: data['id'],
        name: data['name'],
        statusCode: data['statusCode'],
        headers: data['headers'],
        language: data['language'],
        body: data['body'],
        createdBy: data['createdBy'],
        updatedBy: data['updatedBy'],
        mock: data['mock'],
        additionalProperties,
      };
    });
});

/**
 * Zod schema for mapping the CreateMockServerResponseOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createMockServerResponseOkResponseRequest = z.lazy(() => {
  return z
    .object({
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      id: z.string().optional(),
      name: z.string().optional(),
      statusCode: z.number().optional(),
      headers: z.array(successfulResponseHeadersRequest).optional(),
      language: z.string().optional().nullable(),
      body: z.string().optional(),
      createdBy: z.string().optional(),
      updatedBy: z.string().optional(),
      mock: z.string().optional(),
      additionalProperties: z.record(z.unknown()).optional(),
    })
    .transform((data) => ({
      ...(data['additionalProperties'] ?? {}),
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      id: data['id'],
      name: data['name'],
      statusCode: data['statusCode'],
      headers: data['headers'],
      language: data['language'],
      body: data['body'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      mock: data['mock'],
    }));
});
