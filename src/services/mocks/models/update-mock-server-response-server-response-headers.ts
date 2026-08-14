import { z } from 'zod';

/**
 * Zod schema for the UpdateMockServerResponseServerResponseHeaders model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateMockServerResponseServerResponseHeaders = z.lazy(() => {
  return z.object({
    key: z.string().optional(),
    value: z.string().optional(),
  });
});

/**
 * Information about the key-value pair.
 * @typedef {UpdateMockServerResponseServerResponseHeaders} updateMockServerResponseServerResponseHeaders
 * @property {string} key - The request header's key value.
 * @property {string} value - The request header's value. This value defines the corresponding value for the header key.
 */
export type UpdateMockServerResponseServerResponseHeaders = z.infer<
  typeof updateMockServerResponseServerResponseHeaders
>;

/**
 * Zod schema for mapping API responses to the UpdateMockServerResponseServerResponseHeaders application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateMockServerResponseServerResponseHeadersResponse = z.lazy(() => {
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
 * Zod schema for mapping the UpdateMockServerResponseServerResponseHeaders application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateMockServerResponseServerResponseHeadersRequest = z.lazy(() => {
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
