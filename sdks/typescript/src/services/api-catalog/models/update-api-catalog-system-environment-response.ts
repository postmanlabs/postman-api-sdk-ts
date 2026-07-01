import { z } from 'zod';
import {
  PostPatchApiCatalogSystemEnvironmentData,
  postPatchApiCatalogSystemEnvironmentData,
  postPatchApiCatalogSystemEnvironmentDataRequest,
  postPatchApiCatalogSystemEnvironmentDataResponse,
} from './post-patch-api-catalog-system-environment-data';

/**
 * Zod schema for the UpdateApiCatalogSystemEnvironmentResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateApiCatalogSystemEnvironmentResponse = z.lazy(() => {
  return z.object({
    data: postPatchApiCatalogSystemEnvironmentData,
  });
});

/**
 *
 * @typedef  {UpdateApiCatalogSystemEnvironmentResponse} updateApiCatalogSystemEnvironmentResponse
 * @property {PostPatchApiCatalogSystemEnvironmentData} - Information about the system environment.
 */
export type UpdateApiCatalogSystemEnvironmentResponse = z.infer<
  typeof updateApiCatalogSystemEnvironmentResponse
>;

/**
 * Zod schema for mapping API responses to the UpdateApiCatalogSystemEnvironmentResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateApiCatalogSystemEnvironmentResponseResponse = z.lazy(() => {
  return z
    .object({
      data: postPatchApiCatalogSystemEnvironmentDataResponse,
    })
    .transform((data) => ({
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the UpdateApiCatalogSystemEnvironmentResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateApiCatalogSystemEnvironmentResponseRequest = z.lazy(() => {
  return z
    .object({
      data: postPatchApiCatalogSystemEnvironmentDataRequest,
    })
    .transform((data) => ({
      data: data['data'],
    }));
});
