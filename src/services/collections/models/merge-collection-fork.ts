import { z } from 'zod';

/**
 * Zod schema for the MergeCollectionFork model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const mergeCollectionFork = z.lazy(() => {
  return z.object({
    destination: z.string(),
    source: z.string(),
    strategy: z.string().optional(),
  });
});

/**
 * @typedef {MergeCollectionFork} mergeCollectionFork
 * @property {string} destination - The destination (parent) collection's unique ID.
 * @property {string} source - The source collection's unique ID.
 * @property {MergeCollectionForkStrategy} strategy - The fork's merge strategy:
- `deleteSource` — Merge the changes into the parent collection. After the merge process is complete, Postman deletes the fork. You must have Editor access to both the parent and forked collections.
- `updateSourceWithDestination` — Merge the changes into the parent collection. Any differences in the parent collection are also made to the fork.

 */
export type MergeCollectionFork = z.infer<typeof mergeCollectionFork>;

/**
 * Zod schema for mapping API responses to the MergeCollectionFork application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mergeCollectionForkResponse = z.lazy(() => {
  return z
    .object({
      destination: z.string(),
      source: z.string(),
      strategy: z.string().optional(),
    })
    .transform((data) => ({
      destination: data['destination'],
      source: data['source'],
      strategy: data['strategy'],
    }));
});

/**
 * Zod schema for mapping the MergeCollectionFork application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mergeCollectionForkRequest = z.lazy(() => {
  return z
    .object({
      destination: z.string(),
      source: z.string(),
      strategy: z.string().optional(),
    })
    .transform((data) => ({
      destination: data['destination'],
      source: data['source'],
      strategy: data['strategy'],
    }));
});
