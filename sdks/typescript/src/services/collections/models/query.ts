import { z } from 'zod';

/**
 * Zod schema for the Query model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const query = z.lazy(() => {
  return z.object({
    key: z.string().optional().nullable(),
    value: z.string().optional().nullable(),
    disabled: z.boolean().optional(),
    description: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {Query} query
 * @property {string} - The query parameter's key.
 * @property {string} - The key's value.
 * @property {boolean} - If true, the query parameter isn't sent with the request.
 * @property {string} - The query parameter's description.
 */
export type Query = z.infer<typeof query>;

/**
 * Zod schema for mapping API responses to the Query application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const queryResponse = z.lazy(() => {
  return z
    .object({
      key: z.string().optional().nullable(),
      value: z.string().optional().nullable(),
      disabled: z.boolean().optional(),
      description: z.string().optional().nullable(),
    })
    .transform((data) => ({
      key: data['key'],
      value: data['value'],
      disabled: data['disabled'],
      description: data['description'],
    }));
});

/**
 * Zod schema for mapping the Query application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const queryRequest = z.lazy(() => {
  return z
    .object({
      key: z.string().optional().nullable(),
      value: z.string().optional().nullable(),
      disabled: z.boolean().optional(),
      description: z.string().optional().nullable(),
    })
    .transform((data) => ({
      key: data['key'],
      value: data['value'],
      disabled: data['disabled'],
      description: data['description'],
    }));
});
