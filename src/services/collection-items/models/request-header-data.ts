import { z } from 'zod';

/**
 * Zod schema for the RequestHeaderData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const requestHeaderData = z.lazy(() => {
  return z.object({
    key: z.string().optional(),
    value: z.string().optional(),
    description: z.string().optional(),
  });
});

/**
 * @typedef {RequestHeaderData} requestHeaderData
 * @property {string} key - The header's key.
 * @property {string} value - The header's value.
 * @property {string} description - The header's description.
 */
export type RequestHeaderData = z.infer<typeof requestHeaderData>;

/**
 * Zod schema for mapping API responses to the RequestHeaderData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestHeaderDataResponse = z.lazy(() => {
  return z
    .object({
      key: z.string().optional(),
      value: z.string().optional(),
      description: z.string().optional(),
    })
    .transform((data) => ({
      key: data['key'],
      value: data['value'],
      description: data['description'],
    }));
});

/**
 * Zod schema for mapping the RequestHeaderData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestHeaderDataRequest = z.lazy(() => {
  return z
    .object({
      key: z.string().optional(),
      value: z.string().optional(),
      description: z.string().optional(),
    })
    .transform((data) => ({
      key: data['key'],
      value: data['value'],
      description: data['description'],
    }));
});
