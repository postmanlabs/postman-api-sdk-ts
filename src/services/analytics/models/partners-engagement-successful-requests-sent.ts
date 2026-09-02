import { z } from 'zod';
import {
  PartnersEngagementSuccessfulRequestsSentSchema,
  partnersEngagementSuccessfulRequestsSentSchema,
  partnersEngagementSuccessfulRequestsSentSchemaRequest,
  partnersEngagementSuccessfulRequestsSentSchemaResponse,
} from './partners-engagement-successful-requests-sent-schema';
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
 * Zod schema for the PartnersEngagementSuccessfulRequestsSent model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const partnersEngagementSuccessfulRequestsSent = z.lazy(() => {
  return z.object({
    schema: partnersEngagementSuccessfulRequestsSentSchema.optional(),
    rows: z.array(z.array(getAnalyticsDataRowsData)).optional(),
    pagination: paginationData.optional(),
  });
});

/**
 * Information about partner users' successful request calls in a workspace.
 * @typedef {PartnersEngagementSuccessfulRequestsSent} partnersEngagementSuccessfulRequestsSent
 * @property {PartnersEngagementSuccessfulRequestsSentSchema} schema - The shape of the analytics data (column definitions).
 * @property {GetAnalyticsDataRowsData[][]} rows - A list of data row entries. Each row is an array of values that correspond to the columns defined in the schema.
 * @property {PaginationData} pagination - Information about the response pagination.
 */
export type PartnersEngagementSuccessfulRequestsSent = z.infer<
  typeof partnersEngagementSuccessfulRequestsSent
>;

/**
 * Zod schema for mapping API responses to the PartnersEngagementSuccessfulRequestsSent application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const partnersEngagementSuccessfulRequestsSentResponse = z.lazy(() => {
  return z
    .object({
      schema: partnersEngagementSuccessfulRequestsSentSchemaResponse.optional(),
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
 * Zod schema for mapping the PartnersEngagementSuccessfulRequestsSent application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const partnersEngagementSuccessfulRequestsSentRequest = z.lazy(() => {
  return z
    .object({
      schema: partnersEngagementSuccessfulRequestsSentSchemaRequest.optional(),
      rows: z.array(z.array(getAnalyticsDataRowsDataRequest)).optional(),
      pagination: paginationDataRequest.optional(),
    })
    .transform((data) => ({
      schema: data['schema'],
      rows: data['rows'],
      pagination: data['pagination'],
    }));
});
