import { z } from 'zod';

/**
 * Zod schema for the GetMockServerMockConfigDelay model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getMockServerMockConfigDelay = z.lazy(() => {
  return z.object({
    type: z.string().optional(),
    preset: z.string().optional(),
    duration: z.number().optional(),
  });
});

/**
 * Information about the mock server's simulated network delay settings. This returns a null value if there are no configured network delay settings.
 * @typedef {GetMockServerMockConfigDelay} getMockServerMockConfigDelay
 * @property {GetMockServerMockConfigDelayType} type - The type of simulated delay value:
- `fixed` — The delay value is a fixed value.

 * @property {GetMockServerMockConfigDelayPreset} preset - The simulated fixed network delay value:
- `1` — 2G (300 ms).
- `2` — 3G (100 ms).
The object does not return this value for custom delay values.

 * @property {number} duration - The configured delay, in milliseconds.
 */
export type GetMockServerMockConfigDelay = z.infer<typeof getMockServerMockConfigDelay>;

/**
 * Zod schema for mapping API responses to the GetMockServerMockConfigDelay application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getMockServerMockConfigDelayResponse = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      preset: z.string().optional(),
      duration: z.number().optional(),
    })
    .transform((data) => ({
      type: data['type'],
      preset: data['preset'],
      duration: data['duration'],
    }));
});

/**
 * Zod schema for mapping the GetMockServerMockConfigDelay application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getMockServerMockConfigDelayRequest = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      preset: z.string().optional(),
      duration: z.number().optional(),
    })
    .transform((data) => ({
      type: data['type'],
      preset: data['preset'],
      duration: data['duration'],
    }));
});
