import { z } from 'zod';

/**
 * Zod schema for the AddApiCatalogSystemEnvironmentAssociationsMetaData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addApiCatalogSystemEnvironmentAssociationsMetaData = z.lazy(() => {
  return z.object({
    created: z.number(),
    existing: z.number(),
    replaced: z.number(),
    excluded: z.number(),
  });
});

/**
 * The response's meta information for paginated results.
 * @typedef  {AddApiCatalogSystemEnvironmentAssociationsMetaData} addApiCatalogSystemEnvironmentAssociationsMetaData - The response's meta information for paginated results. - The response's meta information for paginated results.
 * @property {number} - The number of new associations created.
 * @property {number} - The number of associations that already existed and were unchanged.
 * @property {number} - The number of associations that were moved from a different system environment.
 * @property {number} - The number of associations that were skipped. This only returns if you pass the `allowPartial` query parameter as `true`).
 */
export type AddApiCatalogSystemEnvironmentAssociationsMetaData = z.infer<
  typeof addApiCatalogSystemEnvironmentAssociationsMetaData
>;

/**
 * Zod schema for mapping API responses to the AddApiCatalogSystemEnvironmentAssociationsMetaData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addApiCatalogSystemEnvironmentAssociationsMetaDataResponse = z.lazy(() => {
  return z
    .object({
      created: z.number(),
      existing: z.number(),
      replaced: z.number(),
      excluded: z.number(),
    })
    .transform((data) => ({
      created: data['created'],
      existing: data['existing'],
      replaced: data['replaced'],
      excluded: data['excluded'],
    }));
});

/**
 * Zod schema for mapping the AddApiCatalogSystemEnvironmentAssociationsMetaData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addApiCatalogSystemEnvironmentAssociationsMetaDataRequest = z.lazy(() => {
  return z
    .object({
      created: z.number(),
      existing: z.number(),
      replaced: z.number(),
      excluded: z.number(),
    })
    .transform((data) => ({
      created: data['created'],
      existing: data['existing'],
      replaced: data['replaced'],
      excluded: data['excluded'],
    }));
});
