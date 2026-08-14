import { z } from 'zod';

/**
 * Zod schema for the RequestHeaders model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const requestHeaders = z.lazy(() => {
  return z.object({
    key: z.string().optional(),
    value: z.string().optional(),
  });
});

/**
 * The request's headers.
 * @typedef {RequestHeaders} requestHeaders
 * @property {string} key - The request header's name.
 * @property {string} value - The request header's value.
 */
export type RequestHeaders = z.infer<typeof requestHeaders>;

/**
 * Zod schema for mapping API responses to the RequestHeaders application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestHeadersResponse = z.lazy(() => {
  return z
    .object({
      key: z.string().optional(),
      value: z.string().optional(),
    })
    .transform((data) => ({
      key: data['key'],
      value: data['value'],
    }));
});

/**
 * Zod schema for mapping the RequestHeaders application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestHeadersRequest = z.lazy(() => {
  return z
    .object({
      key: z.string().optional(),
      value: z.string().optional(),
    })
    .transform((data) => ({
      key: data['key'],
      value: data['value'],
    }));
});
