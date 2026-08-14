import { z } from 'zod';

/**
 * Zod schema for the CreateMockServerResponseServerResponseHeaders model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createMockServerResponseServerResponseHeaders = z.lazy(() => {
  return z.object({
    key: z.string().optional(),
    value: z.string().optional(),
  });
});

/**
 * @typedef {CreateMockServerResponseServerResponseHeaders} createMockServerResponseServerResponseHeaders
 * @property {string} key - The request header's key value.
 * @property {string} value - The request header's value.
 */
export type CreateMockServerResponseServerResponseHeaders = z.infer<
  typeof createMockServerResponseServerResponseHeaders
>;

/**
 * Zod schema for mapping API responses to the CreateMockServerResponseServerResponseHeaders application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createMockServerResponseServerResponseHeadersResponse = z.lazy(() => {
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
 * Zod schema for mapping the CreateMockServerResponseServerResponseHeaders application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createMockServerResponseServerResponseHeadersRequest = z.lazy(() => {
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
