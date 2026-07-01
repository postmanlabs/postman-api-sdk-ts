import { z } from 'zod';
import {
  PostPatchApiCatalogSystemEnvironmentData,
  postPatchApiCatalogSystemEnvironmentData,
  postPatchApiCatalogSystemEnvironmentDataRequest,
  postPatchApiCatalogSystemEnvironmentDataResponse,
} from './post-patch-api-catalog-system-environment-data';

/**
 * Zod schema for the CreateApiCatalogSystemEnvironmentResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createApiCatalogSystemEnvironmentResponse = z.lazy(() => {
  return z.object({
    data: postPatchApiCatalogSystemEnvironmentData,
  });
});

/**
 *
 * @typedef  {CreateApiCatalogSystemEnvironmentResponse} createApiCatalogSystemEnvironmentResponse
 * @property {PostPatchApiCatalogSystemEnvironmentData} - Information about the system environment.
 */
export type CreateApiCatalogSystemEnvironmentResponse = z.infer<
  typeof createApiCatalogSystemEnvironmentResponse
>;

/**
 * Zod schema for mapping API responses to the CreateApiCatalogSystemEnvironmentResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createApiCatalogSystemEnvironmentResponseResponse = z.lazy(() => {
  return z
    .object({
      data: postPatchApiCatalogSystemEnvironmentDataResponse,
    })
    .transform((data) => ({
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the CreateApiCatalogSystemEnvironmentResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createApiCatalogSystemEnvironmentResponseRequest = z.lazy(() => {
  return z
    .object({
      data: postPatchApiCatalogSystemEnvironmentDataRequest,
    })
    .transform((data) => ({
      data: data['data'],
    }));
});
