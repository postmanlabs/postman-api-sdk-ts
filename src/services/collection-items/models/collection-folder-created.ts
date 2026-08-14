import { z } from 'zod';
import {
  CollectionFolderCreatedData,
  collectionFolderCreatedData,
  collectionFolderCreatedDataRequest,
  collectionFolderCreatedDataResponse,
} from './collection-folder-created-data';

/**
 * Zod schema for the CollectionFolderCreated model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionFolderCreated = z.lazy(() => {
  return z.object({
    data: collectionFolderCreatedData.optional(),
    meta: z.any().optional(),
    modelId: z.string().optional(),
    revision: z.number().optional(),
  });
});

/**
 * @typedef {CollectionFolderCreated} collectionFolderCreated
 * @property {CollectionFolderCreatedData} data - Information about the collection folder. For a complete list of properties, refer to the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
 * @property {any} meta - A Postman-specific response that contains information about the internal performed operation.
 * @property {string} modelId - The folder's ID.
 * @property {number} revision - An internal revision ID. Its value increments each time the resource changes. You can use this ID to track whether there were changes since the last time you fetched the resource.
 */
export type CollectionFolderCreated = z.infer<typeof collectionFolderCreated>;

/**
 * Zod schema for mapping API responses to the CollectionFolderCreated application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionFolderCreatedResponse = z.lazy(() => {
  return z
    .object({
      data: collectionFolderCreatedDataResponse.optional(),
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
 * Zod schema for mapping the CollectionFolderCreated application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionFolderCreatedRequest = z.lazy(() => {
  return z
    .object({
      data: collectionFolderCreatedDataRequest.optional(),
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
