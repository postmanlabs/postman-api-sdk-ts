import { z } from 'zod';
import {
  UsersForkedCollectionsData,
  usersForkedCollectionsData,
  usersForkedCollectionsDataRequest,
  usersForkedCollectionsDataResponse,
} from './users-forked-collections-data';
import {
  UsersForkedCollectionsMeta,
  usersForkedCollectionsMeta,
  usersForkedCollectionsMetaRequest,
  usersForkedCollectionsMetaResponse,
} from './users-forked-collections-meta';

/**
 * Zod schema for the UsersForkedCollections model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const usersForkedCollections = z.lazy(() => {
  return z.object({
    data: z.array(usersForkedCollectionsData).optional(),
    meta: usersForkedCollectionsMeta.optional(),
  });
});

/**
 *
 * @typedef  {UsersForkedCollections} usersForkedCollections
 * @property {UsersForkedCollectionsData[]} - A list of the user's forked collections.
 * @property {UsersForkedCollectionsMeta} - The response's meta information for paginated results.
 */
export type UsersForkedCollections = z.infer<typeof usersForkedCollections>;

/**
 * Zod schema for mapping API responses to the UsersForkedCollections application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const usersForkedCollectionsResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(usersForkedCollectionsDataResponse).optional(),
      meta: usersForkedCollectionsMetaResponse.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the UsersForkedCollections application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const usersForkedCollectionsRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(usersForkedCollectionsDataRequest).optional(),
      meta: usersForkedCollectionsMetaRequest.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});
