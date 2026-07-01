import { z } from 'zod';
import {
  GetAnalyticsDataData,
  getAnalyticsDataData,
  getAnalyticsDataDataRequest,
  getAnalyticsDataDataResponse,
} from './get-analytics-data-data';

/**
 * Zod schema for the GetAnalyticsData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAnalyticsData = z.lazy(() => {
  return z.object({
    data: getAnalyticsDataData,
  });
});

/**
 *
 * @typedef  {GetAnalyticsData} getAnalyticsData
 * @property {GetAnalyticsDataData}
 */
export type GetAnalyticsData = z.infer<typeof getAnalyticsData>;

/**
 * Zod schema for mapping API responses to the GetAnalyticsData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsDataResponse = z.lazy(() => {
  return z
    .object({
      data: getAnalyticsDataDataResponse,
    })
    .transform((data) => ({
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the GetAnalyticsData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAnalyticsDataRequest = z.lazy(() => {
  return z
    .object({
      data: getAnalyticsDataDataRequest,
    })
    .transform((data) => ({
      data: data['data'],
    }));
});
