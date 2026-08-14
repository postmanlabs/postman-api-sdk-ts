import { z } from 'zod';

/**
 * Zod schema for the MergePullCollectionChanges model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const mergePullCollectionChanges = z.lazy(() => {
  return z.object({
    strategy: z.string(),
    source: z.string(),
    destination: z.string(),
  });
});

/**
 * @typedef {MergePullCollectionChanges} mergePullCollectionChanges
 * @property {MergePullCollectionChangesStrategy} strategy - The fork's merge strategy:
- `default` — Make no changes to the fork. You must have ``Editor`` access to the destination collection.
- `updateSourceWithDestination` — Merge changes and apply any differences in the destination collection to the source. You must have ``Editor`` access to both the source and destination collection.
- `deleteSource` — Merge the changes and delete the fork. You must have ``Editor`` access to both the source and destination collection.

 * @property {string} source - The source collection's unique ID.
 * @property {string} destination - The destination collection's unique ID.
 */
export type MergePullCollectionChanges = z.infer<typeof mergePullCollectionChanges>;

/**
 * Zod schema for mapping API responses to the MergePullCollectionChanges application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mergePullCollectionChangesResponse = z.lazy(() => {
  return z
    .object({
      strategy: z.string(),
      source: z.string(),
      destination: z.string(),
    })
    .transform((data) => ({
      strategy: data['strategy'],
      source: data['source'],
      destination: data['destination'],
    }));
});

/**
 * Zod schema for mapping the MergePullCollectionChanges application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const mergePullCollectionChangesRequest = z.lazy(() => {
  return z
    .object({
      strategy: z.string(),
      source: z.string(),
      destination: z.string(),
    })
    .transform((data) => ({
      strategy: data['strategy'],
      source: data['source'],
      destination: data['destination'],
    }));
});
