import { z } from 'zod';
import {
  CollectionRequestInfoData,
  collectionRequestInfoData,
  collectionRequestInfoDataRequest,
  collectionRequestInfoDataResponse,
} from './collection-request-info-data';

/**
 * Zod schema for the CollectionRequestInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionRequestInfo = z.lazy(() => {
  return z.object({
    modelId: z.string().optional(),
    meta: z.any().optional(),
    data: collectionRequestInfoData.optional(),
  });
});

/**
 * @typedef {CollectionRequestInfo} collectionRequestInfo
 * @property {string} modelId - The request's ID.
 * @property {any} meta - A Postman-specific response that contains information about the internal performed operation.
 * @property {CollectionRequestInfoData} data - Information about the request. For a complete list of properties, refer to the ``Request`` entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
 */
export type CollectionRequestInfo = z.infer<typeof collectionRequestInfo>;

/**
 * Zod schema for mapping API responses to the CollectionRequestInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestInfoResponse = z.lazy(() => {
  return z
    .object({
      model_id: z.string().optional(),
      meta: z.any().optional(),
      data: collectionRequestInfoDataResponse.optional(),
    })
    .transform((data) => ({
      modelId: data['model_id'],
      meta: data['meta'],
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the CollectionRequestInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestInfoRequest = z.lazy(() => {
  return z
    .object({
      modelId: z.string().optional(),
      meta: z.any().optional(),
      data: collectionRequestInfoDataRequest.optional(),
    })
    .transform((data) => ({
      model_id: data['modelId'],
      meta: data['meta'],
      data: data['data'],
    }));
});
