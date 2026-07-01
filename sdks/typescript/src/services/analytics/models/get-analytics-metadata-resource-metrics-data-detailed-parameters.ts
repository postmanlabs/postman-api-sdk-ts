import { z } from 'zod';
import {
  GetAnalyticsMetadataResourceMetricsDataDetailedParametersView,
  getAnalyticsMetadataResourceMetricsDataDetailedParametersView,
  getAnalyticsMetadataResourceMetricsDataDetailedParametersViewRequest,
  getAnalyticsMetadataResourceMetricsDataDetailedParametersViewResponse,
} from './get-analytics-metadata-resource-metrics-data-detailed-parameters-view';
import {
  GetAnalyticsMetadataResourceMetricsDataDetailedParametersFilters,
  getAnalyticsMetadataResourceMetricsDataDetailedParametersFilters,
  getAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersRequest,
  getAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersResponse,
} from './get-analytics-metadata-resource-metrics-data-detailed-parameters-filters';
import {
  GetAnalticsMetadataPaginationData,
  getAnalticsMetadataPaginationData,
  getAnalticsMetadataPaginationDataRequest,
  getAnalticsMetadataPaginationDataResponse,
} from './get-analtics-metadata-pagination-data';

/**
 * Zod schema for the GetAnalyticsMetadataResourceMetricsDataDetailedParameters model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAnalyticsMetadataResourceMetricsDataDetailedParameters = z.lazy(() => {
  return z.object({
    view: getAnalyticsMetadataResourceMetricsDataDetailedParametersView.optional(),
    filters: getAnalyticsMetadataResourceMetricsDataDetailedParametersFilters.optional(),
    pagination: getAnalticsMetadataPaginationData.optional(),
  });
});

/**
 * Information about the metric's parameters.
 * @typedef  {GetAnalyticsMetadataResourceMetricsDataDetailedParameters} getAnalyticsMetadataResourceMetricsDataDetailedParameters - Information about the metric's parameters. - Information about the metric's parameters.
 * @property {GetAnalyticsMetadataResourceMetricsDataDetailedParametersView} - Information about the `view` parameter.
 * @property {GetAnalyticsMetadataResourceMetricsDataDetailedParametersFilters}
 * @property {GetAnalticsMetadataPaginationData} - Information about the metric's pagination parameters.
 */
export type GetAnalyticsMetadataResourceMetricsDataDetailedParameters = z.infer<
  typeof getAnalyticsMetadataResourceMetricsDataDetailedParameters
>;

/**
 * Zod schema for mapping API responses to the GetAnalyticsMetadataResourceMetricsDataDetailedParameters application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsMetadataResourceMetricsDataDetailedParametersResponse = z.lazy(() => {
  return z
    .object({
      view: getAnalyticsMetadataResourceMetricsDataDetailedParametersViewResponse.optional(),
      filters: getAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersResponse.optional(),
      pagination: getAnalticsMetadataPaginationDataResponse.optional(),
    })
    .transform((data) => ({
      view: data['view'],
      filters: data['filters'],
      pagination: data['pagination'],
    }));
});

/**
 * Zod schema for mapping the GetAnalyticsMetadataResourceMetricsDataDetailedParameters application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsMetadataResourceMetricsDataDetailedParametersRequest = z.lazy(() => {
  return z
    .object({
      view: getAnalyticsMetadataResourceMetricsDataDetailedParametersViewRequest.optional(),
      filters: getAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersRequest.optional(),
      pagination: getAnalticsMetadataPaginationDataRequest.optional(),
    })
    .transform((data) => ({
      view: data['view'],
      filters: data['filters'],
      pagination: data['pagination'],
    }));
});
