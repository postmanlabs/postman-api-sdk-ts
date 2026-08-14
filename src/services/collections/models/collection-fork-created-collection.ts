import { z } from 'zod';
import {
  CollectionFork,
  collectionFork,
  collectionForkRequest,
  collectionForkResponse,
} from './collection-fork';

/**
 * Zod schema for the CollectionForkCreatedCollection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionForkCreatedCollection = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    fork: collectionFork.optional(),
    uid: z.string().optional(),
  });
});

/**
 * Information about the forked collection.
 * @typedef {CollectionForkCreatedCollection} collectionForkCreatedCollection
 * @property {string} id - The forked collection's ID.
 * @property {string} name - The collection's name.
 * @property {CollectionFork} fork - Information about the collection's fork.
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
      fork: collectionForkResponse.optional(),
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
      fork: collectionForkRequest.optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      fork: data['fork'],
      uid: data['uid'],
    }));
});
