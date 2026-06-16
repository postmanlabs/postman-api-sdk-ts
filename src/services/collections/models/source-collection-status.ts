import { z } from 'zod';
import {
  SourceCollectionStatusCollection,
  sourceCollectionStatusCollection,
  sourceCollectionStatusCollectionRequest,
  sourceCollectionStatusCollectionResponse,
} from './source-collection-status-collection';

/**
 * Zod schema for the SourceCollectionStatus model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const sourceCollectionStatus = z.lazy(() => {
  return z.object({
    collection: sourceCollectionStatusCollection.optional(),
  });
});

/**
 *
 * @typedef  {SourceCollectionStatus} sourceCollectionStatus
 * @property {SourceCollectionStatusCollection}
 */
export type SourceCollectionStatus = z.infer<typeof sourceCollectionStatus>;

/**
 * Zod schema for mapping API responses to the SourceCollectionStatus application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sourceCollectionStatusResponse = z.lazy(() => {
  return z
    .object({
      collection: sourceCollectionStatusCollectionResponse.optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});

/**
 * Zod schema for mapping the SourceCollectionStatus application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sourceCollectionStatusRequest = z.lazy(() => {
  return z
    .object({
      collection: sourceCollectionStatusCollectionRequest.optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});
