import { z } from 'zod';
import {
  CollectionForkData,
  collectionForkData,
  collectionForkDataRequest,
  collectionForkDataResponse,
} from './collection-fork-data';

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
    fork: collectionForkData.optional(),
    isPublic: z.boolean().optional(),
  });
});

/**
 * Information about the collection.
 * @typedef {CollectionsListCollections} collectionsListCollections
 * @property {string} id - The collection's ID.
 * @property {string} name - The collection's name.
 * @property {string} owner - The owner of the collection.
 * @property {string} createdAt - The collection's creation date and time.
 * @property {string} updatedAt - The date and time at which the collection was last updated.
 * @property {string} uid - The collection's unique ID.
 * @property {CollectionForkData} fork - If the collection is [forked](https://learning.postman.com/docs/collaborating-in-postman/version-control/#forking-postman-entities) from another collection, the fork's information.
 * @property {boolean} isPublic - If true, the collection is public and visible to all users.
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
      fork: collectionForkDataResponse.optional(),
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
      fork: collectionForkDataRequest.optional(),
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
