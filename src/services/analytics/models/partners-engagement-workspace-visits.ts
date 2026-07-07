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
 * Zod schema for the PartnersEngagementWorkspaceVisits model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const partnersEngagementWorkspaceVisits = z.lazy(() => {
  return z.object({
    schema: getAnalyticsDataSchema.optional(),
    rows: z.array(z.array(getAnalyticsDataRowsData)).optional(),
    pagination: paginationData.optional(),
  });
});

/**
 * Information about partner users' workspace visits.
 * @typedef  {PartnersEngagementWorkspaceVisits} partnersEngagementWorkspaceVisits - Information about partner users' workspace visits. - Information about partner users' workspace visits.
 * @property {GetAnalyticsDataSchema}
 * @property {GetAnalyticsDataRowsData[][]} - A list of data row entries. Each row is an array of values that correspond to the columns defined in the schema.
 * @property {PaginationData} - Information about the response pagination.
 */
export type PartnersEngagementWorkspaceVisits = z.infer<typeof partnersEngagementWorkspaceVisits>;

/**
 * Zod schema for mapping API responses to the PartnersEngagementWorkspaceVisits application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const partnersEngagementWorkspaceVisitsResponse = z.lazy(() => {
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
 * Zod schema for mapping the PartnersEngagementWorkspaceVisits application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const partnersEngagementWorkspaceVisitsRequest = z.lazy(() => {
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
