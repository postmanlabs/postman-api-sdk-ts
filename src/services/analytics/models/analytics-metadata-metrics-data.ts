import { z } from 'zod';

/**
 * Zod schema for the AnalyticsMetadataMetricsData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const analyticsMetadataMetricsData = z.lazy(() => {
  return z.object({
    metric: z.string().optional(),
    description: z.string().optional(),
  });
});

/**
 * Information about the resource's metric.
 * @typedef  {AnalyticsMetadataMetricsData} analyticsMetadataMetricsData - Information about the resource's metric. - Information about the resource's metric.
 * @property {string} - The metric's name.
 * @property {string} - A description of the metric.
 */
export type AnalyticsMetadataMetricsData = z.infer<typeof analyticsMetadataMetricsData>;

/**
 * Zod schema for mapping API responses to the AnalyticsMetadataMetricsData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const analyticsMetadataMetricsDataResponse = z.lazy(() => {
  return z
    .object({
      metric: z.string().optional(),
      description: z.string().optional(),
    })
    .transform((data) => ({
      metric: data['metric'],
      description: data['description'],
    }));
});

/**
 * Zod schema for mapping the AnalyticsMetadataMetricsData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const analyticsMetadataMetricsDataRequest = z.lazy(() => {
  return z
    .object({
      metric: z.string().optional(),
      description: z.string().optional(),
    })
    .transform((data) => ({
      metric: data['metric'],
      description: data['description'],
    }));
});
