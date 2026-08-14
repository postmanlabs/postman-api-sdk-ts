import { z } from 'zod';
import {
  GetMockServerMock,
  getMockServerMock,
  getMockServerMockRequest,
  getMockServerMockResponse,
} from './get-mock-server-mock';

/**
 * Zod schema for the GetMockServer model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getMockServer = z.lazy(() => {
  return z.object({
    mock: getMockServerMock.optional(),
  });
});

/**
 * @typedef {GetMockServer} getMockServer
 * @property {GetMockServerMock} mock - Information about the mock server.
 */
export type GetMockServer = z.infer<typeof getMockServer>;

/**
 * Zod schema for mapping API responses to the GetMockServer application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getMockServerResponse = z.lazy(() => {
  return z
    .object({
      mock: getMockServerMockResponse.optional(),
    })
    .transform((data) => ({
      mock: data['mock'],
    }));
});

/**
 * Zod schema for mapping the GetMockServer application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getMockServerRequest = z.lazy(() => {
  return z
    .object({
      mock: getMockServerMockRequest.optional(),
    })
    .transform((data) => ({
      mock: data['mock'],
    }));
});
