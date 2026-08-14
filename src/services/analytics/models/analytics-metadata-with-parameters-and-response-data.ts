import { z } from 'zod';
import {
  GetAnalyticsMetadataResourceMetricsDataDetailed,
  getAnalyticsMetadataResourceMetricsDataDetailed,
  getAnalyticsMetadataResourceMetricsDataDetailedRequest,
  getAnalyticsMetadataResourceMetricsDataDetailedResponse,
} from './get-analytics-metadata-resource-metrics-data-detailed';

/**
 * Zod schema for the AnalyticsMetadataWithParametersAndResponseData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const analyticsMetadataWithParametersAndResponseData = z.lazy(() => {
  return z.object({
    resource: z.string().optional(),
    description: z.string().optional(),
    type: z.string().optional(),
    isRequired: z.boolean().optional(),
    metrics: z.array(getAnalyticsMetadataResourceMetricsDataDetailed).optional(),
  });
});

/**
 * Detailed information about the resource including its metrics, parameters, and response schema.
 * @typedef {AnalyticsMetadataWithParametersAndResponseData} analyticsMetadataWithParametersAndResponseData
 * @property {string} resource - The name of the resource.
 * @property {string} description - A description of the resource.
 * @property {string} type - The metric's data type.
 * @property {boolean} isRequired - If true, the metric is required.
 * @property {GetAnalyticsMetadataResourceMetricsDataDetailed[]} metrics - A list of the resource's detailed accepted metrics values.
 */
export type AnalyticsMetadataWithParametersAndResponseData = z.infer<
  typeof analyticsMetadataWithParametersAndResponseData
>;

/**
 * Zod schema for mapping API responses to the AnalyticsMetadataWithParametersAndResponseData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const analyticsMetadataWithParametersAndResponseDataResponse = z.lazy(() => {
  return z
    .object({
      resource: z.string().optional(),
      description: z.string().optional(),
      type: z.string().optional(),
      isRequired: z.boolean().optional(),
      metrics: z.array(getAnalyticsMetadataResourceMetricsDataDetailedResponse).optional(),
    })
    .transform((data) => ({
      resource: data['resource'],
      description: data['description'],
      type: data['type'],
      isRequired: data['isRequired'],
      metrics: data['metrics'],
    }));
});

/**
 * Zod schema for mapping the AnalyticsMetadataWithParametersAndResponseData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const analyticsMetadataWithParametersAndResponseDataRequest = z.lazy(() => {
  return z
    .object({
      resource: z.string().optional(),
      description: z.string().optional(),
      type: z.string().optional(),
      isRequired: z.boolean().optional(),
      metrics: z.array(getAnalyticsMetadataResourceMetricsDataDetailedRequest).optional(),
    })
    .transform((data) => ({
      resource: data['resource'],
      description: data['description'],
      type: data['type'],
      isRequired: data['isRequired'],
      metrics: data['metrics'],
    }));
});
