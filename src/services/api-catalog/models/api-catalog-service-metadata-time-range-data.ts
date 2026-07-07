import { z } from 'zod';

/**
 * Zod schema for the ApiCatalogServiceMetadataTimeRangeData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const apiCatalogServiceMetadataTimeRangeData = z.lazy(() => {
  return z.object({
    start: z.string(),
    end: z.string(),
    label: z.string(),
  });
});

/**
 * The time window for the returned data.
 * @typedef  {ApiCatalogServiceMetadataTimeRangeData} apiCatalogServiceMetadataTimeRangeData - The time window for the returned data. - The time window for the returned data.
 * @property {string} - The start of the time window.
 * @property {string} - The end of the time window.
 * @property {Label} - The time range's label.
 */
export type ApiCatalogServiceMetadataTimeRangeData = z.infer<
  typeof apiCatalogServiceMetadataTimeRangeData
>;

/**
 * Zod schema for mapping API responses to the ApiCatalogServiceMetadataTimeRangeData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCatalogServiceMetadataTimeRangeDataResponse = z.lazy(() => {
  return z
    .object({
      start: z.string(),
      end: z.string(),
      label: z.string(),
    })
    .transform((data) => ({
      start: data['start'],
      end: data['end'],
      label: data['label'],
    }));
});

/**
 * Zod schema for mapping the ApiCatalogServiceMetadataTimeRangeData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCatalogServiceMetadataTimeRangeDataRequest = z.lazy(() => {
  return z
    .object({
      start: z.string(),
      end: z.string(),
      label: z.string(),
    })
    .transform((data) => ({
      start: data['start'],
      end: data['end'],
      label: data['label'],
    }));
});
