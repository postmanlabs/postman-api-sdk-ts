import { z } from 'zod';
import {
  GetApiCatalogServiceMeta,
  getApiCatalogServiceMeta,
  getApiCatalogServiceMetaRequest,
  getApiCatalogServiceMetaResponse,
} from './get-api-catalog-service-meta';
import {
  GetApiCatalogServiceData2,
  getApiCatalogServiceData2,
  getApiCatalogServiceData2Request,
  getApiCatalogServiceData2Response,
} from './get-api-catalog-service-data-2';

/**
 * Zod schema for the GetApiCatalogService model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogService = z.lazy(() => {
  return z.object({
    meta: getApiCatalogServiceMeta,
    data: getApiCatalogServiceData2,
  });
});

/**
 *
 * @typedef  {GetApiCatalogService} getApiCatalogService
 * @property {GetApiCatalogServiceMeta} - The response's meta information for paginated results.
 * @property {GetApiCatalogServiceData2} - Information about the service.
 */
export type GetApiCatalogService = z.infer<typeof getApiCatalogService>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogService application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceResponse = z.lazy(() => {
  return z
    .object({
      meta: getApiCatalogServiceMetaResponse,
      data: getApiCatalogServiceData2Response,
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogService application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceRequest = z.lazy(() => {
  return z
    .object({
      meta: getApiCatalogServiceMetaRequest,
      data: getApiCatalogServiceData2Request,
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});
