import { z } from 'zod';
import {
  GetApiCatalogServiceSpecificationLintsMeta,
  getApiCatalogServiceSpecificationLintsMeta,
  getApiCatalogServiceSpecificationLintsMetaRequest,
  getApiCatalogServiceSpecificationLintsMetaResponse,
} from './get-api-catalog-service-specification-lints-meta';
import {
  GetApiCatalogServiceSpecificationLintsData,
  getApiCatalogServiceSpecificationLintsData,
  getApiCatalogServiceSpecificationLintsDataRequest,
  getApiCatalogServiceSpecificationLintsDataResponse,
} from './get-api-catalog-service-specification-lints-data';

/**
 * Zod schema for the GetApiCatalogServiceSpecificationLints model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogServiceSpecificationLints = z.lazy(() => {
  return z.object({
    meta: getApiCatalogServiceSpecificationLintsMeta,
    data: z.array(getApiCatalogServiceSpecificationLintsData),
  });
});

/**
 *
 * @typedef  {GetApiCatalogServiceSpecificationLints} getApiCatalogServiceSpecificationLints
 * @property {GetApiCatalogServiceSpecificationLintsMeta} - The response's meta information for paginated results.
 * @property {GetApiCatalogServiceSpecificationLintsData[]} - A list of API specification lint runs.
 */
export type GetApiCatalogServiceSpecificationLints = z.infer<
  typeof getApiCatalogServiceSpecificationLints
>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogServiceSpecificationLints application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceSpecificationLintsResponse = z.lazy(() => {
  return z
    .object({
      meta: getApiCatalogServiceSpecificationLintsMetaResponse,
      data: z.array(getApiCatalogServiceSpecificationLintsDataResponse),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogServiceSpecificationLints application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceSpecificationLintsRequest = z.lazy(() => {
  return z
    .object({
      meta: getApiCatalogServiceSpecificationLintsMetaRequest,
      data: z.array(getApiCatalogServiceSpecificationLintsDataRequest),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});
