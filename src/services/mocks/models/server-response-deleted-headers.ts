import { z } from 'zod';

/**
 * Zod schema for the ServerResponseDeletedHeaders model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverResponseDeletedHeaders = z.lazy(() => {
  return z.object({
    key: z.string().optional(),
    value: z.string().optional(),
  });
});

/**
 *
 * @typedef  {ServerResponseDeletedHeaders} serverResponseDeletedHeaders
 * @property {string} - The request header's key value.
 * @property {string} - The request header's value.
 */
export type ServerResponseDeletedHeaders = z.infer<typeof serverResponseDeletedHeaders>;

/**
 * Zod schema for mapping API responses to the ServerResponseDeletedHeaders application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverResponseDeletedHeadersResponse = z.lazy(() => {
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
 * Zod schema for mapping the ServerResponseDeletedHeaders application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverResponseDeletedHeadersRequest = z.lazy(() => {
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
