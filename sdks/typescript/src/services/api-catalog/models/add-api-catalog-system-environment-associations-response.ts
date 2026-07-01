import { z } from 'zod';
import {
  AddApiCatalogSystemEnvironmentAssociationsMetaData,
  addApiCatalogSystemEnvironmentAssociationsMetaData,
  addApiCatalogSystemEnvironmentAssociationsMetaDataRequest,
  addApiCatalogSystemEnvironmentAssociationsMetaDataResponse,
} from './add-api-catalog-system-environment-associations-meta-data';
import {
  AddApiCatalogSystemEnvironmentAssociationsData,
  addApiCatalogSystemEnvironmentAssociationsData,
  addApiCatalogSystemEnvironmentAssociationsDataRequest,
  addApiCatalogSystemEnvironmentAssociationsDataResponse,
} from './add-api-catalog-system-environment-associations-data';

/**
 * Zod schema for the AddApiCatalogSystemEnvironmentAssociationsResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addApiCatalogSystemEnvironmentAssociationsResponse = z.lazy(() => {
  return z.object({
    meta: addApiCatalogSystemEnvironmentAssociationsMetaData,
    data: z.array(addApiCatalogSystemEnvironmentAssociationsData),
  });
});

/**
 *
 * @typedef  {AddApiCatalogSystemEnvironmentAssociationsResponse} addApiCatalogSystemEnvironmentAssociationsResponse
 * @property {AddApiCatalogSystemEnvironmentAssociationsMetaData} - The response's meta information for paginated results.
 * @property {AddApiCatalogSystemEnvironmentAssociationsData[]}
 */
export type AddApiCatalogSystemEnvironmentAssociationsResponse = z.infer<
  typeof addApiCatalogSystemEnvironmentAssociationsResponse
>;

/**
 * Zod schema for mapping API responses to the AddApiCatalogSystemEnvironmentAssociationsResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addApiCatalogSystemEnvironmentAssociationsResponseResponse = z.lazy(() => {
  return z
    .object({
      meta: addApiCatalogSystemEnvironmentAssociationsMetaDataResponse,
      data: z.array(addApiCatalogSystemEnvironmentAssociationsDataResponse),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the AddApiCatalogSystemEnvironmentAssociationsResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addApiCatalogSystemEnvironmentAssociationsResponseRequest = z.lazy(() => {
  return z
    .object({
      meta: addApiCatalogSystemEnvironmentAssociationsMetaDataRequest,
      data: z.array(addApiCatalogSystemEnvironmentAssociationsDataRequest),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});
