import { z } from 'zod';

/**
 * Zod schema for the GetAnalyticsDataColumnsData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAnalyticsDataColumnsData = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    type: z.string().optional(),
    format: z.string().optional(),
    description: z.string().optional(),
  });
});

/**
 * @typedef {GetAnalyticsDataColumnsData} getAnalyticsDataColumnsData
 * @property {string} name - The name of the column.
 * @property {GetAnalyticsDataColumnsDataType} type - The data type of the column.
 * @property {string} format - The data type's format.
 * @property {string} description - A description of what the column represents.
 */
export type GetAnalyticsDataColumnsData = z.infer<typeof getAnalyticsDataColumnsData>;

/**
 * Zod schema for mapping API responses to the GetAnalyticsDataColumnsData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsDataColumnsDataResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      type: z.string().optional(),
      format: z.string().optional(),
      description: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      type: data['type'],
      format: data['format'],
      description: data['description'],
    }));
});

/**
 * Zod schema for mapping the GetAnalyticsDataColumnsData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsDataColumnsDataRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      type: z.string().optional(),
      format: z.string().optional(),
      description: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      type: data['type'],
      format: data['format'],
      description: data['description'],
    }));
});
