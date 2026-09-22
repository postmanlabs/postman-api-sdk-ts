import { z } from 'zod';

/**
 * Zod schema for the MockServerResponseBodyData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const mockServerResponseBodyData = z.lazy(() => {
  return z.object({
    data: z.string().optional(),
  });
});

/**
 * The response's body information.
 * @typedef {MockServerResponseBodyData} mockServerResponseBodyData
 * @property {string} data - The response body's contents.
 */
export type MockServerResponseBodyData = z.infer<typeof mockServerResponseBodyData>;

/**
 * Zod schema for mapping API responses to the MockServerResponseBodyData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockServerResponseBodyDataResponse = z.lazy(() => {
  return z
    .object({
      data: z.string().optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the MockServerResponseBodyData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mockServerResponseBodyDataRequest = z.lazy(() => {
  return z
    .object({
      data: z.string().optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});
