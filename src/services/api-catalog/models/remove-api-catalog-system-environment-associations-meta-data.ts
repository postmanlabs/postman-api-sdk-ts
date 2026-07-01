import { z } from 'zod';

/**
 * Zod schema for the RemoveApiCatalogSystemEnvironmentAssociationsMetaData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const removeApiCatalogSystemEnvironmentAssociationsMetaData = z.lazy(() => {
  return z.object({
    deleted: z.number(),
    notFound: z.number(),
  });
});

/**
 * The response's meta information for paginated results.
 * @typedef  {RemoveApiCatalogSystemEnvironmentAssociationsMetaData} removeApiCatalogSystemEnvironmentAssociationsMetaData - The response's meta information for paginated results. - The response's meta information for paginated results.
 * @property {number} - The number of associations successfully removed.
 * @property {number} - The number of environment IDs with no existing association to remove.
 */
export type RemoveApiCatalogSystemEnvironmentAssociationsMetaData = z.infer<
  typeof removeApiCatalogSystemEnvironmentAssociationsMetaData
>;

/**
 * Zod schema for mapping API responses to the RemoveApiCatalogSystemEnvironmentAssociationsMetaData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const removeApiCatalogSystemEnvironmentAssociationsMetaDataResponse = z.lazy(() => {
  return z
    .object({
      deleted: z.number(),
      notFound: z.number(),
    })
    .transform((data) => ({
      deleted: data['deleted'],
      notFound: data['notFound'],
    }));
});

/**
 * Zod schema for mapping the RemoveApiCatalogSystemEnvironmentAssociationsMetaData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const removeApiCatalogSystemEnvironmentAssociationsMetaDataRequest = z.lazy(() => {
  return z
    .object({
      deleted: z.number(),
      notFound: z.number(),
    })
    .transform((data) => ({
      deleted: data['deleted'],
      notFound: data['notFound'],
    }));
});
