import { z } from 'zod';
import {
  GetAnalyticsDataSchema,
  getAnalyticsDataSchema,
  getAnalyticsDataSchemaRequest,
  getAnalyticsDataSchemaResponse,
} from './get-analytics-data-schema';
import {
  GetAnalyticsDataRowsData,
  getAnalyticsDataRowsData,
  getAnalyticsDataRowsDataRequest,
  getAnalyticsDataRowsDataResponse,
} from './get-analytics-data-rows-data';
import {
  PaginationData,
  paginationData,
  paginationDataRequest,
  paginationDataResponse,
} from './pagination-data';

/**
 * Zod schema for the PartnersEngagementPartnersData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const partnersEngagementPartnersData = z.lazy(() => {
  return z.object({
    schema: getAnalyticsDataSchema.optional(),
    rows: z.array(z.array(getAnalyticsDataRowsData)).optional(),
    pagination: paginationData.optional(),
  });
});

/**
 * Information about partner users and their activity.
 * @typedef {PartnersEngagementPartnersData} partnersEngagementPartnersData
 * @property {GetAnalyticsDataSchema} schema
 * @property {GetAnalyticsDataRowsData[][]} rows - A list of data row entries. Each row is an array of values that correspond to the columns defined in the schema.
 * @property {PaginationData} pagination - Information about the response pagination.
 */
export type PartnersEngagementPartnersData = z.infer<typeof partnersEngagementPartnersData>;

/**
 * Zod schema for mapping API responses to the PartnersEngagementPartnersData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const partnersEngagementPartnersDataResponse = z.lazy(() => {
  return z
    .object({
      schema: getAnalyticsDataSchemaResponse.optional(),
      rows: z.array(z.array(getAnalyticsDataRowsDataResponse)).optional(),
      pagination: paginationDataResponse.optional(),
    })
    .transform((data) => ({
      schema: data['schema'],
      rows: data['rows'],
      pagination: data['pagination'],
    }));
});

/**
 * Zod schema for mapping the PartnersEngagementPartnersData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const partnersEngagementPartnersDataRequest = z.lazy(() => {
  return z
    .object({
      schema: getAnalyticsDataSchemaRequest.optional(),
      rows: z.array(z.array(getAnalyticsDataRowsDataRequest)).optional(),
      pagination: paginationDataRequest.optional(),
    })
    .transform((data) => ({
      schema: data['schema'],
      rows: data['rows'],
      pagination: data['pagination'],
    }));
});
