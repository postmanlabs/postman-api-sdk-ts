import { z } from 'zod';
import {
  MockServerDelayData,
  mockServerDelayData,
  mockServerDelayDataRequest,
  mockServerDelayDataResponse,
} from './mock-server-delay-data';

/**
 * Zod schema for the MockServerConfigData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const mockServerConfigData = z.lazy(() => {
  return z.object({
    delay: mockServerDelayData.optional().nullable(),
    headers: z.array(z.string()).optional(),
    matchBody: z.boolean().optional(),
    matchHeader: z.boolean().optional(),
    matchQueryParams: z.boolean().optional(),
    matchWildcards: z.boolean().optional(),
    serverResponseId: z.string().optional().nullable(),
    additionalProperties: z.record(z.string(), z.unknown()).optional(),
  });
});

/**
 * Information about the mock server's configuration.
 * @typedef {MockServerConfigData} mockServerConfigData
 * @property {MockServerDelayData} delay - Information about the mock server's simulated network delay settings. This returns a null value if there are no configured network delay settings.
 * @property {string[]} headers - A list of the mock server's headers.
 * @property {boolean} matchBody - If true, match the request body.
 * @property {boolean} matchHeader - If true, match the request headers.
 * @property {boolean} matchQueryParams - If true, match query parameters.
 * @property {boolean} matchWildcards - If true, use wildcard variable matching.
 * @property {string} serverResponseId - The ID of mock server's default response for requests. All calls to the mock server will return the defined response.
 */
export type MockServerConfigData = z.infer<typeof mockServerConfigData>;

/**
 * Zod schema for mapping API responses to the MockServerConfigData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockServerConfigDataResponse = z.lazy(() => {
  return z
    .object({
      delay: mockServerDelayDataResponse.optional().nullable(),
      headers: z.array(z.string()).optional(),
      matchBody: z.boolean().optional(),
      matchHeader: z.boolean().optional(),
      matchQueryParams: z.boolean().optional(),
      matchWildcards: z.boolean().optional(),
      serverResponseId: z.string().optional().nullable(),
    })
    .passthrough()
    .transform((data) => {
      const additionalProperties: { [key: string]: unknown } = {};
      const declaredKeys = new Set<string>([
        'delay',
        'headers',
        'matchBody',
        'matchHeader',
        'matchQueryParams',
        'matchWildcards',
        'serverResponseId',
      ]);
      for (const key of globalThis.Object.keys(data)) {
        if (!declaredKeys.has(key)) {
          additionalProperties[key] = (data as { [key: string]: unknown })[key];
        }
      }
      return {
        delay: data['delay'],
        headers: data['headers'],
        matchBody: data['matchBody'],
        matchHeader: data['matchHeader'],
        matchQueryParams: data['matchQueryParams'],
        matchWildcards: data['matchWildcards'],
        serverResponseId: data['serverResponseId'],
        additionalProperties,
      };
    });
});

/**
 * Zod schema for mapping the MockServerConfigData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockServerConfigDataRequest = z.lazy(() => {
  return z
    .object({
      delay: mockServerDelayDataRequest.optional().nullable(),
      headers: z.array(z.string()).optional(),
      matchBody: z.boolean().optional(),
      matchHeader: z.boolean().optional(),
      matchQueryParams: z.boolean().optional(),
      matchWildcards: z.boolean().optional(),
      serverResponseId: z.string().optional().nullable(),
      additionalProperties: z.record(z.string(), z.unknown()).optional(),
    })
    .transform((data) => ({
      ...(data['additionalProperties'] ?? {}),
      delay: data['delay'],
      headers: data['headers'],
      matchBody: data['matchBody'],
      matchHeader: data['matchHeader'],
      matchQueryParams: data['matchQueryParams'],
      matchWildcards: data['matchWildcards'],
      serverResponseId: data['serverResponseId'],
    }));
});
