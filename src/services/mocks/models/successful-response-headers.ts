import { z } from 'zod';

/**
 * Zod schema for the SuccessfulResponseHeaders model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseHeaders = z.lazy(() => {
  return z.object({
    key: z.string().optional(),
    value: z.string().optional(),
  });
});

/**
 *
 * @typedef  {SuccessfulResponseHeaders} successfulResponseHeaders
 * @property {string} - The request header's key value.
 * @property {string} - The request header's value.
 */
export type SuccessfulResponseHeaders = z.infer<typeof successfulResponseHeaders>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseHeaders application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseHeadersResponse = z.lazy(() => {
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
 * Zod schema for mapping the SuccessfulResponseHeaders application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseHeadersRequest = z.lazy(() => {
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
