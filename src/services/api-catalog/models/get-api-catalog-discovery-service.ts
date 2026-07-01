import { z } from 'zod';
import {
  ApiCatalogDiscoveryServicesProviderMetadata,
  apiCatalogDiscoveryServicesProviderMetadata,
  apiCatalogDiscoveryServicesProviderMetadataRequest,
  apiCatalogDiscoveryServicesProviderMetadataResponse,
} from './api-catalog-discovery-services-provider-metadata';
import {
  GetApiCatalogDiscoveryServiceApiDefinitionData,
  getApiCatalogDiscoveryServiceApiDefinitionData,
  getApiCatalogDiscoveryServiceApiDefinitionDataRequest,
  getApiCatalogDiscoveryServiceApiDefinitionDataResponse,
} from './get-api-catalog-discovery-service-api-definition-data';
import {
  ApiCatalogDiscoveryServiceEndpointsData,
  apiCatalogDiscoveryServiceEndpointsData,
  apiCatalogDiscoveryServiceEndpointsDataRequest,
  apiCatalogDiscoveryServiceEndpointsDataResponse,
} from './api-catalog-discovery-service-endpoints-data';

/**
 * Zod schema for the GetApiCatalogDiscoveryService model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogDiscoveryService = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    organizationId: z.number().optional(),
    discoverySource: z.string().optional(),
    name: z.string().optional(),
    description: z.string().optional().nullable(),
    version: z.string().optional(),
    sourceEnvironment: z.string().optional().nullable(),
    systemEnvironmentId: z.string().optional().nullable(),
    tags: z.array(z.string()).max(50).optional(),
    status: z.string().optional(),
    providerServiceId: z.string().optional(),
    providerMetadata: apiCatalogDiscoveryServicesProviderMetadata.optional(),
    apiDefinition: getApiCatalogDiscoveryServiceApiDefinitionData.optional(),
    endpoints: z.array(apiCatalogDiscoveryServiceEndpointsData).optional(),
    endpointsCount: z.number().optional(),
    discoveredAt: z.string().optional(),
    discoveredBy: z.number().optional(),
    lastSyncedAt: z.string().optional(),
    managedWorkspaceId: z.string().optional().nullable(),
    integratedAt: z.string().optional().nullable(),
  });
});

/**
 * Information about the discovered service.
 * @typedef  {GetApiCatalogDiscoveryService} getApiCatalogDiscoveryService - Information about the discovered service. - Information about the discovered service.
 * @property {string} - The service's ID.
 * @property {number} - The ID of the organization that the service belongs to.
 * @property {string} - The source through which the service was discovered.
 * @property {string} - The servie's name.
 * @property {string} - The service's description.
 * @property {string} - The service's version.
 * @property {string} - The source environment in which the service was discovered.
 * @property {string} - The mapped system environment's ID. Returns a null value if the environment is not mapped.
 * @property {string[]} - A list of tags associated with the service.
 * @property {string} - The service's current status.
 * @property {string} - The ID of the service in the source registry.
 * @property {ApiCatalogDiscoveryServicesProviderMetadata} - Additional metadata from the discovery source provider.
 * @property {GetApiCatalogDiscoveryServiceApiDefinitionData} - The API definition associated with the service.
 * @property {ApiCatalogDiscoveryServiceEndpointsData[]} - A list of the service's endpoints.
 * @property {number} - The total number of endpoints associated with the service.
 * @property {string} - The date and time at which the service was first discovered.
 * @property {number} - The user ID of the user who discovered or ingested the service.
 * @property {string} - The date and time of the most recent service sync.
 * @property {string} - The ID of the Postman workspace that the service has been integrated into. Returns a null value if the service is not integrated.
 * @property {string} - The date and time at which the service was linked to a Postman workspace. Returns a null value if the service is not integrated.
 */
export type GetApiCatalogDiscoveryService = z.infer<typeof getApiCatalogDiscoveryService>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogDiscoveryService application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogDiscoveryServiceResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      organizationId: z.number().optional(),
      discoverySource: z.string().optional(),
      name: z.string().optional(),
      description: z.string().optional().nullable(),
      version: z.string().optional(),
      sourceEnvironment: z.string().optional().nullable(),
      systemEnvironmentId: z.string().optional().nullable(),
      tags: z.array(z.string()).max(50).optional(),
      status: z.string().optional(),
      providerServiceId: z.string().optional(),
      providerMetadata: apiCatalogDiscoveryServicesProviderMetadataResponse.optional(),
      apiDefinition: getApiCatalogDiscoveryServiceApiDefinitionDataResponse.optional(),
      endpoints: z.array(apiCatalogDiscoveryServiceEndpointsDataResponse).optional(),
      endpointsCount: z.number().optional(),
      discoveredAt: z.string().optional(),
      discoveredBy: z.number().optional(),
      lastSyncedAt: z.string().optional(),
      managedWorkspaceId: z.string().optional().nullable(),
      integratedAt: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      organizationId: data['organizationId'],
      discoverySource: data['discoverySource'],
      name: data['name'],
      description: data['description'],
      version: data['version'],
      sourceEnvironment: data['sourceEnvironment'],
      systemEnvironmentId: data['systemEnvironmentId'],
      tags: data['tags'],
      status: data['status'],
      providerServiceId: data['providerServiceId'],
      providerMetadata: data['providerMetadata'],
      apiDefinition: data['apiDefinition'],
      endpoints: data['endpoints'],
      endpointsCount: data['endpointsCount'],
      discoveredAt: data['discoveredAt'],
      discoveredBy: data['discoveredBy'],
      lastSyncedAt: data['lastSyncedAt'],
      managedWorkspaceId: data['managedWorkspaceId'],
      integratedAt: data['integratedAt'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogDiscoveryService application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogDiscoveryServiceRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      organizationId: z.number().optional(),
      discoverySource: z.string().optional(),
      name: z.string().optional(),
      description: z.string().optional().nullable(),
      version: z.string().optional(),
      sourceEnvironment: z.string().optional().nullable(),
      systemEnvironmentId: z.string().optional().nullable(),
      tags: z.array(z.string()).max(50).optional(),
      status: z.string().optional(),
      providerServiceId: z.string().optional(),
      providerMetadata: apiCatalogDiscoveryServicesProviderMetadataRequest.optional(),
      apiDefinition: getApiCatalogDiscoveryServiceApiDefinitionDataRequest.optional(),
      endpoints: z.array(apiCatalogDiscoveryServiceEndpointsDataRequest).optional(),
      endpointsCount: z.number().optional(),
      discoveredAt: z.string().optional(),
      discoveredBy: z.number().optional(),
      lastSyncedAt: z.string().optional(),
      managedWorkspaceId: z.string().optional().nullable(),
      integratedAt: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      organizationId: data['organizationId'],
      discoverySource: data['discoverySource'],
      name: data['name'],
      description: data['description'],
      version: data['version'],
      sourceEnvironment: data['sourceEnvironment'],
      systemEnvironmentId: data['systemEnvironmentId'],
      tags: data['tags'],
      status: data['status'],
      providerServiceId: data['providerServiceId'],
      providerMetadata: data['providerMetadata'],
      apiDefinition: data['apiDefinition'],
      endpoints: data['endpoints'],
      endpointsCount: data['endpointsCount'],
      discoveredAt: data['discoveredAt'],
      discoveredBy: data['discoveredBy'],
      lastSyncedAt: data['lastSyncedAt'],
      managedWorkspaceId: data['managedWorkspaceId'],
      integratedAt: data['integratedAt'],
    }));
});
