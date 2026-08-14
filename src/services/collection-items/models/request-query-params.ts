import { z } from 'zod';

/**
 * Zod schema for the RequestQueryParams model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const requestQueryParams = z.lazy(() => {
  return z.object({
    key: z.string().optional(),
    value: z.string().optional(),
    description: z.string().optional(),
    enabled: z.boolean().optional(),
  });
});

/**
 * @typedef {RequestQueryParams} requestQueryParams
 * @property {string} key - The query parameter's key.
 * @property {string} value - The query parameter's value.
 * @property {string} description - The query parameter's description.
 * @property {boolean} enabled - If true, the query parameter is enabled.
 */
export type RequestQueryParams = z.infer<typeof requestQueryParams>;

/**
 * Zod schema for mapping API responses to the RequestQueryParams application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestQueryParamsResponse = z.lazy(() => {
  return z
    .object({
      key: z.string().optional(),
      value: z.string().optional(),
      description: z.string().optional(),
      enabled: z.boolean().optional(),
    })
    .transform((data) => ({
      key: data['key'],
      value: data['value'],
      description: data['description'],
      enabled: data['enabled'],
    }));
});

/**
 * Zod schema for mapping the RequestQueryParams application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestQueryParamsRequest = z.lazy(() => {
  return z
    .object({
      key: z.string().optional(),
      value: z.string().optional(),
      description: z.string().optional(),
      enabled: z.boolean().optional(),
    })
    .transform((data) => ({
      key: data['key'],
      value: data['value'],
      description: data['description'],
      enabled: data['enabled'],
    }));
});
