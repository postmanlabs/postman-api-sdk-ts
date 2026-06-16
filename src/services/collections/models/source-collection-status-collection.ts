import { z } from 'zod';
import {
  CollectionUid,
  collectionUid,
  collectionUidRequest,
  collectionUidResponse,
} from './collection-uid';

/**
 * Zod schema for the SourceCollectionStatusCollection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const sourceCollectionStatusCollection = z.lazy(() => {
  return z.object({
    collectionUid: collectionUid.optional(),
  });
});

/**
 *
 * @typedef  {SourceCollectionStatusCollection} sourceCollectionStatusCollection
 * @property {CollectionUid} - Information about the forked collection. The object's name is the forked collection's UID (`userId`-`collectionId`).
 */
export type SourceCollectionStatusCollection = z.infer<typeof sourceCollectionStatusCollection>;

/**
 * Zod schema for mapping API responses to the SourceCollectionStatusCollection application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sourceCollectionStatusCollectionResponse = z.lazy(() => {
  return z
    .object({
      collectionUid: collectionUidResponse.optional(),
    })
    .transform((data) => ({
      collectionUid: data['collectionUid'],
    }));
});

/**
 * Zod schema for mapping the SourceCollectionStatusCollection application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sourceCollectionStatusCollectionRequest = z.lazy(() => {
  return z
    .object({
      collectionUid: collectionUidRequest.optional(),
    })
    .transform((data) => ({
      collectionUid: data['collectionUid'],
    }));
});
