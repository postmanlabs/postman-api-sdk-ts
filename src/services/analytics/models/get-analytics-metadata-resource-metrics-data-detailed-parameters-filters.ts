import { z } from 'zod';
import { object, objectRequest, objectResponse } from './object';

/**
 * Zod schema for the GetAnalyticsMetadataResourceMetricsDataDetailedParametersFilters model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAnalyticsMetadataResourceMetricsDataDetailedParametersFilters = z.lazy(() => {
  return z.union([z.array(z.string()), object]);
});

/**
 * @typedef {GetAnalyticsMetadataResourceMetricsDataDetailedParametersFilters} getAnalyticsMetadataResourceMetricsDataDetailedParametersFilters
 */
export type GetAnalyticsMetadataResourceMetricsDataDetailedParametersFilters = z.infer<
  typeof getAnalyticsMetadataResourceMetricsDataDetailedParametersFilters
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersResponse = z.lazy(
  () => {
    return z.union([z.array(z.string()), objectResponse]);
  },
);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersRequest = z.lazy(
  () => {
    return z.union([z.array(z.string()), objectRequest]);
  },
);
