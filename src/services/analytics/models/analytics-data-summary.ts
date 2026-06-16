import { z } from 'zod';
import {
  AnalyticsDataObject,
  analyticsDataObject,
  analyticsDataObjectRequest,
  analyticsDataObjectResponse,
} from './analytics-data-object';

/**
 * Zod schema for the AnalyticsDataSummary model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const analyticsDataSummary = z.lazy(() => {
  return z.object({
    summary: analyticsDataObject,
  });
});

/**
 *
 * @typedef  {AnalyticsDataSummary} analyticsDataSummary
 * @property {AnalyticsDataObject} - Data analytics information.
 */
export type AnalyticsDataSummary = z.infer<typeof analyticsDataSummary>;

/**
 * Zod schema for mapping API responses to the AnalyticsDataSummary application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const analyticsDataSummaryResponse = z.lazy(() => {
  return z
    .object({
      summary: analyticsDataObjectResponse,
    })
    .transform((data) => ({
      summary: data['summary'],
    }));
});

/**
 * Zod schema for mapping the AnalyticsDataSummary application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const analyticsDataSummaryRequest = z.lazy(() => {
  return z
    .object({
      summary: analyticsDataObjectRequest,
    })
    .transform((data) => ({
      summary: data['summary'],
    }));
});
