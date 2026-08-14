import { z } from 'zod';
import {
  CollectionAccessKeysData,
  collectionAccessKeysData,
  collectionAccessKeysDataRequest,
  collectionAccessKeysDataResponse,
} from './collection-access-keys-data';
import {
  CollectionAccessKeysMeta,
  collectionAccessKeysMeta,
  collectionAccessKeysMetaRequest,
  collectionAccessKeysMetaResponse,
} from './collection-access-keys-meta';

/**
 * Zod schema for the CollectionAccessKeys model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionAccessKeys = z.lazy(() => {
  return z.object({
    data: z.array(collectionAccessKeysData).optional(),
    meta: collectionAccessKeysMeta.optional(),
  });
});

/**
 * @typedef {CollectionAccessKeys} collectionAccessKeys
 * @property {CollectionAccessKeysData[]} data - A list of collection access keys.
 * @property {CollectionAccessKeysMeta} meta - The response's non-standard metadata information.
 */
export type CollectionAccessKeys = z.infer<typeof collectionAccessKeys>;

/**
 * Zod schema for mapping API responses to the CollectionAccessKeys application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionAccessKeysResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(collectionAccessKeysDataResponse).optional(),
      meta: collectionAccessKeysMetaResponse.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the CollectionAccessKeys application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionAccessKeysRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(collectionAccessKeysDataRequest).optional(),
      meta: collectionAccessKeysMetaRequest.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});
