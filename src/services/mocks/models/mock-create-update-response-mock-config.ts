import { z } from 'zod';
import {
  MockCreateUpdateResponseMockConfigDelay,
  mockCreateUpdateResponseMockConfigDelay,
  mockCreateUpdateResponseMockConfigDelayRequest,
  mockCreateUpdateResponseMockConfigDelayResponse,
} from './mock-create-update-response-mock-config-delay';

/**
 * Zod schema for the MockCreateUpdateResponseMockConfig model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const mockCreateUpdateResponseMockConfig = z.lazy(() => {
  return z.object({
    matchBody: z.boolean().optional(),
    matchHeader: z.boolean().optional(),
    headers: z.array(z.string()).optional(),
    matchQueryParams: z.boolean().optional(),
    matchWildcards: z.boolean().optional(),
    delay: mockCreateUpdateResponseMockConfigDelay.optional().nullable(),
    serverResponseId: z.string().optional().nullable(),
    additionalProperties: z.record(z.string(), z.unknown()).optional(),
  });
});

/**
 * Information about the mock server's configuration.
 * @typedef {MockCreateUpdateResponseMockConfig} mockCreateUpdateResponseMockConfig
 * @property {boolean} matchBody - If true, the mock server matches the request's body to the body of the saved examples.
 * @property {boolean} matchHeader - If true, the mock server matches the request's headers in the `header` array to the headers of the saved examples.
 * @property {string[]} headers - A list of header key values.
 * @property {boolean} matchQueryParams - If true, match query parameters to the saved examples.
 * @property {boolean} matchWildcards - If true, use wildcard variable matching.
 * @property {MockCreateUpdateResponseMockConfigDelay} delay - Information about the mock server's simulated network delay settings. This returns a null value if there are no configured network delay settings.
 * @property {string} serverResponseId - The ID of mock server's default response for requests. All calls to the mock server will return the defined response.
 */
export type MockCreateUpdateResponseMockConfig = z.infer<typeof mockCreateUpdateResponseMockConfig>;

/**
 * Zod schema for mapping API responses to the MockCreateUpdateResponseMockConfig application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockCreateUpdateResponseMockConfigResponse = z.lazy(() => {
  return z
    .object({
      matchBody: z.boolean().optional(),
      matchHeader: z.boolean().optional(),
      headers: z.array(z.string()).optional(),
      matchQueryParams: z.boolean().optional(),
      matchWildcards: z.boolean().optional(),
      delay: mockCreateUpdateResponseMockConfigDelayResponse.optional().nullable(),
      serverResponseId: z.string().optional().nullable(),
    })
    .passthrough()
    .transform((data) => {
      const additionalProperties: { [key: string]: unknown } = {};
      const declaredKeys = new Set<string>([
        'matchBody',
        'matchHeader',
        'headers',
        'matchQueryParams',
        'matchWildcards',
        'delay',
        'serverResponseId',
      ]);
      for (const key of globalThis.Object.keys(data)) {
        if (!declaredKeys.has(key)) {
          additionalProperties[key] = (data as { [key: string]: unknown })[key];
        }
      }
      return {
        matchBody: data['matchBody'],
        matchHeader: data['matchHeader'],
        headers: data['headers'],
        matchQueryParams: data['matchQueryParams'],
        matchWildcards: data['matchWildcards'],
        delay: data['delay'],
        serverResponseId: data['serverResponseId'],
        additionalProperties,
      };
    });
});

/**
 * Zod schema for mapping the MockCreateUpdateResponseMockConfig application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockCreateUpdateResponseMockConfigRequest = z.lazy(() => {
  return z
    .object({
      matchBody: z.boolean().optional(),
      matchHeader: z.boolean().optional(),
      headers: z.array(z.string()).optional(),
      matchQueryParams: z.boolean().optional(),
      matchWildcards: z.boolean().optional(),
      delay: mockCreateUpdateResponseMockConfigDelayRequest.optional().nullable(),
      serverResponseId: z.string().optional().nullable(),
      additionalProperties: z.record(z.string(), z.unknown()).optional(),
    })
    .transform((data) => ({
      ...(data['additionalProperties'] ?? {}),
      matchBody: data['matchBody'],
      matchHeader: data['matchHeader'],
      headers: data['headers'],
      matchQueryParams: data['matchQueryParams'],
      matchWildcards: data['matchWildcards'],
      delay: data['delay'],
      serverResponseId: data['serverResponseId'],
    }));
});
