import { z } from 'zod';
import {
  GetApiCatalogServiceCiRunsMeta,
  getApiCatalogServiceCiRunsMeta,
  getApiCatalogServiceCiRunsMetaRequest,
  getApiCatalogServiceCiRunsMetaResponse,
} from './get-api-catalog-service-ci-runs-meta';
import {
  GetApiCatalogServiceCiRunsData,
  getApiCatalogServiceCiRunsData,
  getApiCatalogServiceCiRunsDataRequest,
  getApiCatalogServiceCiRunsDataResponse,
} from './get-api-catalog-service-ci-runs-data';

/**
 * Zod schema for the GetApiCatalogServiceCiRuns model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogServiceCiRuns = z.lazy(() => {
  return z.object({
    meta: getApiCatalogServiceCiRunsMeta,
    data: z.array(getApiCatalogServiceCiRunsData),
  });
});

/**
 *
 * @typedef  {GetApiCatalogServiceCiRuns} getApiCatalogServiceCiRuns
 * @property {GetApiCatalogServiceCiRunsMeta} - The response's meta information for paginated results.
 * @property {GetApiCatalogServiceCiRunsData[]} - A list of CI collection runs.
 */
export type GetApiCatalogServiceCiRuns = z.infer<typeof getApiCatalogServiceCiRuns>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogServiceCiRuns application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceCiRunsResponse = z.lazy(() => {
  return z
    .object({
      meta: getApiCatalogServiceCiRunsMetaResponse,
      data: z.array(getApiCatalogServiceCiRunsDataResponse),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogServiceCiRuns application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceCiRunsRequest = z.lazy(() => {
  return z
    .object({
      meta: getApiCatalogServiceCiRunsMetaRequest,
      data: z.array(getApiCatalogServiceCiRunsDataRequest),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});
