import { z } from 'zod';
import {
  GetAnalyticsDataColumnsData,
  getAnalyticsDataColumnsData,
  getAnalyticsDataColumnsDataRequest,
  getAnalyticsDataColumnsDataResponse,
} from './get-analytics-data-columns-data';

/**
 * Zod schema for the PartnersEngagementRequestsSentSchema model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const partnersEngagementRequestsSentSchema = z.lazy(() => {
  return z.object({
    columns: z.array(getAnalyticsDataColumnsData).optional(),
  });
});

/**
 * The shape of the analytics data (column definitions).
 * @typedef {PartnersEngagementRequestsSentSchema} partnersEngagementRequestsSentSchema
 * @property {GetAnalyticsDataColumnsData[]} columns - A list of column entries.
 */
export type PartnersEngagementRequestsSentSchema = z.infer<
  typeof partnersEngagementRequestsSentSchema
>;

/**
 * Zod schema for mapping API responses to the PartnersEngagementRequestsSentSchema application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const partnersEngagementRequestsSentSchemaResponse = z.lazy(() => {
  return z
    .object({
      columns: z.array(getAnalyticsDataColumnsDataResponse).optional(),
    })
    .transform((data) => ({
      columns: data['columns'],
    }));
});

/**
 * Zod schema for mapping the PartnersEngagementRequestsSentSchema application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const partnersEngagementRequestsSentSchemaRequest = z.lazy(() => {
  return z
    .object({
      columns: z.array(getAnalyticsDataColumnsDataRequest).optional(),
    })
    .transform((data) => ({
      columns: data['columns'],
    }));
});
