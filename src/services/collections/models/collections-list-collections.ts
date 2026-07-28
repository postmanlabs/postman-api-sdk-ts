import { z } from 'zod';
import {
  CollectionsFork,
  collectionsFork,
  collectionsForkRequest,
  collectionsForkResponse,
} from './collections-fork';

/**
 * Zod schema for the CollectionsListCollections model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionsListCollections = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    owner: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    uid: z.string().optional(),
    fork: collectionsFork.optional(),
    isPublic: z.boolean().optional(),
  });
});

/**
 * Information about the collection.
 * @typedef  {CollectionsListCollections} collectionsListCollections - Information about the collection. - Information about the collection.
 * @property {string} - The collection's ID.
 * @property {string} - The collection's name.
 * @property {string} - The owner of the collection.
 * @property {string} - The collection's creation date and time.
 * @property {string} - The date and time at which the collection was last updated.
 * @property {string} - The collection's unique ID.
 * @property {CollectionsFork} - If the collection is [forked](https://learning.postman.com/docs/collaborating-in-postman/version-control/#forking-postman-entities), the fork's information.
 * @property {boolean} - If true, the collection is public and visible to all users.
 */
export type CollectionsListCollections = z.infer<typeof collectionsListCollections>;

/**
 * Zod schema for mapping API responses to the CollectionsListCollections application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionsListCollectionsResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      owner: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      uid: z.string().optional(),
      fork: collectionsForkResponse.optional(),
      isPublic: z.boolean().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      owner: data['owner'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      uid: data['uid'],
      fork: data['fork'],
      isPublic: data['isPublic'],
    }));
});

/**
 * Zod schema for mapping the CollectionsListCollections application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionsListCollectionsRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      owner: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      uid: z.string().optional(),
      fork: collectionsForkRequest.optional(),
      isPublic: z.boolean().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      owner: data['owner'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      uid: data['uid'],
      fork: data['fork'],
      isPublic: data['isPublic'],
    }));
});
