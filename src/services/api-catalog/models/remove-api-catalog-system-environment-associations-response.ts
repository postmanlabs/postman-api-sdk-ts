import { z } from 'zod';
import {
  RemoveApiCatalogSystemEnvironmentAssociationsMetaData,
  removeApiCatalogSystemEnvironmentAssociationsMetaData,
  removeApiCatalogSystemEnvironmentAssociationsMetaDataRequest,
  removeApiCatalogSystemEnvironmentAssociationsMetaDataResponse,
} from './remove-api-catalog-system-environment-associations-meta-data';
import {
  RemoveApiCatalogSystemEnvironmentAssociationsData,
  removeApiCatalogSystemEnvironmentAssociationsData,
  removeApiCatalogSystemEnvironmentAssociationsDataRequest,
  removeApiCatalogSystemEnvironmentAssociationsDataResponse,
} from './remove-api-catalog-system-environment-associations-data';

/**
 * Zod schema for the RemoveApiCatalogSystemEnvironmentAssociationsResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const removeApiCatalogSystemEnvironmentAssociationsResponse = z.lazy(() => {
  return z.object({
    meta: removeApiCatalogSystemEnvironmentAssociationsMetaData,
    data: z.array(removeApiCatalogSystemEnvironmentAssociationsData),
  });
});

/**
 *
 * @typedef  {RemoveApiCatalogSystemEnvironmentAssociationsResponse} removeApiCatalogSystemEnvironmentAssociationsResponse
 * @property {RemoveApiCatalogSystemEnvironmentAssociationsMetaData} - The response's meta information for paginated results.
 * @property {RemoveApiCatalogSystemEnvironmentAssociationsData[]}
 */
export type RemoveApiCatalogSystemEnvironmentAssociationsResponse = z.infer<
  typeof removeApiCatalogSystemEnvironmentAssociationsResponse
>;

/**
 * Zod schema for mapping API responses to the RemoveApiCatalogSystemEnvironmentAssociationsResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const removeApiCatalogSystemEnvironmentAssociationsResponseResponse = z.lazy(() => {
  return z
    .object({
      meta: removeApiCatalogSystemEnvironmentAssociationsMetaDataResponse,
      data: z.array(removeApiCatalogSystemEnvironmentAssociationsDataResponse),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the RemoveApiCatalogSystemEnvironmentAssociationsResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const removeApiCatalogSystemEnvironmentAssociationsResponseRequest = z.lazy(() => {
  return z
    .object({
      meta: removeApiCatalogSystemEnvironmentAssociationsMetaDataRequest,
      data: z.array(removeApiCatalogSystemEnvironmentAssociationsDataRequest),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});
