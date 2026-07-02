import { z } from 'zod';
import {
  ServerResponseDeletedHeaders,
  serverResponseDeletedHeaders,
  serverResponseDeletedHeadersRequest,
  serverResponseDeletedHeadersResponse,
} from './server-response-deleted-headers';

/**
 * Zod schema for the ServerResponseDeleted model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverResponseDeleted = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    statusCode: z.number().optional(),
    headers: z.array(serverResponseDeletedHeaders).optional(),
    language: z.string().optional().nullable(),
    body: z.string().optional(),
    createdBy: z.string().optional(),
    updatedBy: z.string().optional(),
    createdAt: z.string().optional(),
  });
});

/**
 * Information about the deleted server response.
 * @typedef  {ServerResponseDeleted} serverResponseDeleted - Information about the deleted server response. - Information about the deleted server response.
 * @property {string} - The server response's ID.
 * @property {string} - The server response's name.
 * @property {number} - The server response's 5xx HTTP response code.
 * @property {ServerResponseDeletedHeaders[]} - The server response's request headers, such as Content-Type, Accept, encoding, and other information.
 * @property {ServerResponseDeletedLanguage} - The server response's body language type.
 * @property {string} - The server response's body that returns when calling the mock server.
 * @property {string} - The user ID of the user who created the server response.
 * @property {string} - The user ID of the user who last updated the server response.
 * @property {string} - The date and time at which the server response was created.
 */
export type ServerResponseDeleted = z.infer<typeof serverResponseDeleted>;

/**
 * Zod schema for mapping API responses to the ServerResponseDeleted application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverResponseDeletedResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      statusCode: z.number().optional(),
      headers: z.array(serverResponseDeletedHeadersResponse).optional(),
      language: z.string().optional().nullable(),
      body: z.string().optional(),
      createdBy: z.string().optional(),
      updatedBy: z.string().optional(),
      createdAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      statusCode: data['statusCode'],
      headers: data['headers'],
      language: data['language'],
      body: data['body'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
    }));
});

/**
 * Zod schema for mapping the ServerResponseDeleted application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverResponseDeletedRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      statusCode: z.number().optional(),
      headers: z.array(serverResponseDeletedHeadersRequest).optional(),
      language: z.string().optional().nullable(),
      body: z.string().optional(),
      createdBy: z.string().optional(),
      updatedBy: z.string().optional(),
      createdAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      statusCode: data['statusCode'],
      headers: data['headers'],
      language: data['language'],
      body: data['body'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
    }));
});
