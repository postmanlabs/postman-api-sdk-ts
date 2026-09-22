import { z } from 'zod';
import {
  MockCallLogRequestData,
  mockCallLogRequestData,
  mockCallLogRequestDataRequest,
  mockCallLogRequestDataResponse,
} from './mock-call-log-request-data';
import {
  MockCallLogResponseData,
  mockCallLogResponseData,
  mockCallLogResponseDataRequest,
  mockCallLogResponseDataResponse,
} from './mock-call-log-response-data';

/**
 * Zod schema for the MockCallLogData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const mockCallLogData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    responseName: z.string().optional(),
    servedAt: z.string().optional(),
    request: mockCallLogRequestData.optional(),
    response: mockCallLogResponseData.optional(),
  });
});

/**
 * Information about the mock server's server response.
 * @typedef {MockCallLogData} mockCallLogData
 * @property {string} id - The server response's ID.
 * @property {string} responseName - The server response's name.
 * @property {string} servedAt - The date and time at which the server response was served.
 * @property {MockCallLogRequestData} request - The server response's request information.
 * @property {MockCallLogResponseData} response - The server response's response information.
 */
export type MockCallLogData = z.infer<typeof mockCallLogData>;

/**
 * Zod schema for mapping API responses to the MockCallLogData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockCallLogDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      responseName: z.string().optional(),
      servedAt: z.string().optional(),
      request: mockCallLogRequestDataResponse.optional(),
      response: mockCallLogResponseDataResponse.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      responseName: data['responseName'],
      servedAt: data['servedAt'],
      request: data['request'],
      response: data['response'],
    }));
});

/**
 * Zod schema for mapping the MockCallLogData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockCallLogDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      responseName: z.string().optional(),
      servedAt: z.string().optional(),
      request: mockCallLogRequestDataRequest.optional(),
      response: mockCallLogResponseDataRequest.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      responseName: data['responseName'],
      servedAt: data['servedAt'],
      request: data['request'],
      response: data['response'],
    }));
});
