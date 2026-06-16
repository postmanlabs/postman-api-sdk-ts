import { z } from 'zod';
import {
  GetAnalyticsMetadataResourceMetricsDataDetailedDataSchema,
  getAnalyticsMetadataResourceMetricsDataDetailedDataSchema,
  getAnalyticsMetadataResourceMetricsDataDetailedDataSchemaRequest,
  getAnalyticsMetadataResourceMetricsDataDetailedDataSchemaResponse,
} from './get-analytics-metadata-resource-metrics-data-detailed-data-schema';

/**
 * Zod schema for the GetAnalyticsMetadataResourceMetricsDataDetailedData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAnalyticsMetadataResourceMetricsDataDetailedData = z.lazy(() => {
  return z.object({
    schema: getAnalyticsMetadataResourceMetricsDataDetailedDataSchema.optional(),
  });
});

/**
 * Information about the metric's `detailed` parameter.
 * @typedef  {GetAnalyticsMetadataResourceMetricsDataDetailedData} getAnalyticsMetadataResourceMetricsDataDetailedData - Information about the metric's `detailed` parameter. - Information about the metric's `detailed` parameter.
 * @property {GetAnalyticsMetadataResourceMetricsDataDetailedDataSchema} - The response schema for the `detailed` view.
 */
export type GetAnalyticsMetadataResourceMetricsDataDetailedData = z.infer<
  typeof getAnalyticsMetadataResourceMetricsDataDetailedData
>;

/**
 * Zod schema for mapping API responses to the GetAnalyticsMetadataResourceMetricsDataDetailedData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsMetadataResourceMetricsDataDetailedDataResponse = z.lazy(() => {
  return z
    .object({
      schema: getAnalyticsMetadataResourceMetricsDataDetailedDataSchemaResponse.optional(),
    })
    .transform((data) => ({
      schema: data['schema'],
    }));
});

/**
 * Zod schema for mapping the GetAnalyticsMetadataResourceMetricsDataDetailedData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsMetadataResourceMetricsDataDetailedDataRequest = z.lazy(() => {
  return z
    .object({
      schema: getAnalyticsMetadataResourceMetricsDataDetailedDataSchemaRequest.optional(),
    })
    .transform((data) => ({
      schema: data['schema'],
    }));
});
