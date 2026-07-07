import { z } from 'zod';

/**
 * Zod schema for the Assertions model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const assertions = z.lazy(() => {
  return z.object({
    total: z.number().optional(),
    failed: z.number().optional(),
  });
});

/**
 * Information about the monitor's tests.
 * @typedef  {Assertions} assertions - Information about the monitor's tests. - Information about the monitor's tests.
 * @property {number} - The total number of tests performed.
 * @property {number} - The total number of test failures.
 */
export type Assertions = z.infer<typeof assertions>;

/**
 * Zod schema for mapping API responses to the Assertions application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const assertionsResponse = z.lazy(() => {
  return z
    .object({
      total: z.number().optional(),
      failed: z.number().optional(),
    })
    .transform((data) => ({
      total: data['total'],
      failed: data['failed'],
    }));
});

/**
 * Zod schema for mapping the Assertions application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const assertionsRequest = z.lazy(() => {
  return z
    .object({
      total: z.number().optional(),
      failed: z.number().optional(),
    })
    .transform((data) => ({
      total: data['total'],
      failed: data['failed'],
    }));
});
