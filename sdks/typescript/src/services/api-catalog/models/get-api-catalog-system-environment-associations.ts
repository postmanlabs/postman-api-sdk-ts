import { z } from 'zod';
import {
  ApiCatalogSystemEnvironmentsMetaData,
  apiCatalogSystemEnvironmentsMetaData,
  apiCatalogSystemEnvironmentsMetaDataRequest,
  apiCatalogSystemEnvironmentsMetaDataResponse,
} from './api-catalog-system-environments-meta-data';
import {
  GetApiCatalogSystemEnvironmentAssociationsData,
  getApiCatalogSystemEnvironmentAssociationsData,
  getApiCatalogSystemEnvironmentAssociationsDataRequest,
  getApiCatalogSystemEnvironmentAssociationsDataResponse,
} from './get-api-catalog-system-environment-associations-data';

/**
 * Zod schema for the GetApiCatalogSystemEnvironmentAssociations model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogSystemEnvironmentAssociations = z.lazy(() => {
  return z.object({
    meta: apiCatalogSystemEnvironmentsMetaData,
    data: getApiCatalogSystemEnvironmentAssociationsData,
  });
});

/**
 *
 * @typedef  {GetApiCatalogSystemEnvironmentAssociations} getApiCatalogSystemEnvironmentAssociations
 * @property {ApiCatalogSystemEnvironmentsMetaData} - The response's meta information for paginated results.
 * @property {GetApiCatalogSystemEnvironmentAssociationsData} - Information about the workspace-environment association.
 */
export type GetApiCatalogSystemEnvironmentAssociations = z.infer<
  typeof getApiCatalogSystemEnvironmentAssociations
>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogSystemEnvironmentAssociations application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogSystemEnvironmentAssociationsResponse = z.lazy(() => {
  return z
    .object({
      meta: apiCatalogSystemEnvironmentsMetaDataResponse,
      data: getApiCatalogSystemEnvironmentAssociationsDataResponse,
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogSystemEnvironmentAssociations application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogSystemEnvironmentAssociationsRequest = z.lazy(() => {
  return z
    .object({
      meta: apiCatalogSystemEnvironmentsMetaDataRequest,
      data: getApiCatalogSystemEnvironmentAssociationsDataRequest,
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});
