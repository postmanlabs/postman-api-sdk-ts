import { z } from 'zod';
import {
  MocksConfigDelay,
  mocksConfigDelay,
  mocksConfigDelayRequest,
  mocksConfigDelayResponse,
} from './mocks-config-delay';

/**
 * Zod schema for the MocksConfig model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const mocksConfig = z.lazy(() => {
  return z.object({
    delay: mocksConfigDelay.optional().nullable(),
    headers: z.array(z.string()).optional(),
    matchBody: z.boolean().optional(),
    matchQueryParams: z.boolean().optional(),
    matchWildcards: z.boolean().optional(),
    serverResponseId: z.string().optional(),
  });
});

/**
 * Information about the mock server's configuration.
 * @typedef {MocksConfig} mocksConfig
 * @property {MocksConfigDelay} delay - Information about the mock server's simulated network delay settings. This returns a null value if there are no configured network delay settings.
 * @property {string[]} headers - A list of the mock server's headers.
 * @property {boolean} matchBody - If true, match the request body.
 * @property {boolean} matchQueryParams - If true, match query parameters.
 * @property {boolean} matchWildcards - If true, use wildcard variable matching.
 * @property {string} serverResponseId - The ID of mock server's default response for requests. All calls to the mock server will return the defined response.
 */
export type MocksConfig = z.infer<typeof mocksConfig>;

/**
 * Zod schema for mapping API responses to the MocksConfig application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mocksConfigResponse = z.lazy(() => {
  return z
    .object({
      delay: mocksConfigDelayResponse.optional().nullable(),
      headers: z.array(z.string()).optional(),
      matchBody: z.boolean().optional(),
      matchQueryParams: z.boolean().optional(),
      matchWildcards: z.boolean().optional(),
      serverResponseId: z.string().optional(),
    })
    .transform((data) => ({
      delay: data['delay'],
      headers: data['headers'],
      matchBody: data['matchBody'],
      matchQueryParams: data['matchQueryParams'],
      matchWildcards: data['matchWildcards'],
      serverResponseId: data['serverResponseId'],
    }));
});

/**
 * Zod schema for mapping the MocksConfig application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mocksConfigRequest = z.lazy(() => {
  return z
    .object({
      delay: mocksConfigDelayRequest.optional().nullable(),
      headers: z.array(z.string()).optional(),
      matchBody: z.boolean().optional(),
      matchQueryParams: z.boolean().optional(),
      matchWildcards: z.boolean().optional(),
      serverResponseId: z.string().optional(),
    })
    .transform((data) => ({
      delay: data['delay'],
      headers: data['headers'],
      matchBody: data['matchBody'],
      matchQueryParams: data['matchQueryParams'],
      matchWildcards: data['matchWildcards'],
      serverResponseId: data['serverResponseId'],
    }));
});
