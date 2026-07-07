import { z } from 'zod';
import {
  PostApiCatalogDiscoveryServicesApiDefinitionData,
  postApiCatalogDiscoveryServicesApiDefinitionData,
  postApiCatalogDiscoveryServicesApiDefinitionDataRequest,
  postApiCatalogDiscoveryServicesApiDefinitionDataResponse,
} from './post-api-catalog-discovery-services-api-definition-data';
import {
  ApiCatalogDiscoveryServiceEndpointsData,
  apiCatalogDiscoveryServiceEndpointsData,
  apiCatalogDiscoveryServiceEndpointsDataRequest,
  apiCatalogDiscoveryServiceEndpointsDataResponse,
} from './api-catalog-discovery-service-endpoints-data';
import {
  PostApiCatalogDiscoveryServicesProviderMetadataData,
  postApiCatalogDiscoveryServicesProviderMetadataData,
  postApiCatalogDiscoveryServicesProviderMetadataDataRequest,
  postApiCatalogDiscoveryServicesProviderMetadataDataResponse,
} from './post-api-catalog-discovery-services-provider-metadata-data';

/**
 * Zod schema for the PostApiCatalogDiscoveryServiceData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const postApiCatalogDiscoveryServiceData = z.lazy(() => {
  return z.object({
    name: z.string(),
    version: z.string().optional(),
    providerServiceId: z.string().optional(),
    description: z.string().optional(),
    sourceEnvironment: z.string().optional(),
    apiDefinition: postApiCatalogDiscoveryServicesApiDefinitionData.optional(),
    endpoints: z.array(apiCatalogDiscoveryServiceEndpointsData).max(100).optional(),
    tags: z.array(z.string()).max(50).optional(),
    providerMetadata: postApiCatalogDiscoveryServicesProviderMetadataData.optional(),
  });
});

/**
 * Information about the discovered service.
 * @typedef  {PostApiCatalogDiscoveryServiceData} postApiCatalogDiscoveryServiceData - Information about the discovered service. - Information about the discovered service.
 * @property {string} - The service's name.
 * @property {string} - The service's version.
 * @property {string} - The ID of the service in the source registry. If you do not pass this property, the system uses the `{name}:{version}` value.
 * @property {string} - The service's description.
 * @property {string} - The service's source environment.
 * @property {PostApiCatalogDiscoveryServicesApiDefinitionData} - The API definition (specification) for the service. If you pass this with the `endpoints` array, this object is given preference and `endpoints` is ignored.
 * @property {ApiCatalogDiscoveryServiceEndpointsData[]} - A list of the service's endpoints. If you pass this with the `apiDefinition` array, this array is ignored.
 * @property {string[]} - A list of tags associated with the service.
 * @property {PostApiCatalogDiscoveryServicesProviderMetadataData} - Additional metadata from the discovery source provider.
 */
export type PostApiCatalogDiscoveryServiceData = z.infer<typeof postApiCatalogDiscoveryServiceData>;

/**
 * Zod schema for mapping API responses to the PostApiCatalogDiscoveryServiceData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const postApiCatalogDiscoveryServiceDataResponse = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      version: z.string().optional(),
      providerServiceId: z.string().optional(),
      description: z.string().optional(),
      sourceEnvironment: z.string().optional(),
      apiDefinition: postApiCatalogDiscoveryServicesApiDefinitionDataResponse.optional(),
      endpoints: z.array(apiCatalogDiscoveryServiceEndpointsDataResponse).max(100).optional(),
      tags: z.array(z.string()).max(50).optional(),
      providerMetadata: postApiCatalogDiscoveryServicesProviderMetadataDataResponse.optional(),
    })
    .transform((data) => ({
      name: data['name'],
      version: data['version'],
      providerServiceId: data['providerServiceId'],
      description: data['description'],
      sourceEnvironment: data['sourceEnvironment'],
      apiDefinition: data['apiDefinition'],
      endpoints: data['endpoints'],
      tags: data['tags'],
      providerMetadata: data['providerMetadata'],
    }));
});

/**
 * Zod schema for mapping the PostApiCatalogDiscoveryServiceData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const postApiCatalogDiscoveryServiceDataRequest = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      version: z.string().optional(),
      providerServiceId: z.string().optional(),
      description: z.string().optional(),
      sourceEnvironment: z.string().optional(),
      apiDefinition: postApiCatalogDiscoveryServicesApiDefinitionDataRequest.optional(),
      endpoints: z.array(apiCatalogDiscoveryServiceEndpointsDataRequest).max(100).optional(),
      tags: z.array(z.string()).max(50).optional(),
      providerMetadata: postApiCatalogDiscoveryServicesProviderMetadataDataRequest.optional(),
    })
    .transform((data) => ({
      name: data['name'],
      version: data['version'],
      providerServiceId: data['providerServiceId'],
      description: data['description'],
      sourceEnvironment: data['sourceEnvironment'],
      apiDefinition: data['apiDefinition'],
      endpoints: data['endpoints'],
      tags: data['tags'],
      providerMetadata: data['providerMetadata'],
    }));
});
