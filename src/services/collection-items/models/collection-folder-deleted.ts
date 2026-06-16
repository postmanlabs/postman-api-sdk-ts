import { z } from 'zod';
import {
  CollectionFolderDeletedData,
  collectionFolderDeletedData,
  collectionFolderDeletedDataRequest,
  collectionFolderDeletedDataResponse,
} from './collection-folder-deleted-data';

/**
 * Zod schema for the CollectionFolderDeleted model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionFolderDeleted = z.lazy(() => {
  return z.object({
    data: collectionFolderDeletedData.optional(),
    meta: z.any().optional(),
    modelId: z.string().optional(),
    revision: z.number().optional(),
  });
});

/**
 *
 * @typedef  {CollectionFolderDeleted} collectionFolderDeleted
 * @property {CollectionFolderDeletedData} - The folder's information.
 * @property {any} - A Postman-specific response that contains information about the internal performed operation.
 * @property {string} - The folder's ID.
 * @property {number} - An internal revision ID. Its value increments each time the resource changes. You can use this ID to track whether there were changes since the last time you fetched the resource.
 */
export type CollectionFolderDeleted = z.infer<typeof collectionFolderDeleted>;

/**
 * Zod schema for mapping API responses to the CollectionFolderDeleted application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionFolderDeletedResponse = z.lazy(() => {
  return z
    .object({
      data: collectionFolderDeletedDataResponse.optional(),
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
 * Zod schema for mapping the CollectionFolderDeleted application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionFolderDeletedRequest = z.lazy(() => {
  return z
    .object({
      data: collectionFolderDeletedDataRequest.optional(),
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
