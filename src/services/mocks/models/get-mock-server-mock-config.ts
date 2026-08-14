import { z } from 'zod';
import {
  GetMockServerMockConfigDelay,
  getMockServerMockConfigDelay,
  getMockServerMockConfigDelayRequest,
  getMockServerMockConfigDelayResponse,
} from './get-mock-server-mock-config-delay';

/**
 * Zod schema for the GetMockServerMockConfig model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getMockServerMockConfig = z.lazy(() => {
  return z.object({
    headers: z.array(z.string()).optional(),
    matchBody: z.boolean().optional(),
    matchQueryParams: z.boolean().optional(),
    matchWildcards: z.boolean().optional(),
    delay: getMockServerMockConfigDelay.optional().nullable(),
    serverResponseId: z.string().optional().nullable(),
  });
});

/**
 * Information about the mock server's configuration.
 * @typedef {GetMockServerMockConfig} getMockServerMockConfig
 * @property {string[]} headers - A list of the mock server's headers.
 * @property {boolean} matchBody - If true, match the request body.
 * @property {boolean} matchQueryParams - If true, match query parameters.
 * @property {boolean} matchWildcards - If true, use wildcard variable matching.
 * @property {GetMockServerMockConfigDelay} delay - Information about the mock server's simulated network delay settings. This returns a null value if there are no configured network delay settings.
 * @property {string} serverResponseId - The ID of mock server's default response for requests. All calls to the mock server will return the defined response.
 */
export type GetMockServerMockConfig = z.infer<typeof getMockServerMockConfig>;

/**
 * Zod schema for mapping API responses to the GetMockServerMockConfig application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getMockServerMockConfigResponse = z.lazy(() => {
  return z
    .object({
      headers: z.array(z.string()).optional(),
      matchBody: z.boolean().optional(),
      matchQueryParams: z.boolean().optional(),
      matchWildcards: z.boolean().optional(),
      delay: getMockServerMockConfigDelayResponse.optional().nullable(),
      serverResponseId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      headers: data['headers'],
      matchBody: data['matchBody'],
      matchQueryParams: data['matchQueryParams'],
      matchWildcards: data['matchWildcards'],
      delay: data['delay'],
      serverResponseId: data['serverResponseId'],
    }));
});

/**
 * Zod schema for mapping the GetMockServerMockConfig application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getMockServerMockConfigRequest = z.lazy(() => {
  return z
    .object({
      headers: z.array(z.string()).optional(),
      matchBody: z.boolean().optional(),
      matchQueryParams: z.boolean().optional(),
      matchWildcards: z.boolean().optional(),
      delay: getMockServerMockConfigDelayRequest.optional().nullable(),
      serverResponseId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      headers: data['headers'],
      matchBody: data['matchBody'],
      matchQueryParams: data['matchQueryParams'],
      matchWildcards: data['matchWildcards'],
      delay: data['delay'],
      serverResponseId: data['serverResponseId'],
    }));
});
