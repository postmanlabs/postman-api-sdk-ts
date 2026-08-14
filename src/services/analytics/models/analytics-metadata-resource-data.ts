import { z } from 'zod';
import {
  AnalyticsMetadataMetricsData,
  analyticsMetadataMetricsData,
  analyticsMetadataMetricsDataRequest,
  analyticsMetadataMetricsDataResponse,
} from './analytics-metadata-metrics-data';

/**
 * Zod schema for the AnalyticsMetadataResourceData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const analyticsMetadataResourceData = z.lazy(() => {
  return z.object({
    resource: z.string().optional(),
    description: z.string().optional(),
    metrics: z.array(analyticsMetadataMetricsData).optional(),
  });
});

/**
 * Information about the resource.
 * @typedef {AnalyticsMetadataResourceData} analyticsMetadataResourceData
 * @property {string} resource - The name of the resource.
 * @property {string} description - A description of the resource.
 * @property {AnalyticsMetadataMetricsData[]} metrics - A list of the resource's accepted metrics values.
 */
export type AnalyticsMetadataResourceData = z.infer<typeof analyticsMetadataResourceData>;

/**
 * Zod schema for mapping API responses to the AnalyticsMetadataResourceData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const analyticsMetadataResourceDataResponse = z.lazy(() => {
  return z
    .object({
      resource: z.string().optional(),
      description: z.string().optional(),
      metrics: z.array(analyticsMetadataMetricsDataResponse).optional(),
    })
    .transform((data) => ({
      resource: data['resource'],
      description: data['description'],
      metrics: data['metrics'],
    }));
});

/**
 * Zod schema for mapping the AnalyticsMetadataResourceData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const analyticsMetadataResourceDataRequest = z.lazy(() => {
  return z
    .object({
      resource: z.string().optional(),
      description: z.string().optional(),
      metrics: z.array(analyticsMetadataMetricsDataRequest).optional(),
    })
    .transform((data) => ({
      resource: data['resource'],
      description: data['description'],
      metrics: data['metrics'],
    }));
});
