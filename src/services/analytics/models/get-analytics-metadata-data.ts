import { z } from 'zod';
import {
  DataResources,
  dataResources,
  dataResourcesRequest,
  dataResourcesResponse,
} from './data-resources';

/**
 * Zod schema for the GetAnalyticsMetadataData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAnalyticsMetadataData = z.lazy(() => {
  return z.object({
    description: z.string().optional(),
    resources: z.array(dataResources).optional(),
  });
});

/**
 * The Analytics API's metadata information.
 * @typedef {GetAnalyticsMetadataData} getAnalyticsMetadataData
 * @property {string} description - A description of the endpoint.
 * @property {DataResources[]} resources - A list of accepted resource values.
 */
export type GetAnalyticsMetadataData = z.infer<typeof getAnalyticsMetadataData>;

/**
 * Zod schema for mapping API responses to the GetAnalyticsMetadataData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsMetadataDataResponse = z.lazy(() => {
  return z
    .object({
      description: z.string().optional(),
      resources: z.array(dataResourcesResponse).optional(),
    })
    .transform((data) => ({
      description: data['description'],
      resources: data['resources'],
    }));
});

/**
 * Zod schema for mapping the GetAnalyticsMetadataData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsMetadataDataRequest = z.lazy(() => {
  return z
    .object({
      description: z.string().optional(),
      resources: z.array(dataResourcesRequest).optional(),
    })
    .transform((data) => ({
      description: data['description'],
      resources: data['resources'],
    }));
});
