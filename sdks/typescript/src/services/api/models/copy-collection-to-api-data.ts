import { z } from 'zod';

/**
 * Zod schema for the CopyCollectionToApiData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const copyCollectionToApiData = z.lazy(() => {
  return z.object({
    collectionId: z.string().optional(),
  });
});

/**
 *
 * @typedef  {CopyCollectionToApiData} copyCollectionToApiData
 * @property {string} - The collection ID to copy to the API.
 */
export type CopyCollectionToApiData = z.infer<typeof copyCollectionToApiData>;

/**
 * Zod schema for mapping API responses to the CopyCollectionToApiData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const copyCollectionToApiDataResponse = z.lazy(() => {
  return z
    .object({
      collectionId: z.string().optional(),
    })
    .transform((data) => ({
      collectionId: data['collectionId'],
    }));
});

/**
 * Zod schema for mapping the CopyCollectionToApiData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const copyCollectionToApiDataRequest = z.lazy(() => {
  return z
    .object({
      collectionId: z.string().optional(),
    })
    .transform((data) => ({
      collectionId: data['collectionId'],
    }));
});
