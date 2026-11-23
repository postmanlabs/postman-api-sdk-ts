import { z } from 'zod';

/**
 * Zod schema for the GetApiCatalogServiceData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogServiceData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    version: z.string().optional().nullable(),
    sourceEnvironment: z.string().optional().nullable(),
    systemEnvironmentId: z.string().optional().nullable(),
    status: z.string().optional(),
    endpointsCount: z.number().optional(),
    discoverySource: z.string().optional(),
    tags: z.array(z.string()).max(50).optional(),
    discoveredAt: z.string().optional(),
  });
});

/**
 * Information about the discovered service.
 * @typedef {GetApiCatalogServiceData} getApiCatalogServiceData
 * @property {string} id - The service's ID.
 * @property {string} name - The service's name.
 * @property {string} version - The service's version.
 * @property {string} sourceEnvironment - The source environment in which the service was discovered.
 * @property {string} systemEnvironmentId - The mapped system environment's ID. Returns a null value if the environment is not mapped.
 * @property {string} status - The service's current status.
 * @property {number} endpointsCount - The total number of endpoints associated with the service.
 * @property {string} discoverySource - The source through which the service was discovered.
 * @property {string[]} tags - A list of tags associated with the service.
 * @property {string} discoveredAt - The date and time at which the service was first discovered.
 */
export type GetApiCatalogServiceData = z.infer<typeof getApiCatalogServiceData>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogServiceData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      version: z.string().optional().nullable(),
      sourceEnvironment: z.string().optional().nullable(),
      systemEnvironmentId: z.string().optional().nullable(),
      status: z.string().optional(),
      endpointsCount: z.number().optional(),
      discoverySource: z.string().optional(),
      tags: z.array(z.string()).max(50).optional(),
      discoveredAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      version: data['version'],
      sourceEnvironment: data['sourceEnvironment'],
      systemEnvironmentId: data['systemEnvironmentId'],
      status: data['status'],
      endpointsCount: data['endpointsCount'],
      discoverySource: data['discoverySource'],
      tags: data['tags'],
      discoveredAt: data['discoveredAt'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogServiceData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      version: z.string().optional().nullable(),
      sourceEnvironment: z.string().optional().nullable(),
      systemEnvironmentId: z.string().optional().nullable(),
      status: z.string().optional(),
      endpointsCount: z.number().optional(),
      discoverySource: z.string().optional(),
      tags: z.array(z.string()).max(50).optional(),
      discoveredAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      version: data['version'],
      sourceEnvironment: data['sourceEnvironment'],
      systemEnvironmentId: data['systemEnvironmentId'],
      status: data['status'],
      endpointsCount: data['endpointsCount'],
      discoverySource: data['discoverySource'],
      tags: data['tags'],
      discoveredAt: data['discoveredAt'],
    }));
});
