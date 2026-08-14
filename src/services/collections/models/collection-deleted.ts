import { z } from 'zod';
import {
  CollectionDeletedCollection,
  collectionDeletedCollection,
  collectionDeletedCollectionRequest,
  collectionDeletedCollectionResponse,
} from './collection-deleted-collection';

/**
 * Zod schema for the CollectionDeleted model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionDeleted = z.lazy(() => {
  return z.object({
    collection: collectionDeletedCollection.optional(),
  });
});

/**
 * @typedef {CollectionDeleted} collectionDeleted
 * @property {CollectionDeletedCollection} collection - Information about the deleted collection.
 */
export type CollectionDeleted = z.infer<typeof collectionDeleted>;

/**
 * Zod schema for mapping API responses to the CollectionDeleted application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionDeletedResponse = z.lazy(() => {
  return z
    .object({
      collection: collectionDeletedCollectionResponse.optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});

/**
 * Zod schema for mapping the CollectionDeleted application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionDeletedRequest = z.lazy(() => {
  return z
    .object({
      collection: collectionDeletedCollectionRequest.optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});
