import { z } from 'zod';

/**
 * Zod schema for the SuccessfulResponseOperations model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseOperations = z.lazy(() => {
  return z.object({
    limit: z.number().optional(),
    name: z.string().optional(),
    overage: z.number().optional(),
    usage: z.number().optional(),
  });
});

/**
 *
 * @typedef  {SuccessfulResponseOperations} successfulResponseOperations
 * @property {number} - The operation's limit value.
 * @property {string} - The operation's name.
 * @property {number} - The operation's overage value.
 * @property {number} - The operation's current usage value.
 */
export type SuccessfulResponseOperations = z.infer<typeof successfulResponseOperations>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseOperations application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseOperationsResponse = z.lazy(() => {
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
 * Zod schema for mapping the SuccessfulResponseOperations application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseOperationsRequest = z.lazy(() => {
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
