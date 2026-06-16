import { z } from 'zod';

/**
 * Zod schema for the MonitorRunErrors model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorRunErrors = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    message: z.string().optional(),
    additionalProperties: z.record(z.unknown()).optional(),
  });
});

/**
 *
 * @typedef  {MonitorRunErrors} monitorRunErrors
 * @property {string} - The error name.
 * @property {string} - The error message.
 */
export type MonitorRunErrors = z.infer<typeof monitorRunErrors>;

/**
 * Zod schema for mapping API responses to the MonitorRunErrors application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRunErrorsResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      message: z.string().optional(),
    })
    .passthrough()
    .transform((data) => {
      const additionalProperties: { [key: string]: unknown } = {};
      const declaredKeys = new Set<string>(['name', 'message']);
      for (const key of globalThis.Object.keys(data)) {
        if (!declaredKeys.has(key)) {
          additionalProperties[key] = (data as { [key: string]: unknown })[key];
        }
      }
      return {
        name: data['name'],
        message: data['message'],
        additionalProperties,
      };
    });
});

/**
 * Zod schema for mapping the MonitorRunErrors application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRunErrorsRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      message: z.string().optional(),
      additionalProperties: z.record(z.unknown()).optional(),
    })
    .transform((data) => ({
      ...(data['additionalProperties'] ?? {}),
      name: data['name'],
      message: data['message'],
    }));
});
