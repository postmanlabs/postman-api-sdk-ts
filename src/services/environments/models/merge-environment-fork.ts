import { z } from 'zod';

/**
 * Zod schema for the MergeEnvironmentFork model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const mergeEnvironmentFork = z.lazy(() => {
  return z.object({
    source: z.string(),
    deleteSource: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {MergeEnvironmentFork} mergeEnvironmentFork
 * @property {string} - The source environment's unique ID to merge data from.
 * @property {boolean} - If true, the forked environment will be deleted.
 */
export type MergeEnvironmentFork = z.infer<typeof mergeEnvironmentFork>;

/**
 * Zod schema for mapping API responses to the MergeEnvironmentFork application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mergeEnvironmentForkResponse = z.lazy(() => {
  return z
    .object({
      source: z.string(),
      deleteSource: z.boolean().optional(),
    })
    .transform((data) => ({
      source: data['source'],
      deleteSource: data['deleteSource'],
    }));
});

/**
 * Zod schema for mapping the MergeEnvironmentFork application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mergeEnvironmentForkRequest = z.lazy(() => {
  return z
    .object({
      source: z.string(),
      deleteSource: z.boolean().optional(),
    })
    .transform((data) => ({
      source: data['source'],
      deleteSource: data['deleteSource'],
    }));
});
