import { z } from 'zod';
import {
  CollectionFolderInfoData,
  collectionFolderInfoData,
  collectionFolderInfoDataRequest,
  collectionFolderInfoDataResponse,
} from './collection-folder-info-data';

/**
 * Zod schema for the CollectionFolderInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionFolderInfo = z.lazy(() => {
  return z.object({
    modelId: z.string().optional(),
    meta: z.any().optional(),
    data: collectionFolderInfoData.optional(),
  });
});

/**
 * @typedef {CollectionFolderInfo} collectionFolderInfo
 * @property {string} modelId - The folder's ID.
 * @property {any} meta - A Postman-specific response that contains information about the internal performed operation.
 * @property {CollectionFolderInfoData} data - Information about the folder. For a complete list of properties, refer to the ``Folders`` entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
 */
export type CollectionFolderInfo = z.infer<typeof collectionFolderInfo>;

/**
 * Zod schema for mapping API responses to the CollectionFolderInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionFolderInfoResponse = z.lazy(() => {
  return z
    .object({
      model_id: z.string().optional(),
      meta: z.any().optional(),
      data: collectionFolderInfoDataResponse.optional(),
    })
    .transform((data) => ({
      modelId: data['model_id'],
      meta: data['meta'],
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the CollectionFolderInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionFolderInfoRequest = z.lazy(() => {
  return z
    .object({
      modelId: z.string().optional(),
      meta: z.any().optional(),
      data: collectionFolderInfoDataRequest.optional(),
    })
    .transform((data) => ({
      model_id: data['modelId'],
      meta: data['meta'],
      data: data['data'],
    }));
});
