import { z } from 'zod';
import {
  CollectionCreatedCollection,
  collectionCreatedCollection,
  collectionCreatedCollectionRequest,
  collectionCreatedCollectionResponse,
} from './collection-created-collection';

/**
 * Zod schema for the CollectionCreated model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionCreated = z.lazy(() => {
  return z.object({
    collection: collectionCreatedCollection.optional(),
  });
});

/**
 *
 * @typedef  {CollectionCreated} collectionCreated
 * @property {CollectionCreatedCollection}
 */
export type CollectionCreated = z.infer<typeof collectionCreated>;

/**
 * Zod schema for mapping API responses to the CollectionCreated application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionCreatedResponse = z.lazy(() => {
  return z
    .object({
      collection: collectionCreatedCollectionResponse.optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});

/**
 * Zod schema for mapping the CollectionCreated application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionCreatedRequest = z.lazy(() => {
  return z
    .object({
      collection: collectionCreatedCollectionRequest.optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});
