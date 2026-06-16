import { z } from 'zod';
import {
  GetAnalyticsDataColumnsData,
  getAnalyticsDataColumnsData,
  getAnalyticsDataColumnsDataRequest,
  getAnalyticsDataColumnsDataResponse,
} from './get-analytics-data-columns-data';

/**
 * Zod schema for the GetAnalyticsDataSchema model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAnalyticsDataSchema = z.lazy(() => {
  return z.object({
    columns: z.array(getAnalyticsDataColumnsData).optional(),
  });
});

/**
 *
 * @typedef  {GetAnalyticsDataSchema} getAnalyticsDataSchema
 * @property {GetAnalyticsDataColumnsData[]} - A list of column entries.
 */
export type GetAnalyticsDataSchema = z.infer<typeof getAnalyticsDataSchema>;

/**
 * Zod schema for mapping API responses to the GetAnalyticsDataSchema application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsDataSchemaResponse = z.lazy(() => {
  return z
    .object({
      columns: z.array(getAnalyticsDataColumnsDataResponse).optional(),
    })
    .transform((data) => ({
      columns: data['columns'],
    }));
});

/**
 * Zod schema for mapping the GetAnalyticsDataSchema application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsDataSchemaRequest = z.lazy(() => {
  return z
    .object({
      columns: z.array(getAnalyticsDataColumnsDataRequest).optional(),
    })
    .transform((data) => ({
      columns: data['columns'],
    }));
});
