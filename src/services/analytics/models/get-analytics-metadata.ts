import { z } from 'zod';
import {
  GetAnalyticsMetadataData,
  getAnalyticsMetadataData,
  getAnalyticsMetadataDataRequest,
  getAnalyticsMetadataDataResponse,
} from './get-analytics-metadata-data';

/**
 * Zod schema for the GetAnalyticsMetadata model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAnalyticsMetadata = z.lazy(() => {
  return z.object({
    data: getAnalyticsMetadataData.optional(),
  });
});

/**
 * @typedef {GetAnalyticsMetadata} getAnalyticsMetadata
 * @property {GetAnalyticsMetadataData} data - The Analytics API's metadata information.
 */
export type GetAnalyticsMetadata = z.infer<typeof getAnalyticsMetadata>;

/**
 * Zod schema for mapping API responses to the GetAnalyticsMetadata application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsMetadataResponse = z.lazy(() => {
  return z
    .object({
      data: getAnalyticsMetadataDataResponse.optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the GetAnalyticsMetadata application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsMetadataRequest = z.lazy(() => {
  return z
    .object({
      data: getAnalyticsMetadataDataRequest.optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});
