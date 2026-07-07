import { z } from 'zod';
import {
  CopyCollectionToApiData,
  copyCollectionToApiData,
  copyCollectionToApiDataRequest,
  copyCollectionToApiDataResponse,
} from './copy-collection-to-api-data';

/**
 * Zod schema for the CopyCollectionToApi model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const copyCollectionToApi = z.lazy(() => {
  return z.object({
    data: copyCollectionToApiData.optional(),
    operationType: z.string().optional(),
  });
});

/**
 *
 * @typedef  {CopyCollectionToApi} copyCollectionToApi
 * @property {CopyCollectionToApiData}
 * @property {CopyCollectionToApiOperationType} - The `COPY_COLLECTION` method.
 */
export type CopyCollectionToApi = z.infer<typeof copyCollectionToApi>;

/**
 * Zod schema for mapping API responses to the CopyCollectionToApi application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const copyCollectionToApiResponse = z.lazy(() => {
  return z
    .object({
      data: copyCollectionToApiDataResponse.optional(),
      operationType: z.string().optional(),
    })
    .transform((data) => ({
      data: data['data'],
      operationType: data['operationType'],
    }));
});

/**
 * Zod schema for mapping the CopyCollectionToApi application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const copyCollectionToApiRequest = z.lazy(() => {
  return z
    .object({
      data: copyCollectionToApiDataRequest.optional(),
      operationType: z.string().optional(),
    })
    .transform((data) => ({
      data: data['data'],
      operationType: data['operationType'],
    }));
});
