import { z } from 'zod';

/**
 * Zod schema for the RequestData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const requestData = z.lazy(() => {
  return z.object({
    key: z.string().optional(),
    value: z.string().optional(),
    description: z.string().optional(),
    enabled: z.boolean().optional(),
    type: z.string().optional(),
    uuid: z.string().optional(),
  });
});

/**
 * @typedef {RequestData} requestData
 * @property {string} key - The form data's key.
 * @property {string} value - The form data's value.
 * @property {string} description - The form data's description.
 * @property {boolean} enabled - If true, the form data entry is enabled.
 * @property {RequestDataType} type - The form data's type.
 * @property {string} uuid - The form data entry's unique identifier.
 */
export type RequestData = z.infer<typeof requestData>;

/**
 * Zod schema for mapping API responses to the RequestData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestDataResponse = z.lazy(() => {
  return z
    .object({
      key: z.string().optional(),
      value: z.string().optional(),
      description: z.string().optional(),
      enabled: z.boolean().optional(),
      type: z.string().optional(),
      uuid: z.string().optional(),
    })
    .transform((data) => ({
      key: data['key'],
      value: data['value'],
      description: data['description'],
      enabled: data['enabled'],
      type: data['type'],
      uuid: data['uuid'],
    }));
});

/**
 * Zod schema for mapping the RequestData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestDataRequest = z.lazy(() => {
  return z
    .object({
      key: z.string().optional(),
      value: z.string().optional(),
      description: z.string().optional(),
      enabled: z.boolean().optional(),
      type: z.string().optional(),
      uuid: z.string().optional(),
    })
    .transform((data) => ({
      key: data['key'],
      value: data['value'],
      description: data['description'],
      enabled: data['enabled'],
      type: data['type'],
      uuid: data['uuid'],
    }));
});
