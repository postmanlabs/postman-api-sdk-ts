import { z } from 'zod';

/**
 * Zod schema for the ApiCatalogSystemEnvironmentsFiltersData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const apiCatalogSystemEnvironmentsFiltersData = z.lazy(() => {
  return z.object({
    isProduction: z.boolean().optional(),
  });
});

/**
 * The applied filters, if any.
 * @typedef  {ApiCatalogSystemEnvironmentsFiltersData} apiCatalogSystemEnvironmentsFiltersData - The applied filters, if any. - The applied filters, if any.
 * @property {boolean}
 */
export type ApiCatalogSystemEnvironmentsFiltersData = z.infer<
  typeof apiCatalogSystemEnvironmentsFiltersData
>;

/**
 * Zod schema for mapping API responses to the ApiCatalogSystemEnvironmentsFiltersData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCatalogSystemEnvironmentsFiltersDataResponse = z.lazy(() => {
  return z
    .object({
      isProduction: z.boolean().optional(),
    })
    .transform((data) => ({
      isProduction: data['isProduction'],
    }));
});

/**
 * Zod schema for mapping the ApiCatalogSystemEnvironmentsFiltersData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCatalogSystemEnvironmentsFiltersDataRequest = z.lazy(() => {
  return z
    .object({
      isProduction: z.boolean().optional(),
    })
    .transform((data) => ({
      isProduction: data['isProduction'],
    }));
});
