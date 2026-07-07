import { z } from 'zod';
import {
  GetAnalyticsMetadataResourceMetricsDataSummaryDataSchema,
  getAnalyticsMetadataResourceMetricsDataSummaryDataSchema,
  getAnalyticsMetadataResourceMetricsDataSummaryDataSchemaRequest,
  getAnalyticsMetadataResourceMetricsDataSummaryDataSchemaResponse,
} from './get-analytics-metadata-resource-metrics-data-summary-data-schema';

/**
 * Zod schema for the GetAnalyticsMetadataResourceMetricsDataSummaryData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAnalyticsMetadataResourceMetricsDataSummaryData = z.lazy(() => {
  return z.object({
    schema: getAnalyticsMetadataResourceMetricsDataSummaryDataSchema.optional(),
  });
});

/**
 * Information about the metric's `summary` parameter.
 * @typedef  {GetAnalyticsMetadataResourceMetricsDataSummaryData} getAnalyticsMetadataResourceMetricsDataSummaryData - Information about the metric's `summary` parameter. - Information about the metric's `summary` parameter.
 * @property {GetAnalyticsMetadataResourceMetricsDataSummaryDataSchema} - The response schema for the `summary` view.
 */
export type GetAnalyticsMetadataResourceMetricsDataSummaryData = z.infer<
  typeof getAnalyticsMetadataResourceMetricsDataSummaryData
>;

/**
 * Zod schema for mapping API responses to the GetAnalyticsMetadataResourceMetricsDataSummaryData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsMetadataResourceMetricsDataSummaryDataResponse = z.lazy(() => {
  return z
    .object({
      schema: getAnalyticsMetadataResourceMetricsDataSummaryDataSchemaResponse.optional(),
    })
    .transform((data) => ({
      schema: data['schema'],
    }));
});

/**
 * Zod schema for mapping the GetAnalyticsMetadataResourceMetricsDataSummaryData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsMetadataResourceMetricsDataSummaryDataRequest = z.lazy(() => {
  return z
    .object({
      schema: getAnalyticsMetadataResourceMetricsDataSummaryDataSchemaRequest.optional(),
    })
    .transform((data) => ({
      schema: data['schema'],
    }));
});
