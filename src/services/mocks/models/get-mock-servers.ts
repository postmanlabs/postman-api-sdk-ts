import { z } from 'zod';
import {
  MockServerData,
  mockServerData,
  mockServerDataRequest,
  mockServerDataResponse,
} from './mock-server-data';

/**
 * Zod schema for the GetMockServers model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getMockServers = z.lazy(() => {
  return z.object({
    mocks: z.array(mockServerData).optional(),
  });
});

/**
 * @typedef {GetMockServers} getMockServers
 * @property {MockServerData[]} mocks - A list of mock servers.
 */
export type GetMockServers = z.infer<typeof getMockServers>;

/**
 * Zod schema for mapping API responses to the GetMockServers application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getMockServersResponse = z.lazy(() => {
  return z
    .object({
      mocks: z.array(mockServerDataResponse).optional(),
    })
    .transform((data) => ({
      mocks: data['mocks'],
    }));
});

/**
 * Zod schema for mapping the GetMockServers application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getMockServersRequest = z.lazy(() => {
  return z
    .object({
      mocks: z.array(mockServerDataRequest).optional(),
    })
    .transform((data) => ({
      mocks: data['mocks'],
    }));
});
