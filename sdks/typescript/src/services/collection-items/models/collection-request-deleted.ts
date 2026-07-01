import { z } from 'zod';
import {
  CollectionRequestDeletedData,
  collectionRequestDeletedData,
  collectionRequestDeletedDataRequest,
  collectionRequestDeletedDataResponse,
} from './collection-request-deleted-data';

/**
 * Zod schema for the CollectionRequestDeleted model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionRequestDeleted = z.lazy(() => {
  return z.object({
    modelId: z.string().optional(),
    meta: z.any().optional(),
    data: collectionRequestDeletedData.optional(),
    revision: z.number().optional(),
  });
});

/**
 *
 * @typedef  {CollectionRequestDeleted} collectionRequestDeleted
 * @property {string} - The request's ID.
 * @property {any} - A Postman-specific response that contains information about the internal performed operation.
 * @property {CollectionRequestDeletedData} - The request's information.
 * @property {number} - An internal revision ID. Its value increments each time the resource changes. You can use this ID to track whether there were changes since the last time you fetched the resource.
 */
export type CollectionRequestDeleted = z.infer<typeof collectionRequestDeleted>;

/**
 * Zod schema for mapping API responses to the CollectionRequestDeleted application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestDeletedResponse = z.lazy(() => {
  return z
    .object({
      model_id: z.string().optional(),
      meta: z.any().optional(),
      data: collectionRequestDeletedDataResponse.optional(),
      revision: z.number().optional(),
    })
    .transform((data) => ({
      modelId: data['model_id'],
      meta: data['meta'],
      data: data['data'],
      revision: data['revision'],
    }));
});

/**
 * Zod schema for mapping the CollectionRequestDeleted application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestDeletedRequest = z.lazy(() => {
  return z
    .object({
      modelId: z.string().optional(),
      meta: z.any().optional(),
      data: collectionRequestDeletedDataRequest.optional(),
      revision: z.number().optional(),
    })
    .transform((data) => ({
      model_id: data['modelId'],
      meta: data['meta'],
      data: data['data'],
      revision: data['revision'],
    }));
});
