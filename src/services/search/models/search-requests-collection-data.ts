import { z } from 'zod';

/**
 * Zod schema for the SearchRequestsCollectionData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchRequestsCollectionData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
  });
});

/**
 * Information about the collection containing the resource. Returns only for requests.
 * @typedef  {SearchRequestsCollectionData} searchRequestsCollectionData - Information about the collection containing the resource. Returns only for requests. - Information about the collection containing the resource. Returns only for requests.
 * @property {string} - The collection's ID.
 * @property {string} - The collection's name.
 */
export type SearchRequestsCollectionData = z.infer<typeof searchRequestsCollectionData>;

/**
 * Zod schema for mapping API responses to the SearchRequestsCollectionData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchRequestsCollectionDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the SearchRequestsCollectionData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchRequestsCollectionDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
    }));
});
