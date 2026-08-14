import { z } from 'zod';
import {
  CollectionRequestCreatedData,
  collectionRequestCreatedData,
  collectionRequestCreatedDataRequest,
  collectionRequestCreatedDataResponse,
} from './collection-request-created-data';

/**
 * Zod schema for the CollectionRequestCreated model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionRequestCreated = z.lazy(() => {
  return z.object({
    data: collectionRequestCreatedData.optional(),
    meta: z.any().optional(),
    modelId: z.string().optional(),
    revision: z.number().optional(),
  });
});

/**
 * @typedef {CollectionRequestCreated} collectionRequestCreated
 * @property {CollectionRequestCreatedData} data - Information about the created request. For a complete list of properties, refer to the ``Request`` entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
 * @property {any} meta - A Postman-specific response that contains information about the internal performed operation.
 * @property {string} modelId - The request's ID.
 * @property {number} revision - An internal revision ID. Its value increments each time the resource changes. You can use this ID to track whether there were changes since the last time you fetched the resource.
 */
export type CollectionRequestCreated = z.infer<typeof collectionRequestCreated>;

/**
 * Zod schema for mapping API responses to the CollectionRequestCreated application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestCreatedResponse = z.lazy(() => {
  return z
    .object({
      data: collectionRequestCreatedDataResponse.optional(),
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
 * Zod schema for mapping the CollectionRequestCreated application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestCreatedRequest = z.lazy(() => {
  return z
    .object({
      data: collectionRequestCreatedDataRequest.optional(),
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
