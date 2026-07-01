import { z } from 'zod';
import {
  ApiCatalogSystemEnvironmentsFiltersData,
  apiCatalogSystemEnvironmentsFiltersData,
  apiCatalogSystemEnvironmentsFiltersDataRequest,
  apiCatalogSystemEnvironmentsFiltersDataResponse,
} from './api-catalog-system-environments-filters-data';

/**
 * Zod schema for the ApiCatalogSystemEnvironmentsMetaData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const apiCatalogSystemEnvironmentsMetaData = z.lazy(() => {
  return z.object({
    total: z.number(),
    nextCursor: z.string().nullable(),
    limit: z.number(),
    filters: apiCatalogSystemEnvironmentsFiltersData.optional(),
  });
});

/**
 * The response's meta information for paginated results.
 * @typedef  {ApiCatalogSystemEnvironmentsMetaData} apiCatalogSystemEnvironmentsMetaData - The response's meta information for paginated results. - The response's meta information for paginated results.
 * @property {number} - The number of records that match the defined criteria.
 * @property {string} - The pagination cursor that points to the next record in the results set.
 * @property {number} - The maximum number of records in the paginated response.
 * @property {ApiCatalogSystemEnvironmentsFiltersData} - The applied filters, if any.
 */
export type ApiCatalogSystemEnvironmentsMetaData = z.infer<
  typeof apiCatalogSystemEnvironmentsMetaData
>;

/**
 * Zod schema for mapping API responses to the ApiCatalogSystemEnvironmentsMetaData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCatalogSystemEnvironmentsMetaDataResponse = z.lazy(() => {
  return z
    .object({
      total: z.number(),
      nextCursor: z.string().nullable(),
      limit: z.number(),
      filters: apiCatalogSystemEnvironmentsFiltersDataResponse.optional(),
    })
    .transform((data) => ({
      total: data['total'],
      nextCursor: data['nextCursor'],
      limit: data['limit'],
      filters: data['filters'],
    }));
});

/**
 * Zod schema for mapping the ApiCatalogSystemEnvironmentsMetaData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCatalogSystemEnvironmentsMetaDataRequest = z.lazy(() => {
  return z
    .object({
      total: z.number(),
      nextCursor: z.string().nullable(),
      limit: z.number(),
      filters: apiCatalogSystemEnvironmentsFiltersDataRequest.optional(),
    })
    .transform((data) => ({
      total: data['total'],
      nextCursor: data['nextCursor'],
      limit: data['limit'],
      filters: data['filters'],
    }));
});
