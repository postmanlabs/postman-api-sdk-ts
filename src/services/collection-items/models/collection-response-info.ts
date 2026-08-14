import { z } from 'zod';
import {
  CollectionResponseInfoData,
  collectionResponseInfoData,
  collectionResponseInfoDataRequest,
  collectionResponseInfoDataResponse,
} from './collection-response-info-data';

/**
 * Zod schema for the CollectionResponseInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionResponseInfo = z.lazy(() => {
  return z.object({
    data: collectionResponseInfoData.optional(),
    meta: z.any().optional(),
    modelId: z.string().optional(),
  });
});

/**
 * @typedef {CollectionResponseInfo} collectionResponseInfo
 * @property {CollectionResponseInfoData} data - Information about the response. For a complete list of properties, refer to the ``Response`` entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
 * @property {any} meta - A Postman-specific response that contains information about the internal performed operation.
 * @property {string} modelId - The response's ID.
 */
export type CollectionResponseInfo = z.infer<typeof collectionResponseInfo>;

/**
 * Zod schema for mapping API responses to the CollectionResponseInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionResponseInfoResponse = z.lazy(() => {
  return z
    .object({
      data: collectionResponseInfoDataResponse.optional(),
      meta: z.any().optional(),
      model_id: z.string().optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
      modelId: data['model_id'],
    }));
});

/**
 * Zod schema for mapping the CollectionResponseInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionResponseInfoRequest = z.lazy(() => {
  return z
    .object({
      data: collectionResponseInfoDataRequest.optional(),
      meta: z.any().optional(),
      modelId: z.string().optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
      model_id: data['modelId'],
    }));
});
