import { z } from 'zod';
import {
  CollectionFolderUpdatedData,
  collectionFolderUpdatedData,
  collectionFolderUpdatedDataRequest,
  collectionFolderUpdatedDataResponse,
} from './collection-folder-updated-data';

/**
 * Zod schema for the CollectionFolderUpdated model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionFolderUpdated = z.lazy(() => {
  return z.object({
    data: collectionFolderUpdatedData.optional(),
    meta: z.any().optional(),
    modelId: z.string().optional(),
    revision: z.number().optional(),
  });
});

/**
 * @typedef {CollectionFolderUpdated} collectionFolderUpdated
 * @property {CollectionFolderUpdatedData} data - The folder's updated information, including the updated properties. For a complete list of properties, refer to the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v1.0.0/draft-07/collection.json).
 * @property {any} meta - A Postman-specific response that contains information about the internal performed operation.
 * @property {string} modelId - The folder's ID.
 * @property {number} revision - An internal revision ID. Its value increments each time the resource changes. You can use this ID to track whether there were changes since the last time you fetched the resource.
 */
export type CollectionFolderUpdated = z.infer<typeof collectionFolderUpdated>;

/**
 * Zod schema for mapping API responses to the CollectionFolderUpdated application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionFolderUpdatedResponse = z.lazy(() => {
  return z
    .object({
      data: collectionFolderUpdatedDataResponse.optional(),
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
 * Zod schema for mapping the CollectionFolderUpdated application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionFolderUpdatedRequest = z.lazy(() => {
  return z
    .object({
      data: collectionFolderUpdatedDataRequest.optional(),
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
