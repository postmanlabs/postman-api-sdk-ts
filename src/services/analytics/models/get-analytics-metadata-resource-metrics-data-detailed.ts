import { z } from 'zod';
import {
  GetAnalyticsMetadataResourceMetricsDataDetailedParameters,
  getAnalyticsMetadataResourceMetricsDataDetailedParameters,
  getAnalyticsMetadataResourceMetricsDataDetailedParametersRequest,
  getAnalyticsMetadataResourceMetricsDataDetailedParametersResponse,
} from './get-analytics-metadata-resource-metrics-data-detailed-parameters';
import {
  GetAnalyticsMetadataResourceMetricsDataDetailedResponse,
  getAnalyticsMetadataResourceMetricsDataDetailedResponseRequest,
  getAnalyticsMetadataResourceMetricsDataDetailedResponseResponse,
  getAnalyticsMetadataResourceMetricsDataDetailedResponse_3,
} from './get-analytics-metadata-resource-metrics-data-detailed-response';

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
    response: getAnalyticsMetadataResourceMetricsDataDetailedResponse_3.optional(),
  });
});

/**
 * Information about the resource's metric.
 * @typedef {GetAnalyticsMetadataResourceMetricsDataDetailed} getAnalyticsMetadataResourceMetricsDataDetailed
 * @property {string} metric - The metric's name.
 * @property {string} description - A description of the metric.
 * @property {string} type - The metric's data type.
 * @property {boolean} isRequired - If true, the metric is required.
 * @property {GetAnalyticsMetadataResourceMetricsDataDetailedParameters} parameters - Information about the metric's parameters.
 * @property {GetAnalyticsMetadataResourceMetricsDataDetailedResponse} response - Information about the metric's `response` parameters.
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
      response: getAnalyticsMetadataResourceMetricsDataDetailedResponseResponse.optional(),
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
      response: getAnalyticsMetadataResourceMetricsDataDetailedResponseRequest.optional(),
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
