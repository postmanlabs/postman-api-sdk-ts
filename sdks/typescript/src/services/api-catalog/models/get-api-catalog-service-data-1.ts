import { z } from 'zod';

/**
 * Zod schema for the GetApiCatalogServiceData1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogServiceData1 = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    version: z.string().optional(),
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
 * @typedef  {GetApiCatalogServiceData1} getApiCatalogServiceData1 - Information about the discovered service. - Information about the discovered service.
 * @property {string} - The service's ID.
 * @property {string} - The service's name.
 * @property {string} - The service's version.
 * @property {string} - The source environment in which the service was discovered.
 * @property {string} - The mapped system environment's ID. Returns a null value if the environment is not mapped.
 * @property {string} - The service's current status.
 * @property {number} - The total number of endpoints associated with the service.
 * @property {string} - The source through which the service was discovered.
 * @property {string[]} - A list of tags associated with the service.
 * @property {string} - The date and time at which the service was first discovered.
 */
export type GetApiCatalogServiceData1 = z.infer<typeof getApiCatalogServiceData1>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogServiceData1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceData1Response = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      version: z.string().optional(),
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
 * Zod schema for mapping the GetApiCatalogServiceData1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceData1Request = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      version: z.string().optional(),
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
