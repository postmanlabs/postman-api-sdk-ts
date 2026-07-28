import { z } from 'zod';
import {
  GetAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersData,
  getAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersData,
  getAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersDataRequest,
  getAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersDataResponse,
} from './get-analytics-metadata-resource-metrics-data-detailed-parameters-filters-data';

/**
 * Zod schema for the Object model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const object = z.lazy(() => {
  return z.object({
    workspaceType: getAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersData.optional(),
    duration: getAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersData.optional(),
  });
});

/**
 * Information about the filter parameters.
 * @typedef  {Object} object - Information about the filter parameters. - Information about the filter parameters.
 * @property {GetAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersData} - Information about the filter.
 * @property {GetAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersData} - Information about the filter.
 */
export type Object = z.infer<typeof object>;

/**
 * Zod schema for mapping API responses to the Object application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const objectResponse = z.lazy(() => {
  return z
    .object({
      workspace_type:
        getAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersDataResponse.optional(),
      duration:
        getAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersDataResponse.optional(),
    })
    .transform((data) => ({
      workspaceType: data['workspace_type'],
      duration: data['duration'],
    }));
});

/**
 * Zod schema for mapping the Object application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const objectRequest = z.lazy(() => {
  return z
    .object({
      workspaceType:
        getAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersDataRequest.optional(),
      duration:
        getAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersDataRequest.optional(),
    })
    .transform((data) => ({
      workspace_type: data['workspaceType'],
      duration: data['duration'],
    }));
});
