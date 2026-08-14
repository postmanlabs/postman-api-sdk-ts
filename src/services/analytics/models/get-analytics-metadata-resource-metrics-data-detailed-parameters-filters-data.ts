import { z } from 'zod';

/**
 * Zod schema for the GetAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersData = z.lazy(() => {
  return z.object({
    type: z.string().optional(),
    isRequired: z.boolean().optional(),
    allowedValues: z.array(z.string()).optional(),
  });
});

/**
 * Information about the filter.
 * @typedef {GetAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersData} getAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersData
 * @property {string} type - The parameter's type.
 * @property {boolean} isRequired - If true, the parameter is required.
 * @property {string[]} allowedValues - A list of the parameter's accepted values.
 */
export type GetAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersData = z.infer<
  typeof getAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersData
>;

/**
 * Zod schema for mapping API responses to the GetAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersDataResponse = z.lazy(
  () => {
    return z
      .object({
        type: z.string().optional(),
        isRequired: z.boolean().optional(),
        allowed_values: z.array(z.string()).optional(),
      })
      .transform((data) => ({
        type: data['type'],
        isRequired: data['isRequired'],
        allowedValues: data['allowed_values'],
      }));
  },
);

/**
 * Zod schema for mapping the GetAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsMetadataResourceMetricsDataDetailedParametersFiltersDataRequest = z.lazy(
  () => {
    return z
      .object({
        type: z.string().optional(),
        isRequired: z.boolean().optional(),
        allowedValues: z.array(z.string()).optional(),
      })
      .transform((data) => ({
        type: data['type'],
        isRequired: data['isRequired'],
        allowed_values: data['allowedValues'],
      }));
  },
);
