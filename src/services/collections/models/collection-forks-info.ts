import { z } from 'zod';
import {
  CollectionForksInfoData,
  collectionForksInfoData,
  collectionForksInfoDataRequest,
  collectionForksInfoDataResponse,
} from './collection-forks-info-data';
import {
  CollectionForksInfoMeta,
  collectionForksInfoMeta,
  collectionForksInfoMetaRequest,
  collectionForksInfoMetaResponse,
} from './collection-forks-info-meta';

/**
 * Zod schema for the CollectionForksInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionForksInfo = z.lazy(() => {
  return z.object({
    data: z.array(collectionForksInfoData).optional(),
    meta: collectionForksInfoMeta.optional(),
  });
});

/**
 *
 * @typedef  {CollectionForksInfo} collectionForksInfo
 * @property {CollectionForksInfoData[]} - A list of the collection's forks.
 * @property {CollectionForksInfoMeta} - The response's meta information for paginated results.
 */
export type CollectionForksInfo = z.infer<typeof collectionForksInfo>;

/**
 * Zod schema for mapping API responses to the CollectionForksInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionForksInfoResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(collectionForksInfoDataResponse).optional(),
      meta: collectionForksInfoMetaResponse.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the CollectionForksInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionForksInfoRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(collectionForksInfoDataRequest).optional(),
      meta: collectionForksInfoMetaRequest.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});
