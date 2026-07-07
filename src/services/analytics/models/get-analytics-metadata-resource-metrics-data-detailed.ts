import { z } from 'zod';
import {
  GetAnalyticsMetadataResourceMetricsDataDetailedParameters,
  getAnalyticsMetadataResourceMetricsDataDetailedParameters,
  getAnalyticsMetadataResourceMetricsDataDetailedParametersRequest,
  getAnalyticsMetadataResourceMetricsDataDetailedParametersResponse,
} from './get-analytics-metadata-resource-metrics-data-detailed-parameters';
import {
  GetAnalyticsMetadataResourceMetricsDataDetailedResponse1,
  getAnalyticsMetadataResourceMetricsDataDetailedResponse1,
  getAnalyticsMetadataResourceMetricsDataDetailedResponse1Request,
  getAnalyticsMetadataResourceMetricsDataDetailedResponse1Response,
} from './get-analytics-metadata-resource-metrics-data-detailed-response-1';

/**
 * Zod schema for the GetAnalyticsMetadataResourceMetricsDataDetailed model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAnalyticsMetadataResourceMetricsDataDetailed = z.lazy(() => {
  return z.object({
    metric: z.string().optional(),
    description: z.string().optional(),
    type: z.string().optional(),
    isRequired: z.boolean().optional(),
    parameters: getAnalyticsMetadataResourceMetricsDataDetailedParameters.optional(),
    response: getAnalyticsMetadataResourceMetricsDataDetailedResponse1.optional(),
  });
});

/**
 * Information about the resource's metric.
 * @typedef  {GetAnalyticsMetadataResourceMetricsDataDetailed} getAnalyticsMetadataResourceMetricsDataDetailed - Information about the resource's metric. - Information about the resource's metric.
 * @property {string} - The metric's name.
 * @property {string} - A description of the metric.
 * @property {string} - The metric's data type.
 * @property {boolean} - If true, the metric is required.
 * @property {GetAnalyticsMetadataResourceMetricsDataDetailedParameters} - Information about the metric's parameters.
 * @property {GetAnalyticsMetadataResourceMetricsDataDetailedResponse1} - Information about the metric's `response` parameters.
 */
export type GetAnalyticsMetadataResourceMetricsDataDetailed = z.infer<
  typeof getAnalyticsMetadataResourceMetricsDataDetailed
>;

/**
 * Zod schema for mapping API responses to the GetAnalyticsMetadataResourceMetricsDataDetailed application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsMetadataResourceMetricsDataDetailedResponse = z.lazy(() => {
  return z
    .object({
      metric: z.string().optional(),
      description: z.string().optional(),
      type: z.string().optional(),
      isRequired: z.boolean().optional(),
      parameters: getAnalyticsMetadataResourceMetricsDataDetailedParametersResponse.optional(),
      response: getAnalyticsMetadataResourceMetricsDataDetailedResponse1Response.optional(),
    })
    .transform((data) => ({
      metric: data['metric'],
      description: data['description'],
      type: data['type'],
      isRequired: data['isRequired'],
      parameters: data['parameters'],
      response: data['response'],
    }));
});

/**
 * Zod schema for mapping the GetAnalyticsMetadataResourceMetricsDataDetailed application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsMetadataResourceMetricsDataDetailedRequest = z.lazy(() => {
  return z
    .object({
      metric: z.string().optional(),
      description: z.string().optional(),
      type: z.string().optional(),
      isRequired: z.boolean().optional(),
      parameters: getAnalyticsMetadataResourceMetricsDataDetailedParametersRequest.optional(),
      response: getAnalyticsMetadataResourceMetricsDataDetailedResponse1Request.optional(),
    })
    .transform((data) => ({
      metric: data['metric'],
      description: data['description'],
      type: data['type'],
      isRequired: data['isRequired'],
      parameters: data['parameters'],
      response: data['response'],
    }));
});
