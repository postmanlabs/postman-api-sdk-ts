import { z } from 'zod';
import {
  CollectionResponseDeletedData,
  collectionResponseDeletedData,
  collectionResponseDeletedDataRequest,
  collectionResponseDeletedDataResponse,
} from './collection-response-deleted-data';

/**
 * Zod schema for the CollectionResponseDeleted model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionResponseDeleted = z.lazy(() => {
  return z.object({
    modelId: z.string().optional(),
    meta: z.any().optional(),
    data: collectionResponseDeletedData.optional(),
    revision: z.number().optional(),
  });
});

/**
 *
 * @typedef  {CollectionResponseDeleted} collectionResponseDeleted
 * @property {string} - The response's ID.
 * @property {any} - A Postman-specific response that contains information about the internal performed operation.
 * @property {CollectionResponseDeletedData} - The response's information.
 * @property {number} - An internal revision ID. Its value increments each time the resource changes. You can use this ID to track whether there were changes since the last time you fetched the resource.
 */
export type CollectionResponseDeleted = z.infer<typeof collectionResponseDeleted>;

/**
 * Zod schema for mapping API responses to the CollectionResponseDeleted application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionResponseDeletedResponse = z.lazy(() => {
  return z
    .object({
      model_id: z.string().optional(),
      meta: z.any().optional(),
      data: collectionResponseDeletedDataResponse.optional(),
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
 * Zod schema for mapping the CollectionResponseDeleted application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionResponseDeletedRequest = z.lazy(() => {
  return z
    .object({
      modelId: z.string().optional(),
      meta: z.any().optional(),
      data: collectionResponseDeletedDataRequest.optional(),
      revision: z.number().optional(),
    })
    .transform((data) => ({
      model_id: data['modelId'],
      meta: data['meta'],
      data: data['data'],
      revision: data['revision'],
    }));
});
