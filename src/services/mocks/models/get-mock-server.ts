import { z } from 'zod';
import {
  MockServerData,
  mockServerData,
  mockServerDataRequest,
  mockServerDataResponse,
} from './mock-server-data';

/**
 * Zod schema for the GetMockServer model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getMockServer = z.lazy(() => {
  return z.object({
    mock: mockServerData.optional(),
  });
});

/**
 * @typedef {GetMockServer} getMockServer
 * @property {MockServerData} mock - Information about the mock server.
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
      mock: mockServerDataResponse.optional(),
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
      mock: mockServerDataRequest.optional(),
    })
    .transform((data) => ({
      mock: data['mock'],
    }));
});
