import { z } from 'zod';
import {
  CollectionResponseUpdatedData,
  collectionResponseUpdatedData,
  collectionResponseUpdatedDataRequest,
  collectionResponseUpdatedDataResponse,
} from './collection-response-updated-data';

/**
 * Zod schema for the CollectionResponseUpdated model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionResponseUpdated = z.lazy(() => {
  return z.object({
    data: collectionResponseUpdatedData.optional(),
    meta: z.any().optional(),
    modelId: z.string().optional(),
  });
});

/**
 *
 * @typedef  {CollectionResponseUpdated} collectionResponseUpdated
 * @property {CollectionResponseUpdatedData} - Information about the updated response. For a complete list of response properties, refer to the ``Response`` entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
 * @property {any} - A Postman-specific response that contains information about the internal performed operation.
 * @property {string} - The response's ID.
 */
export type CollectionResponseUpdated = z.infer<typeof collectionResponseUpdated>;

/**
 * Zod schema for mapping API responses to the CollectionResponseUpdated application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionResponseUpdatedResponse = z.lazy(() => {
  return z
    .object({
      data: collectionResponseUpdatedDataResponse.optional(),
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
 * Zod schema for mapping the CollectionResponseUpdated application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionResponseUpdatedRequest = z.lazy(() => {
  return z
    .object({
      data: collectionResponseUpdatedDataRequest.optional(),
      meta: z.any().optional(),
      modelId: z.string().optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
      model_id: data['modelId'],
    }));
});
