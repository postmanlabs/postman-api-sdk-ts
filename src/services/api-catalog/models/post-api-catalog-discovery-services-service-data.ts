import { z } from 'zod';

/**
 * Zod schema for the PostApiCatalogDiscoveryServicesServiceData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const postApiCatalogDiscoveryServicesServiceData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    organizationId: z.number().optional(),
    name: z.string().optional(),
    description: z.string().optional().nullable(),
    version: z.string().optional().nullable(),
    sourceEnvironment: z.string().optional().nullable(),
    systemEnvironmentId: z.string().optional().nullable(),
    tags: z.array(z.string()).max(50).optional(),
    status: z.string().optional(),
    endpointsCount: z.number().optional(),
    providerServiceId: z.string().optional(),
    discoveredAt: z.string().optional(),
    discoveredBy: z.number().optional(),
    lastSyncedAt: z.string().optional(),
  });
});

/**
 * Information about a discovered service.
 * @typedef  {PostApiCatalogDiscoveryServicesServiceData} postApiCatalogDiscoveryServicesServiceData - Information about a discovered service. - Information about a discovered service.
 * @property {string} - The service's ID.
 * @property {number} - The ID of the organization that the service belongs to.
 * @property {string} - The servie's name.
 * @property {string} - The service's description.
 * @property {string} - The service's version.
 * @property {string} - The source environment in which the service was discovered.
 * @property {string} - The mapped system environment's ID. Returns a null value if the environment is not mapped.
 * @property {string[]} - A list of tags associated with the service.
 * @property {string} - The service's current status.
 * @property {number} - The total number of endpoints associated with the service.
 * @property {string} - The ID of the service in the source registry.
 * @property {string} - The date and time at which the service was first discovered.
 * @property {number} - The user ID of the user who discovered or ingested the service.
 * @property {string} - The date and time of the most recent service sync.
 */
export type PostApiCatalogDiscoveryServicesServiceData = z.infer<
  typeof postApiCatalogDiscoveryServicesServiceData
>;

/**
 * Zod schema for mapping API responses to the PostApiCatalogDiscoveryServicesServiceData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const postApiCatalogDiscoveryServicesServiceDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      organizationId: z.number().optional(),
      name: z.string().optional(),
      description: z.string().optional().nullable(),
      version: z.string().optional().nullable(),
      sourceEnvironment: z.string().optional().nullable(),
      systemEnvironmentId: z.string().optional().nullable(),
      tags: z.array(z.string()).max(50).optional(),
      status: z.string().optional(),
      endpointsCount: z.number().optional(),
      providerServiceId: z.string().optional(),
      discoveredAt: z.string().optional(),
      discoveredBy: z.number().optional(),
      lastSyncedAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      organizationId: data['organizationId'],
      name: data['name'],
      description: data['description'],
      version: data['version'],
      sourceEnvironment: data['sourceEnvironment'],
      systemEnvironmentId: data['systemEnvironmentId'],
      tags: data['tags'],
      status: data['status'],
      endpointsCount: data['endpointsCount'],
      providerServiceId: data['providerServiceId'],
      discoveredAt: data['discoveredAt'],
      discoveredBy: data['discoveredBy'],
      lastSyncedAt: data['lastSyncedAt'],
    }));
});

/**
 * Zod schema for mapping the PostApiCatalogDiscoveryServicesServiceData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const postApiCatalogDiscoveryServicesServiceDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      organizationId: z.number().optional(),
      name: z.string().optional(),
      description: z.string().optional().nullable(),
      version: z.string().optional().nullable(),
      sourceEnvironment: z.string().optional().nullable(),
      systemEnvironmentId: z.string().optional().nullable(),
      tags: z.array(z.string()).max(50).optional(),
      status: z.string().optional(),
      endpointsCount: z.number().optional(),
      providerServiceId: z.string().optional(),
      discoveredAt: z.string().optional(),
      discoveredBy: z.number().optional(),
      lastSyncedAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      organizationId: data['organizationId'],
      name: data['name'],
      description: data['description'],
      version: data['version'],
      sourceEnvironment: data['sourceEnvironment'],
      systemEnvironmentId: data['systemEnvironmentId'],
      tags: data['tags'],
      status: data['status'],
      endpointsCount: data['endpointsCount'],
      providerServiceId: data['providerServiceId'],
      discoveredAt: data['discoveredAt'],
      discoveredBy: data['discoveredBy'],
      lastSyncedAt: data['lastSyncedAt'],
    }));
});
