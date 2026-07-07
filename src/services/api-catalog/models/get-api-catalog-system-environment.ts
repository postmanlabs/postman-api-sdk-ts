import { z } from 'zod';
import {
  ApiCatalogSystemEnvironmentData,
  apiCatalogSystemEnvironmentData,
  apiCatalogSystemEnvironmentDataRequest,
  apiCatalogSystemEnvironmentDataResponse,
} from './api-catalog-system-environment-data';

/**
 * Zod schema for the GetApiCatalogSystemEnvironment model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogSystemEnvironment = z.lazy(() => {
  return z.object({
    data: apiCatalogSystemEnvironmentData,
  });
});

/**
 *
 * @typedef  {GetApiCatalogSystemEnvironment} getApiCatalogSystemEnvironment
 * @property {ApiCatalogSystemEnvironmentData} - Information about the system environment.
 */
export type GetApiCatalogSystemEnvironment = z.infer<typeof getApiCatalogSystemEnvironment>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogSystemEnvironment application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogSystemEnvironmentResponse = z.lazy(() => {
  return z
    .object({
      data: apiCatalogSystemEnvironmentDataResponse,
    })
    .transform((data) => ({
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogSystemEnvironment application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogSystemEnvironmentRequest = z.lazy(() => {
  return z
    .object({
      data: apiCatalogSystemEnvironmentDataRequest,
    })
    .transform((data) => ({
      data: data['data'],
    }));
});
