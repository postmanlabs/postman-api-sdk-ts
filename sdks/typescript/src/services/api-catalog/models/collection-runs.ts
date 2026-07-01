import { z } from 'zod';

/**
 * Zod schema for the CollectionRuns model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionRuns = z.lazy(() => {
  return z.object({
    totalRuns: z.number(),
    passedRuns: z.number(),
    failedRuns: z.number(),
    passRate: z.number().nullable(),
    totalCollections: z.number(),
    activeCollections: z.number(),
    totalAssertions: z.number(),
    failedAssertions: z.number(),
  });
});

/**
 * Information about collection runs, including monitor runs, CI pipeline runs, and manual runs.
 * @typedef  {CollectionRuns} collectionRuns - Information about collection runs, including monitor runs, CI pipeline runs, and manual runs. - Information about collection runs, including monitor runs, CI pipeline runs, and manual runs.
 * @property {number} - The total number of collection runs.
 * @property {number} - The number of collection runs that passed.
 * @property {number} - The number of collection runs that failed.
 * @property {number} - The percentage of collection runs that passed. If no runs exist, this returns a null value.
 * @property {number} - The total number of collections in the workspace. This value is the same as the as `entityCounts.collections` value.
 * @property {number} - The number of distinct collections with at least one run within the time window.
 * @property {number} - The total number of assertions evaluated.
 * @property {number} - The number of assertions that failed.
 */
export type CollectionRuns = z.infer<typeof collectionRuns>;

/**
 * Zod schema for mapping API responses to the CollectionRuns application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRunsResponse = z.lazy(() => {
  return z
    .object({
      totalRuns: z.number(),
      passedRuns: z.number(),
      failedRuns: z.number(),
      passRate: z.number().nullable(),
      totalCollections: z.number(),
      activeCollections: z.number(),
      totalAssertions: z.number(),
      failedAssertions: z.number(),
    })
    .transform((data) => ({
      totalRuns: data['totalRuns'],
      passedRuns: data['passedRuns'],
      failedRuns: data['failedRuns'],
      passRate: data['passRate'],
      totalCollections: data['totalCollections'],
      activeCollections: data['activeCollections'],
      totalAssertions: data['totalAssertions'],
      failedAssertions: data['failedAssertions'],
    }));
});

/**
 * Zod schema for mapping the CollectionRuns application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRunsRequest = z.lazy(() => {
  return z
    .object({
      totalRuns: z.number(),
      passedRuns: z.number(),
      failedRuns: z.number(),
      passRate: z.number().nullable(),
      totalCollections: z.number(),
      activeCollections: z.number(),
      totalAssertions: z.number(),
      failedAssertions: z.number(),
    })
    .transform((data) => ({
      totalRuns: data['totalRuns'],
      passedRuns: data['passedRuns'],
      failedRuns: data['failedRuns'],
      passRate: data['passRate'],
      totalCollections: data['totalCollections'],
      activeCollections: data['activeCollections'],
      totalAssertions: data['totalAssertions'],
      failedAssertions: data['failedAssertions'],
    }));
});
