import { z } from 'zod';
import {
  GetAnalyticsDataColumnsData,
  getAnalyticsDataColumnsData,
  getAnalyticsDataColumnsDataRequest,
  getAnalyticsDataColumnsDataResponse,
} from './get-analytics-data-columns-data';

/**
 * Zod schema for the PartnersEngagementSuccessfulRequestsSentSchema model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const partnersEngagementSuccessfulRequestsSentSchema = z.lazy(() => {
  return z.object({
    columns: z.array(getAnalyticsDataColumnsData).optional(),
  });
});

/**
 *
 * @typedef  {PartnersEngagementSuccessfulRequestsSentSchema} partnersEngagementSuccessfulRequestsSentSchema
 * @property {GetAnalyticsDataColumnsData[]} - A list of column entries.
 */
export type PartnersEngagementSuccessfulRequestsSentSchema = z.infer<
  typeof partnersEngagementSuccessfulRequestsSentSchema
>;

/**
 * Zod schema for mapping API responses to the PartnersEngagementSuccessfulRequestsSentSchema application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const partnersEngagementSuccessfulRequestsSentSchemaResponse = z.lazy(() => {
  return z
    .object({
      columns: z.array(getAnalyticsDataColumnsDataResponse).optional(),
    })
    .transform((data) => ({
      columns: data['columns'],
    }));
});

/**
 * Zod schema for mapping the PartnersEngagementSuccessfulRequestsSentSchema application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const partnersEngagementSuccessfulRequestsSentSchemaRequest = z.lazy(() => {
  return z
    .object({
      columns: z.array(getAnalyticsDataColumnsDataRequest).optional(),
    })
    .transform((data) => ({
      columns: data['columns'],
    }));
});
