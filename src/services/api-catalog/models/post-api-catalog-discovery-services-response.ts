import { z } from 'zod';
import {
  PostApiCatalogDiscoveryServicesServiceData,
  postApiCatalogDiscoveryServicesServiceData,
  postApiCatalogDiscoveryServicesServiceDataRequest,
  postApiCatalogDiscoveryServicesServiceDataResponse,
} from './post-api-catalog-discovery-services-service-data';
import {
  PostApiCatalogDiscoveryServicesResponseMetaData,
  postApiCatalogDiscoveryServicesResponseMetaData,
  postApiCatalogDiscoveryServicesResponseMetaDataRequest,
  postApiCatalogDiscoveryServicesResponseMetaDataResponse,
} from './post-api-catalog-discovery-services-response-meta-data';

/**
 * Zod schema for the PostApiCatalogDiscoveryServicesResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const postApiCatalogDiscoveryServicesResponse = z.lazy(() => {
  return z.object({
    data: z.array(postApiCatalogDiscoveryServicesServiceData).optional(),
    meta: postApiCatalogDiscoveryServicesResponseMetaData.optional(),
  });
});

/**
 *
 * @typedef  {PostApiCatalogDiscoveryServicesResponse} postApiCatalogDiscoveryServicesResponse
 * @property {PostApiCatalogDiscoveryServicesServiceData[]} - A list of discovered services.
 * @property {PostApiCatalogDiscoveryServicesResponseMetaData} - The operation's metadata summary.
 */
export type PostApiCatalogDiscoveryServicesResponse = z.infer<
  typeof postApiCatalogDiscoveryServicesResponse
>;

/**
 * Zod schema for mapping API responses to the PostApiCatalogDiscoveryServicesResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const postApiCatalogDiscoveryServicesResponseResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(postApiCatalogDiscoveryServicesServiceDataResponse).optional(),
      meta: postApiCatalogDiscoveryServicesResponseMetaDataResponse.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the PostApiCatalogDiscoveryServicesResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const postApiCatalogDiscoveryServicesResponseRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(postApiCatalogDiscoveryServicesServiceDataRequest).optional(),
      meta: postApiCatalogDiscoveryServicesResponseMetaDataRequest.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});
