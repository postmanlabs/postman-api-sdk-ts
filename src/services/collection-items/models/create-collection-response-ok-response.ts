import { z } from 'zod';
import {
  CollectionResponseCreatedData,
  collectionResponseCreatedData,
  collectionResponseCreatedDataRequest,
  collectionResponseCreatedDataResponse,
} from './collection-response-created-data';

/**
 * Zod schema for the CreateCollectionResponseOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createCollectionResponseOkResponse = z.lazy(() => {
  return z.object({
    data: collectionResponseCreatedData.optional(),
    meta: z.any().optional(),
    modelId: z.string().optional(),
    revision: z.number().optional(),
  });
});

/**
 *
 * @typedef  {CreateCollectionResponseOkResponse} createCollectionResponseOkResponse
 * @property {CollectionResponseCreatedData} - Information about the response. For a complete list of properties, refer to the ``Response`` entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
 * @property {any} - A Postman-specific response that contains information about the internal performed operation.
 * @property {string} - The response's ID.
 * @property {number} - An internal revision ID. Its value increments each time the resource changes. You can use this ID to track whether there were changes since the last time you fetched the resource.
 */
export type CreateCollectionResponseOkResponse = z.infer<typeof createCollectionResponseOkResponse>;

/**
 * Zod schema for mapping API responses to the CreateCollectionResponseOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createCollectionResponseOkResponseResponse = z.lazy(() => {
  return z
    .object({
      data: collectionResponseCreatedDataResponse.optional(),
      meta: z.any().optional(),
      model_id: z.string().optional(),
      revision: z.number().optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
      modelId: data['model_id'],
      revision: data['revision'],
    }));
});

/**
 * Zod schema for mapping the CreateCollectionResponseOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createCollectionResponseOkResponseRequest = z.lazy(() => {
  return z
    .object({
      data: collectionResponseCreatedDataRequest.optional(),
      meta: z.any().optional(),
      modelId: z.string().optional(),
      revision: z.number().optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
      model_id: data['modelId'],
      revision: data['revision'],
    }));
});
