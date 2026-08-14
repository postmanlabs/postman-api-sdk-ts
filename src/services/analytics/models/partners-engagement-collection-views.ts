import { z } from 'zod';
import {
  PartnersEngagementCollectionViewsSchema,
  partnersEngagementCollectionViewsSchema,
  partnersEngagementCollectionViewsSchemaRequest,
  partnersEngagementCollectionViewsSchemaResponse,
} from './partners-engagement-collection-views-schema';
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
 * Zod schema for the PartnersEngagementCollectionViews model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const partnersEngagementCollectionViews = z.lazy(() => {
  return z.object({
    schema: partnersEngagementCollectionViewsSchema.optional(),
    rows: z.array(z.array(getAnalyticsDataRowsData)).optional(),
    pagination: paginationData.optional(),
  });
});

/**
 * Information about partner users' views of collections in a workspace.
 * @typedef {PartnersEngagementCollectionViews} partnersEngagementCollectionViews
 * @property {PartnersEngagementCollectionViewsSchema} schema
 * @property {GetAnalyticsDataRowsData[][]} rows - A list of data row entries. Each row is an array of values that correspond to the columns defined in the schema.
 * @property {PaginationData} pagination - Information about the response pagination.
 */
export type PartnersEngagementCollectionViews = z.infer<typeof partnersEngagementCollectionViews>;

/**
 * Zod schema for mapping API responses to the PartnersEngagementCollectionViews application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const partnersEngagementCollectionViewsResponse = z.lazy(() => {
  return z
    .object({
      schema: partnersEngagementCollectionViewsSchemaResponse.optional(),
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
 * Zod schema for mapping the PartnersEngagementCollectionViews application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const partnersEngagementCollectionViewsRequest = z.lazy(() => {
  return z
    .object({
      schema: partnersEngagementCollectionViewsSchemaRequest.optional(),
      rows: z.array(z.array(getAnalyticsDataRowsDataRequest)).optional(),
      pagination: paginationDataRequest.optional(),
    })
    .transform((data) => ({
      schema: data['schema'],
      rows: data['rows'],
      pagination: data['pagination'],
    }));
});
