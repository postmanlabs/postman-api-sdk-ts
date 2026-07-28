import { z } from 'zod';

/**
 * Zod schema for the UsersForkedCollectionsMeta model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const usersForkedCollectionsMeta = z.lazy(() => {
  return z.object({
    total: z.number().optional(),
    nextCursor: z.string().optional().nullable(),
    inaccessibleFork: z.number().optional(),
  });
});

/**
 * The response's meta information for paginated results.
 * @typedef  {UsersForkedCollectionsMeta} usersForkedCollectionsMeta - The response's meta information for paginated results. - The response's meta information for paginated results.
 * @property {number} - The total number of forked collections.
 * @property {string} - The pagination cursor that points to the next record in the results set.
 * @property {number} - The total number of forked collections that the user cannot access.
 */
export type UsersForkedCollectionsMeta = z.infer<typeof usersForkedCollectionsMeta>;

/**
 * Zod schema for mapping API responses to the UsersForkedCollectionsMeta application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const usersForkedCollectionsMetaResponse = z.lazy(() => {
  return z
    .object({
      total: z.number().optional(),
      nextCursor: z.string().optional().nullable(),
      inaccessibleFork: z.number().optional(),
    })
    .transform((data) => ({
      total: data['total'],
      nextCursor: data['nextCursor'],
      inaccessibleFork: data['inaccessibleFork'],
    }));
});

/**
 * Zod schema for mapping the UsersForkedCollectionsMeta application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const usersForkedCollectionsMetaRequest = z.lazy(() => {
  return z
    .object({
      total: z.number().optional(),
      nextCursor: z.string().optional().nullable(),
      inaccessibleFork: z.number().optional(),
    })
    .transform((data) => ({
      total: data['total'],
      nextCursor: data['nextCursor'],
      inaccessibleFork: data['inaccessibleFork'],
    }));
});
