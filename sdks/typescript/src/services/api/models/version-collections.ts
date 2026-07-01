import { z } from 'zod';

/**
 * Zod schema for the VersionCollections model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const versionCollections = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    type: z.string().optional(),
  });
});

/**
 * Information about the collection.
 * @typedef  {VersionCollections} versionCollections - Information about the collection. - Information about the collection.
 * @property {string} - The collection's ID.
 * @property {string} - The collection's name.
 */
export type VersionCollections = z.infer<typeof versionCollections>;

/**
 * Zod schema for mapping API responses to the VersionCollections application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const versionCollectionsResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      type: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      type: data['type'],
    }));
});

/**
 * Zod schema for mapping the VersionCollections application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const versionCollectionsRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      type: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      type: data['type'],
    }));
});
