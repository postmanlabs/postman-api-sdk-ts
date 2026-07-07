import { z } from 'zod';

/**
 * Zod schema for the GetApiCatalogServiceEntityCountData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogServiceEntityCountData = z.lazy(() => {
  return z.object({
    collections: z.number(),
    specifications: z.number(),
    monitors: z.number(),
    mocks: z.number(),
    flows: z.number(),
    environments: z.number(),
  });
});

/**
 * Information about the workspace's entities.
 * @typedef  {GetApiCatalogServiceEntityCountData} getApiCatalogServiceEntityCountData - Information about the workspace's entities. - Information about the workspace's entities.
 * @property {number} - The total number of collections.
 * @property {number} - The total number of API specifications.
 * @property {number} - The total number of monitors.
 * @property {number} - The total number of mock servers.
 * @property {number} - The total number of Postman Flows.
 * @property {number} - The total number of environments.
 */
export type GetApiCatalogServiceEntityCountData = z.infer<
  typeof getApiCatalogServiceEntityCountData
>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogServiceEntityCountData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceEntityCountDataResponse = z.lazy(() => {
  return z
    .object({
      collections: z.number(),
      specifications: z.number(),
      monitors: z.number(),
      mocks: z.number(),
      flows: z.number(),
      environments: z.number(),
    })
    .transform((data) => ({
      collections: data['collections'],
      specifications: data['specifications'],
      monitors: data['monitors'],
      mocks: data['mocks'],
      flows: data['flows'],
      environments: data['environments'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogServiceEntityCountData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceEntityCountDataRequest = z.lazy(() => {
  return z
    .object({
      collections: z.number(),
      specifications: z.number(),
      monitors: z.number(),
      mocks: z.number(),
      flows: z.number(),
      environments: z.number(),
    })
    .transform((data) => ({
      collections: data['collections'],
      specifications: data['specifications'],
      monitors: data['monitors'],
      mocks: data['mocks'],
      flows: data['flows'],
      environments: data['environments'],
    }));
});
