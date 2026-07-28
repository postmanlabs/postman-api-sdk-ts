import { z } from 'zod';

/**
 * Zod schema for the GetAnalticsMetadataPaginationData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAnalticsMetadataPaginationData = z.lazy(() => {
  return z.object({
    supported: z.boolean().optional(),
    allowedValues: z.array(z.string()).optional(),
  });
});

/**
 * Information about the metric's pagination parameters.
 * @typedef  {GetAnalticsMetadataPaginationData} getAnalticsMetadataPaginationData - Information about the metric's pagination parameters. - Information about the metric's pagination parameters.
 * @property {boolean} - If true, pagination is supported for this metric.
 * @property {string[]} - A list of the supported pagination parameters.
 */
export type GetAnalticsMetadataPaginationData = z.infer<typeof getAnalticsMetadataPaginationData>;

/**
 * Zod schema for mapping API responses to the GetAnalticsMetadataPaginationData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalticsMetadataPaginationDataResponse = z.lazy(() => {
  return z
    .object({
      supported: z.boolean().optional(),
      allowed_values: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      supported: data['supported'],
      allowedValues: data['allowed_values'],
    }));
});

/**
 * Zod schema for mapping the GetAnalticsMetadataPaginationData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalticsMetadataPaginationDataRequest = z.lazy(() => {
  return z
    .object({
      supported: z.boolean().optional(),
      allowedValues: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      supported: data['supported'],
      allowed_values: data['allowedValues'],
    }));
});
