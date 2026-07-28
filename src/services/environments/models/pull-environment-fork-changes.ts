import { z } from 'zod';

/**
 * Zod schema for the PullEnvironmentForkChanges model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const pullEnvironmentForkChanges = z.lazy(() => {
  return z.object({
    source: z.string(),
  });
});

/**
 *
 * @typedef  {PullEnvironmentForkChanges} pullEnvironmentForkChanges
 * @property {string} - The source environment's unique ID to pull data from.
 */
export type PullEnvironmentForkChanges = z.infer<typeof pullEnvironmentForkChanges>;

/**
 * Zod schema for mapping API responses to the PullEnvironmentForkChanges application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pullEnvironmentForkChangesResponse = z.lazy(() => {
  return z
    .object({
      source: z.string(),
    })
    .transform((data) => ({
      source: data['source'],
    }));
});

/**
 * Zod schema for mapping the PullEnvironmentForkChanges application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pullEnvironmentForkChangesRequest = z.lazy(() => {
  return z
    .object({
      source: z.string(),
    })
    .transform((data) => ({
      source: data['source'],
    }));
});
