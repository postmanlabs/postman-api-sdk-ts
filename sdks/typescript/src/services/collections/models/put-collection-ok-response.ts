import { z } from 'zod';
import {
  CollectionUpdatedCollection1,
  collectionUpdatedCollection1,
  collectionUpdatedCollection1Request,
  collectionUpdatedCollection1Response,
} from './collection-updated-collection-1';

/**
 * Zod schema for the PutCollectionOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const putCollectionOkResponse = z.lazy(() => {
  return z.object({
    collection: collectionUpdatedCollection1.optional(),
  });
});

/**
 *
 * @typedef  {PutCollectionOkResponse} putCollectionOkResponse
 * @property {CollectionUpdatedCollection1}
 */
export type PutCollectionOkResponse = z.infer<typeof putCollectionOkResponse>;

/**
 * Zod schema for mapping API responses to the PutCollectionOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const putCollectionOkResponseResponse = z.lazy(() => {
  return z
    .object({
      collection: collectionUpdatedCollection1Response.optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});

/**
 * Zod schema for mapping the PutCollectionOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const putCollectionOkResponseRequest = z.lazy(() => {
  return z
    .object({
      collection: collectionUpdatedCollection1Request.optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});
