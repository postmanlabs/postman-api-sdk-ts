import { z } from 'zod';
import {
  CollectionInformationCollection,
  collectionInformationCollection,
  collectionInformationCollectionRequest,
  collectionInformationCollectionResponse,
} from './collection-information-collection';

/**
 * Zod schema for the CollectionInformation model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionInformation = z.lazy(() => {
  return z.object({
    collection: collectionInformationCollection.optional(),
  });
});

/**
 *
 * @typedef  {CollectionInformation} collectionInformation
 * @property {CollectionInformationCollection} - For a complete list of this endpoint's possible values, use the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
 */
export type CollectionInformation = z.infer<typeof collectionInformation>;

/**
 * Zod schema for mapping API responses to the CollectionInformation application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionInformationResponse = z.lazy(() => {
  return z
    .object({
      collection: collectionInformationCollectionResponse.optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});

/**
 * Zod schema for mapping the CollectionInformation application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionInformationRequest = z.lazy(() => {
  return z
    .object({
      collection: collectionInformationCollectionRequest.optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});
