import { z } from 'zod';
import {
  analyticsMetadataResourceData,
  analyticsMetadataResourceDataRequest,
  analyticsMetadataResourceDataResponse,
} from './analytics-metadata-resource-data';
import {
  analyticsMetadataWithParametersAndResponseData,
  analyticsMetadataWithParametersAndResponseDataRequest,
  analyticsMetadataWithParametersAndResponseDataResponse,
} from './analytics-metadata-with-parameters-and-response-data';

/**
 * Zod schema for the DataResources model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const dataResources = z.lazy(() => {
  return z.union([analyticsMetadataResourceData, analyticsMetadataWithParametersAndResponseData]);
});

/**
 *
 * @typedef  {DataResources} dataResources
 * @property {AnalyticsMetadataResourceData} - Information about the resource.
 * @property {AnalyticsMetadataWithParametersAndResponseData} - Detailed information about the resource including its metrics, parameters, and response schema.
 */
export type DataResources = z.infer<typeof dataResources>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dataResourcesResponse = z.lazy(() => {
  return z.union([
    analyticsMetadataResourceDataResponse,
    analyticsMetadataWithParametersAndResponseDataResponse,
  ]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dataResourcesRequest = z.lazy(() => {
  return z.union([
    analyticsMetadataResourceDataRequest,
    analyticsMetadataWithParametersAndResponseDataRequest,
  ]);
});
