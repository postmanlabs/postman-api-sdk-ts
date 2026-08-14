import { z } from 'zod';
import {
  GetAnalyticsDataColumnsData,
  getAnalyticsDataColumnsData,
  getAnalyticsDataColumnsDataRequest,
  getAnalyticsDataColumnsDataResponse,
} from './get-analytics-data-columns-data';

/**
 * Zod schema for the GetAnalyticsMetadataResourceMetricsDataDetailedDataSchema model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAnalyticsMetadataResourceMetricsDataDetailedDataSchema = z.lazy(() => {
  return z.object({
    columns: z.array(getAnalyticsDataColumnsData).optional(),
  });
});

/**
 * The response schema for the `detailed` view.
 * @typedef {GetAnalyticsMetadataResourceMetricsDataDetailedDataSchema} getAnalyticsMetadataResourceMetricsDataDetailedDataSchema
 * @property {GetAnalyticsDataColumnsData[]} columns - A list of column entries.
 */
export type GetAnalyticsMetadataResourceMetricsDataDetailedDataSchema = z.infer<
  typeof getAnalyticsMetadataResourceMetricsDataDetailedDataSchema
>;

/**
 * Zod schema for mapping API responses to the GetAnalyticsMetadataResourceMetricsDataDetailedDataSchema application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsMetadataResourceMetricsDataDetailedDataSchemaResponse = z.lazy(() => {
  return z
    .object({
      columns: z.array(getAnalyticsDataColumnsDataResponse).optional(),
    })
    .transform((data) => ({
      columns: data['columns'],
    }));
});

/**
 * Zod schema for mapping the GetAnalyticsMetadataResourceMetricsDataDetailedDataSchema application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsMetadataResourceMetricsDataDetailedDataSchemaRequest = z.lazy(() => {
  return z
    .object({
      columns: z.array(getAnalyticsDataColumnsDataRequest).optional(),
    })
    .transform((data) => ({
      columns: data['columns'],
    }));
});
