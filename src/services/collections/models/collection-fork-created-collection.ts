import { z } from 'zod';
import {
  CollectionForkData,
  collectionForkData,
  collectionForkDataRequest,
  collectionForkDataResponse,
} from './collection-fork-data';

/**
 * Zod schema for the CollectionForkCreatedCollection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionForkCreatedCollection = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    fork: collectionForkData.optional(),
    uid: z.string().optional(),
  });
});

/**
 * Information about the forked collection.
 * @typedef {CollectionForkCreatedCollection} collectionForkCreatedCollection
 * @property {string} id - The forked collection's ID.
 * @property {string} name - The collection's name.
 * @property {CollectionForkData} fork - If the collection is [forked](https://learning.postman.com/docs/collaborating-in-postman/version-control/#forking-postman-entities) from another collection, the fork's information.
 * @property {string} uid - The forked collection's unique ID.
 */
export type CollectionForkCreatedCollection = z.infer<typeof collectionForkCreatedCollection>;

/**
 * Zod schema for mapping API responses to the CollectionForkCreatedCollection application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionForkCreatedCollectionResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      fork: collectionForkDataResponse.optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      fork: data['fork'],
      uid: data['uid'],
    }));
});

/**
 * Zod schema for mapping the CollectionForkCreatedCollection application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionForkCreatedCollectionRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      fork: collectionForkDataRequest.optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      fork: data['fork'],
      uid: data['uid'],
    }));
});
