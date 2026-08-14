import { z } from 'zod';

/**
 * Zod schema for the CollectionChangesPulledCollection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionChangesPulledCollection = z.lazy(() => {
  return z.object({
    destinationId: z.string().optional(),
    sourceId: z.string().optional(),
  });
});

/**
 * Information about the updated collection fork.
 * @typedef {CollectionChangesPulledCollection} collectionChangesPulledCollection
 * @property {string} destinationId - The ID of the forked collection the changes were pulled into.
 * @property {string} sourceId - The ID of the source collection the changes were pulled from.
 */
export type CollectionChangesPulledCollection = z.infer<typeof collectionChangesPulledCollection>;

/**
 * Zod schema for mapping API responses to the CollectionChangesPulledCollection application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionChangesPulledCollectionResponse = z.lazy(() => {
  return z
    .object({
      destinationId: z.string().optional(),
      sourceId: z.string().optional(),
    })
    .transform((data) => ({
      destinationId: data['destinationId'],
      sourceId: data['sourceId'],
    }));
});

/**
 * Zod schema for mapping the CollectionChangesPulledCollection application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionChangesPulledCollectionRequest = z.lazy(() => {
  return z
    .object({
      destinationId: z.string().optional(),
      sourceId: z.string().optional(),
    })
    .transform((data) => ({
      destinationId: data['destinationId'],
      sourceId: data['sourceId'],
    }));
});
