import { z } from 'zod';
import {
  CollectionForkCreatedCollection,
  collectionForkCreatedCollection,
  collectionForkCreatedCollectionRequest,
  collectionForkCreatedCollectionResponse,
} from './collection-fork-created-collection';

/**
 * Zod schema for the CollectionForkCreated model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionForkCreated = z.lazy(() => {
  return z.object({
    collection: collectionForkCreatedCollection.optional(),
  });
});

/**
 *
 * @typedef  {CollectionForkCreated} collectionForkCreated
 * @property {CollectionForkCreatedCollection} - Information about the forked collection.
 */
export type CollectionForkCreated = z.infer<typeof collectionForkCreated>;

/**
 * Zod schema for mapping API responses to the CollectionForkCreated application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionForkCreatedResponse = z.lazy(() => {
  return z
    .object({
      collection: collectionForkCreatedCollectionResponse.optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});

/**
 * Zod schema for mapping the CollectionForkCreated application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionForkCreatedRequest = z.lazy(() => {
  return z
    .object({
      collection: collectionForkCreatedCollectionRequest.optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});
