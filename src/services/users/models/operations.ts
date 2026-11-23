import { z } from 'zod';

/**
 * Zod schema for the Operations model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const operations = z.lazy(() => {
  return z.object({
    limit: z.number().optional(),
    name: z.string().optional(),
    overage: z.number().optional(),
    usage: z.number().optional(),
  });
});

/**
 * @typedef {Operations} operations
 * @property {number} limit - The operation's limit value.
 * @property {string} name - The operation's name.
 * @property {number} overage - The operation's overage value.
 * @property {number} usage - The operation's current usage value.
 */
export type Operations = z.infer<typeof operations>;

/**
 * Zod schema for mapping API responses to the Operations application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const operationsResponse = z.lazy(() => {
  return z
    .object({
      limit: z.number().optional(),
      name: z.string().optional(),
      overage: z.number().optional(),
      usage: z.number().optional(),
    })
    .transform((data) => ({
      limit: data['limit'],
      name: data['name'],
      overage: data['overage'],
      usage: data['usage'],
    }));
});

/**
 * Zod schema for mapping the Operations application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const operationsRequest = z.lazy(() => {
  return z
    .object({
      limit: z.number().optional(),
      name: z.string().optional(),
      overage: z.number().optional(),
      usage: z.number().optional(),
    })
    .transform((data) => ({
      limit: data['limit'],
      name: data['name'],
      overage: data['overage'],
      usage: data['usage'],
    }));
});
