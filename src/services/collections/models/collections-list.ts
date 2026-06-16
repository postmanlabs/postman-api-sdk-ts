import { z } from 'zod';
import {
  CollectionsListCollections,
  collectionsListCollections,
  collectionsListCollectionsRequest,
  collectionsListCollectionsResponse,
} from './collections-list-collections';
import {
  MetaLimitOffsetTotal,
  metaLimitOffsetTotal,
  metaLimitOffsetTotalRequest,
  metaLimitOffsetTotalResponse,
} from './meta-limit-offset-total';

/**
 * Zod schema for the CollectionsList model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionsList = z.lazy(() => {
  return z.object({
    collections: z.array(collectionsListCollections).optional(),
    meta: metaLimitOffsetTotal.optional(),
  });
});

/**
 *
 * @typedef  {CollectionsList} collectionsList
 * @property {CollectionsListCollections[]}
 * @property {MetaLimitOffsetTotal} - The response's meta information for paginated results.
 */
export type CollectionsList = z.infer<typeof collectionsList>;

/**
 * Zod schema for mapping API responses to the CollectionsList application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionsListResponse = z.lazy(() => {
  return z
    .object({
      collections: z.array(collectionsListCollectionsResponse).optional(),
      meta: metaLimitOffsetTotalResponse.optional(),
    })
    .transform((data) => ({
      collections: data['collections'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the CollectionsList application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionsListRequest = z.lazy(() => {
  return z
    .object({
      collections: z.array(collectionsListCollectionsRequest).optional(),
      meta: metaLimitOffsetTotalRequest.optional(),
    })
    .transform((data) => ({
      collections: data['collections'],
      meta: data['meta'],
    }));
});
