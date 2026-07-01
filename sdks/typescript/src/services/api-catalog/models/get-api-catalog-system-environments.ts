import { z } from 'zod';
import {
  ApiCatalogSystemEnvironmentsMetaData,
  apiCatalogSystemEnvironmentsMetaData,
  apiCatalogSystemEnvironmentsMetaDataRequest,
  apiCatalogSystemEnvironmentsMetaDataResponse,
} from './api-catalog-system-environments-meta-data';
import {
  ApiCatalogSystemEnvironmentData,
  apiCatalogSystemEnvironmentData,
  apiCatalogSystemEnvironmentDataRequest,
  apiCatalogSystemEnvironmentDataResponse,
} from './api-catalog-system-environment-data';

/**
 * Zod schema for the GetApiCatalogSystemEnvironments model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogSystemEnvironments = z.lazy(() => {
  return z.object({
    meta: apiCatalogSystemEnvironmentsMetaData,
    data: z.array(apiCatalogSystemEnvironmentData),
  });
});

/**
 *
 * @typedef  {GetApiCatalogSystemEnvironments} getApiCatalogSystemEnvironments
 * @property {ApiCatalogSystemEnvironmentsMetaData} - The response's meta information for paginated results.
 * @property {ApiCatalogSystemEnvironmentData[]} - A list of system environments.
 */
export type GetApiCatalogSystemEnvironments = z.infer<typeof getApiCatalogSystemEnvironments>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogSystemEnvironments application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogSystemEnvironmentsResponse = z.lazy(() => {
  return z
    .object({
      meta: apiCatalogSystemEnvironmentsMetaDataResponse,
      data: z.array(apiCatalogSystemEnvironmentDataResponse),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogSystemEnvironments application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogSystemEnvironmentsRequest = z.lazy(() => {
  return z
    .object({
      meta: apiCatalogSystemEnvironmentsMetaDataRequest,
      data: z.array(apiCatalogSystemEnvironmentDataRequest),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});
