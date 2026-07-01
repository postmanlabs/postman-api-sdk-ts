import { z } from 'zod';

/**
 * Zod schema for the ApiCatalogServiceCollectionData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const apiCatalogServiceCollectionData = z.lazy(() => {
  return z.object({
    id: z.string(),
    name: z.string().nullable(),
  });
});

/**
 * Information about the collection.
 * @typedef  {ApiCatalogServiceCollectionData} apiCatalogServiceCollectionData - Information about the collection. - Information about the collection.
 * @property {string} - The collection's ID.
 * @property {string} - The collection's name. If the collection was deleted, this returns a null value.
 */
export type ApiCatalogServiceCollectionData = z.infer<typeof apiCatalogServiceCollectionData>;

/**
 * Zod schema for mapping API responses to the ApiCatalogServiceCollectionData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCatalogServiceCollectionDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      name: z.string().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the ApiCatalogServiceCollectionData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCatalogServiceCollectionDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      name: z.string().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
    }));
});
