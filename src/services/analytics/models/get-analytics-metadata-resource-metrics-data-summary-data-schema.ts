import { z } from 'zod';
import {
  GetAnalyticsDataColumnsData,
  getAnalyticsDataColumnsData,
  getAnalyticsDataColumnsDataRequest,
  getAnalyticsDataColumnsDataResponse,
} from './get-analytics-data-columns-data';

/**
 * Zod schema for the GetAnalyticsMetadataResourceMetricsDataSummaryDataSchema model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAnalyticsMetadataResourceMetricsDataSummaryDataSchema = z.lazy(() => {
  return z.object({
    columns: z.array(getAnalyticsDataColumnsData).optional(),
  });
});

/**
 * The response schema for the `summary` view.
 * @typedef {GetAnalyticsMetadataResourceMetricsDataSummaryDataSchema} getAnalyticsMetadataResourceMetricsDataSummaryDataSchema
 * @property {GetAnalyticsDataColumnsData[]} columns - A list of column entries.
 */
export type GetAnalyticsMetadataResourceMetricsDataSummaryDataSchema = z.infer<
  typeof getAnalyticsMetadataResourceMetricsDataSummaryDataSchema
>;

/**
 * Zod schema for mapping API responses to the GetAnalyticsMetadataResourceMetricsDataSummaryDataSchema application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsMetadataResourceMetricsDataSummaryDataSchemaResponse = z.lazy(() => {
  return z
    .object({
      columns: z.array(getAnalyticsDataColumnsDataResponse).optional(),
    })
    .transform((data) => ({
      columns: data['columns'],
    }));
});

/**
 * Zod schema for mapping the GetAnalyticsMetadataResourceMetricsDataSummaryDataSchema application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsMetadataResourceMetricsDataSummaryDataSchemaRequest = z.lazy(() => {
  return z
    .object({
      columns: z.array(getAnalyticsDataColumnsDataRequest).optional(),
    })
    .transform((data) => ({
      columns: data['columns'],
    }));
});
