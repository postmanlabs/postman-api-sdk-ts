import { z } from 'zod';
import {
  PartnersEngagementRequestsSentSchema,
  partnersEngagementRequestsSentSchema,
  partnersEngagementRequestsSentSchemaRequest,
  partnersEngagementRequestsSentSchemaResponse,
} from './partners-engagement-requests-sent-schema';
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
 * Zod schema for the PartnersEngagementRequestsSent model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const partnersEngagementRequestsSent = z.lazy(() => {
  return z.object({
    schema: partnersEngagementRequestsSentSchema.optional(),
    rows: z.array(z.array(getAnalyticsDataRowsData)).optional(),
    pagination: paginationData.optional(),
  });
});

/**
 * Information about requests sent by partner users.
 * @typedef  {PartnersEngagementRequestsSent} partnersEngagementRequestsSent - Information about requests sent by partner users. - Information about requests sent by partner users.
 * @property {PartnersEngagementRequestsSentSchema}
 * @property {GetAnalyticsDataRowsData[][]} - A list of data row entries. Each row is an array of values that correspond to the columns defined in the schema.
 * @property {PaginationData} - Information about the response pagination.
 */
export type PartnersEngagementRequestsSent = z.infer<typeof partnersEngagementRequestsSent>;

/**
 * Zod schema for mapping API responses to the PartnersEngagementRequestsSent application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const partnersEngagementRequestsSentResponse = z.lazy(() => {
  return z
    .object({
      schema: partnersEngagementRequestsSentSchemaResponse.optional(),
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
 * Zod schema for mapping the PartnersEngagementRequestsSent application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const partnersEngagementRequestsSentRequest = z.lazy(() => {
  return z
    .object({
      schema: partnersEngagementRequestsSentSchemaRequest.optional(),
      rows: z.array(z.array(getAnalyticsDataRowsDataRequest)).optional(),
      pagination: paginationDataRequest.optional(),
    })
    .transform((data) => ({
      schema: data['schema'],
      rows: data['rows'],
      pagination: data['pagination'],
    }));
});
