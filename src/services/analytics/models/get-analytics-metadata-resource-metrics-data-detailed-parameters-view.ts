import { z } from 'zod';

/**
 * Zod schema for the GetAnalyticsMetadataResourceMetricsDataDetailedParametersView model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAnalyticsMetadataResourceMetricsDataDetailedParametersView = z.lazy(() => {
  return z.object({
    type: z.string().optional(),
    isRequired: z.boolean().optional(),
    allowedValues: z.array(z.string()).optional(),
    description: z.string().optional(),
  });
});

/**
 * Information about the `view` parameter.
 * @typedef  {GetAnalyticsMetadataResourceMetricsDataDetailedParametersView} getAnalyticsMetadataResourceMetricsDataDetailedParametersView - Information about the `view` parameter. - Information about the `view` parameter.
 * @property {string} - The parameter's type.
 * @property {boolean} - If true, the parameter is required.
 * @property {string[]} - A list of the parameter's accepted values.
 * @property {string} - The parameter's description.
 */
export type GetAnalyticsMetadataResourceMetricsDataDetailedParametersView = z.infer<
  typeof getAnalyticsMetadataResourceMetricsDataDetailedParametersView
>;

/**
 * Zod schema for mapping API responses to the GetAnalyticsMetadataResourceMetricsDataDetailedParametersView application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsMetadataResourceMetricsDataDetailedParametersViewResponse = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      isRequired: z.boolean().optional(),
      allowed_values: z.array(z.string()).optional(),
      description: z.string().optional(),
    })
    .transform((data) => ({
      type: data['type'],
      isRequired: data['isRequired'],
      allowedValues: data['allowed_values'],
      description: data['description'],
    }));
});

/**
 * Zod schema for mapping the GetAnalyticsMetadataResourceMetricsDataDetailedParametersView application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsMetadataResourceMetricsDataDetailedParametersViewRequest = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      isRequired: z.boolean().optional(),
      allowedValues: z.array(z.string()).optional(),
      description: z.string().optional(),
    })
    .transform((data) => ({
      type: data['type'],
      isRequired: data['isRequired'],
      allowed_values: data['allowedValues'],
      description: data['description'],
    }));
});
