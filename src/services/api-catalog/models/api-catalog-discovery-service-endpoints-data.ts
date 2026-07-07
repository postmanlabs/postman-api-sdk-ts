import { z } from 'zod';

/**
 * Zod schema for the ApiCatalogDiscoveryServiceEndpointsData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const apiCatalogDiscoveryServiceEndpointsData = z.lazy(() => {
  return z.object({
    method: z.string().optional(),
    path: z.string().optional(),
    description: z.string().optional().nullable(),
    host: z.string().optional(),
  });
});

/**
 * Information about a service's endpoint.
 * @typedef  {ApiCatalogDiscoveryServiceEndpointsData} apiCatalogDiscoveryServiceEndpointsData - Information about a service's endpoint. - Information about a service's endpoint.
 * @property {string} - The endpoint's HTTP method.
 * @property {string} - The endpoint's URL path.
 * @property {string} - The endpoint's description.
 * @property {string} - The endpoint's host.
 */
export type ApiCatalogDiscoveryServiceEndpointsData = z.infer<
  typeof apiCatalogDiscoveryServiceEndpointsData
>;

/**
 * Zod schema for mapping API responses to the ApiCatalogDiscoveryServiceEndpointsData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCatalogDiscoveryServiceEndpointsDataResponse = z.lazy(() => {
  return z
    .object({
      method: z.string().optional(),
      path: z.string().optional(),
      description: z.string().optional().nullable(),
      host: z.string().optional(),
    })
    .transform((data) => ({
      method: data['method'],
      path: data['path'],
      description: data['description'],
      host: data['host'],
    }));
});

/**
 * Zod schema for mapping the ApiCatalogDiscoveryServiceEndpointsData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCatalogDiscoveryServiceEndpointsDataRequest = z.lazy(() => {
  return z
    .object({
      method: z.string().optional(),
      path: z.string().optional(),
      description: z.string().optional().nullable(),
      host: z.string().optional(),
    })
    .transform((data) => ({
      method: data['method'],
      path: data['path'],
      description: data['description'],
      host: data['host'],
    }));
});
