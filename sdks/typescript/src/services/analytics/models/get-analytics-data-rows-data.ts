import { z } from 'zod';

/**
 * Zod schema for the GetAnalyticsDataRowsData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAnalyticsDataRowsData = z.lazy(() => {
  return z.union([z.string(), z.number(), z.number(), z.boolean()]);
});

/**
 *
 * @typedef  {GetAnalyticsDataRowsData} getAnalyticsDataRowsData
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {boolean}
 */
export type GetAnalyticsDataRowsData = z.infer<typeof getAnalyticsDataRowsData>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getAnalyticsDataRowsDataResponse = z.lazy(() => {
  return z.union([z.string(), z.number(), z.number(), z.boolean()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getAnalyticsDataRowsDataRequest = z.lazy(() => {
  return z.union([z.string(), z.number(), z.number(), z.boolean()]);
});
