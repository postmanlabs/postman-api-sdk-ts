import { z } from 'zod';
import {
  CollectionUpdatedCollection2,
  collectionUpdatedCollection2,
  collectionUpdatedCollection2Request,
  collectionUpdatedCollection2Response,
} from './collection-updated-collection-2';

/**
 * Zod schema for the PatchCollectionOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const patchCollectionOkResponse = z.lazy(() => {
  return z.object({
    collection: collectionUpdatedCollection2.optional(),
  });
});

/**
 *
 * @typedef  {PatchCollectionOkResponse} patchCollectionOkResponse
 * @property {CollectionUpdatedCollection2}
 */
export type PatchCollectionOkResponse = z.infer<typeof patchCollectionOkResponse>;

/**
 * Zod schema for mapping API responses to the PatchCollectionOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const patchCollectionOkResponseResponse = z.lazy(() => {
  return z
    .object({
      collection: collectionUpdatedCollection2Response.optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});

/**
 * Zod schema for mapping the PatchCollectionOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const patchCollectionOkResponseRequest = z.lazy(() => {
  return z
    .object({
      collection: collectionUpdatedCollection2Request.optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});
