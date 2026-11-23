import { z } from 'zod';
import {
  GetAnalyticsMetadataResourceMetricsDataDetailedData,
  getAnalyticsMetadataResourceMetricsDataDetailedData,
  getAnalyticsMetadataResourceMetricsDataDetailedDataRequest,
  getAnalyticsMetadataResourceMetricsDataDetailedDataResponse,
} from './get-analytics-metadata-resource-metrics-data-detailed-data';
import {
  GetAnalyticsMetadataResourceMetricsDataSummaryData,
  getAnalyticsMetadataResourceMetricsDataSummaryData,
  getAnalyticsMetadataResourceMetricsDataSummaryDataRequest,
  getAnalyticsMetadataResourceMetricsDataSummaryDataResponse,
} from './get-analytics-metadata-resource-metrics-data-summary-data';

/**
 * Zod schema for the GetAnalyticsMetadataResourceMetricsDataDetailedResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAnalyticsMetadataResourceMetricsDataDetailedResponse_3 = z.lazy(() => {
  return z.object({
    detailed: getAnalyticsMetadataResourceMetricsDataDetailedData.optional(),
    summary: getAnalyticsMetadataResourceMetricsDataSummaryData.optional(),
  });
});

/**
 * Information about the metric's `response` parameters.
 * @typedef {GetAnalyticsMetadataResourceMetricsDataDetailedResponse} getAnalyticsMetadataResourceMetricsDataDetailedResponse_3
 * @property {GetAnalyticsMetadataResourceMetricsDataDetailedData} detailed - Information about the metric's `detailed` parameter.
 * @property {GetAnalyticsMetadataResourceMetricsDataSummaryData} summary - Information about the metric's `summary` parameter.
 */
export type GetAnalyticsMetadataResourceMetricsDataDetailedResponse = z.infer<
  typeof getAnalyticsMetadataResourceMetricsDataDetailedResponse_3
>;

/**
 * Zod schema for mapping API responses to the GetAnalyticsMetadataResourceMetricsDataDetailedResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsMetadataResourceMetricsDataDetailedResponseResponse = z.lazy(() => {
  return z
    .object({
      detailed: getAnalyticsMetadataResourceMetricsDataDetailedDataResponse.optional(),
      summary: getAnalyticsMetadataResourceMetricsDataSummaryDataResponse.optional(),
    })
    .transform((data) => ({
      detailed: data['detailed'],
      summary: data['summary'],
    }));
});

/**
 * Zod schema for mapping the GetAnalyticsMetadataResourceMetricsDataDetailedResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsMetadataResourceMetricsDataDetailedResponseRequest = z.lazy(() => {
  return z
    .object({
      detailed: getAnalyticsMetadataResourceMetricsDataDetailedDataRequest.optional(),
      summary: getAnalyticsMetadataResourceMetricsDataSummaryDataRequest.optional(),
    })
    .transform((data) => ({
      detailed: data['detailed'],
      summary: data['summary'],
    }));
});
