import { z } from 'zod';
import {
  PostApiCatalogDiscoveryServiceData,
  postApiCatalogDiscoveryServiceData,
  postApiCatalogDiscoveryServiceDataRequest,
  postApiCatalogDiscoveryServiceDataResponse,
} from './post-api-catalog-discovery-service-data';

/**
 * Zod schema for the PostApiCatalogDiscoveryServices model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const postApiCatalogDiscoveryServices = z.lazy(() => {
  return z.object({
    discoveredServices: z.array(postApiCatalogDiscoveryServiceData),
  });
});

/**
 *
 * @typedef  {PostApiCatalogDiscoveryServices} postApiCatalogDiscoveryServices
 * @property {PostApiCatalogDiscoveryServiceData[]} - A list of discovered services to add to the API Catalog.
 */
export type PostApiCatalogDiscoveryServices = z.infer<typeof postApiCatalogDiscoveryServices>;

/**
 * Zod schema for mapping API responses to the PostApiCatalogDiscoveryServices application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const postApiCatalogDiscoveryServicesResponse1 = z.lazy(() => {
  return z
    .object({
      discoveredServices: z.array(postApiCatalogDiscoveryServiceDataResponse),
    })
    .transform((data) => ({
      discoveredServices: data['discoveredServices'],
    }));
});

/**
 * Zod schema for mapping the PostApiCatalogDiscoveryServices application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const postApiCatalogDiscoveryServicesRequest = z.lazy(() => {
  return z
    .object({
      discoveredServices: z.array(postApiCatalogDiscoveryServiceDataRequest),
    })
    .transform((data) => ({
      discoveredServices: data['discoveredServices'],
    }));
});
