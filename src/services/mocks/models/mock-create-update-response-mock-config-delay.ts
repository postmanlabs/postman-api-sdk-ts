import { z } from 'zod';
import {
  MockCreateUpdateResponseMockConfigDelayType,
  mockCreateUpdateResponseMockConfigDelayType,
} from './mock-create-update-response-mock-config-delay-type';
import {
  MockCreateUpdateResponseMockConfigDelayPreset,
  mockCreateUpdateResponseMockConfigDelayPreset,
} from './mock-create-update-response-mock-config-delay-preset';

/**
 * Zod schema for the MockCreateUpdateResponseMockConfigDelay model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const mockCreateUpdateResponseMockConfigDelay = z.lazy(() => {
  return z.object({
    type: mockCreateUpdateResponseMockConfigDelayType.optional(),
    duration: z.number().optional(),
    preset: mockCreateUpdateResponseMockConfigDelayPreset.optional(),
  });
});

/**
 * Information about the mock server's simulated network delay settings. This returns a null value if there are no configured network delay settings.
 * @typedef  {MockCreateUpdateResponseMockConfigDelay} mockCreateUpdateResponseMockConfigDelay - Information about the mock server's simulated network delay settings. This returns a null value if there are no configured network delay settings. - Information about the mock server's simulated network delay settings. This returns a null value if there are no configured network delay settings.
 * @property {MockCreateUpdateResponseMockConfigDelayType} - The `fixed` value.
 * @property {number} - For custom network delays, the custom configured delay, in milliseconds.
 * @property {MockCreateUpdateResponseMockConfigDelayPreset} - The simulated fixed network delay value:
- `1` — 2G (300 ms).
- `2` — 3G (100 ms).
The object does not return this value for custom delay values.

 */
export type MockCreateUpdateResponseMockConfigDelay = z.infer<
  typeof mockCreateUpdateResponseMockConfigDelay
>;

/**
 * Zod schema for mapping API responses to the MockCreateUpdateResponseMockConfigDelay application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockCreateUpdateResponseMockConfigDelayResponse = z.lazy(() => {
  return z
    .object({
      type: mockCreateUpdateResponseMockConfigDelayType.optional(),
      duration: z.number().optional(),
      preset: mockCreateUpdateResponseMockConfigDelayPreset.optional(),
    })
    .transform((data) => ({
      type: data['type'],
      duration: data['duration'],
      preset: data['preset'],
    }));
});

/**
 * Zod schema for mapping the MockCreateUpdateResponseMockConfigDelay application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockCreateUpdateResponseMockConfigDelayRequest = z.lazy(() => {
  return z
    .object({
      type: mockCreateUpdateResponseMockConfigDelayType.optional(),
      duration: z.number().optional(),
      preset: mockCreateUpdateResponseMockConfigDelayPreset.optional(),
    })
    .transform((data) => ({
      type: data['type'],
      duration: data['duration'],
      preset: data['preset'],
    }));
});
