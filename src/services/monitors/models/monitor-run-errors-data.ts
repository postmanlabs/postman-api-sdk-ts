import { z } from 'zod';

/**
 * Zod schema for the MonitorRunErrorsData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorRunErrorsData = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    message: z.string().optional(),
    additionalProperties: z.record(z.string(), z.unknown()).optional(),
  });
});

/**
 * @typedef {MonitorRunErrorsData} monitorRunErrorsData
 * @property {string} name - The error name.
 * @property {string} message - The error message.
 */
export type MonitorRunErrorsData = z.infer<typeof monitorRunErrorsData>;

/**
 * Zod schema for mapping API responses to the MonitorRunErrorsData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRunErrorsDataResponse = z.lazy(() => {
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
 * Zod schema for mapping the MonitorRunErrorsData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRunErrorsDataRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      message: z.string().optional(),
      additionalProperties: z.record(z.string(), z.unknown()).optional(),
    })
    .transform((data) => ({
      ...(data['additionalProperties'] ?? {}),
      name: data['name'],
      message: data['message'],
    }));
});
