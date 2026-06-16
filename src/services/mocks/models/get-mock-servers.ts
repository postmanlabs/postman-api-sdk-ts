import { z } from 'zod';
import {
  GetMockServersMocks,
  getMockServersMocks,
  getMockServersMocksRequest,
  getMockServersMocksResponse,
} from './get-mock-servers-mocks';

/**
 * Zod schema for the GetMockServers model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getMockServers = z.lazy(() => {
  return z.object({
    mocks: z.array(getMockServersMocks).optional(),
  });
});

/**
 *
 * @typedef  {GetMockServers} getMockServers
 * @property {GetMockServersMocks[]} - A list of mock servers.
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
      mocks: z.array(getMockServersMocksResponse).optional(),
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
      mocks: z.array(getMockServersMocksRequest).optional(),
    })
    .transform((data) => ({
      mocks: data['mocks'],
    }));
});
