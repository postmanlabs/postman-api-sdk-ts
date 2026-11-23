import { z } from 'zod';
import {
  CollectionForkMergedCollection,
  collectionForkMergedCollection,
  collectionForkMergedCollectionRequest,
  collectionForkMergedCollectionResponse,
} from './collection-fork-merged-collection';

/**
 * Zod schema for the CollectionForkMerged model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionForkMerged = z.lazy(() => {
  return z.object({
    collection: collectionForkMergedCollection.optional(),
  });
});

/**
 * @typedef {CollectionForkMerged} collectionForkMerged
 * @property {CollectionForkMergedCollection} collection - Information about the merged collection.
 */
export type CollectionForkMerged = z.infer<typeof collectionForkMerged>;

/**
 * Zod schema for mapping API responses to the CollectionForkMerged application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionForkMergedResponse = z.lazy(() => {
  return z
    .object({
      collection: collectionForkMergedCollectionResponse.optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});

/**
 * Zod schema for mapping the CollectionForkMerged application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionForkMergedRequest = z.lazy(() => {
  return z
    .object({
      collection: collectionForkMergedCollectionRequest.optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});
