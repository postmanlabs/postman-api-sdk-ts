import { z } from 'zod';
import {
  CollectionChangesPulledCollection,
  collectionChangesPulledCollection,
  collectionChangesPulledCollectionRequest,
  collectionChangesPulledCollectionResponse,
} from './collection-changes-pulled-collection';

/**
 * Zod schema for the CollectionChangesPulled model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionChangesPulled = z.lazy(() => {
  return z.object({
    collection: collectionChangesPulledCollection.optional(),
  });
});

/**
 *
 * @typedef  {CollectionChangesPulled} collectionChangesPulled
 * @property {CollectionChangesPulledCollection} - Information about the updated collection fork.
 */
export type CollectionChangesPulled = z.infer<typeof collectionChangesPulled>;

/**
 * Zod schema for mapping API responses to the CollectionChangesPulled application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionChangesPulledResponse = z.lazy(() => {
  return z
    .object({
      collection: collectionChangesPulledCollectionResponse.optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});

/**
 * Zod schema for mapping the CollectionChangesPulled application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionChangesPulledRequest = z.lazy(() => {
  return z
    .object({
      collection: collectionChangesPulledCollectionRequest.optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});
