import { z } from 'zod';

/**
 * Zod schema for the MockServerDelayData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const mockServerDelayData = z.lazy(() => {
  return z.object({
    type: z.string().optional(),
    preset: z.string().optional(),
    duration: z.number().optional(),
  });
});

/**
 * Information about the mock server's simulated network delay settings. This returns a null value if there are no configured network delay settings.
 * @typedef {MockServerDelayData} mockServerDelayData
 * @property {MockServerDelayDataType} type - The `fixed` value.
 * @property {Preset} preset - The simulated fixed network delay value:
- `1` — 2G (300 ms).
- `2` — 3G (100 ms).
The object does not return this value for custom delay values.

 * @property {number} duration - For custom network delays, the custom configured delay, in milliseconds.
 */
export type MockServerDelayData = z.infer<typeof mockServerDelayData>;

/**
 * Zod schema for mapping API responses to the MockServerDelayData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockServerDelayDataResponse = z.lazy(() => {
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
 * Zod schema for mapping the MockServerDelayData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockServerDelayDataRequest = z.lazy(() => {
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
