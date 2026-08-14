import { z } from 'zod';
import { InfoFork, infoFork, infoForkRequest, infoForkResponse } from './info-fork';

/**
 * Zod schema for the CollectionInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionInfo = z.lazy(() => {
  return z.object({
    _postmanId: z.string().optional(),
    name: z.string().optional(),
    description: z.string().optional(),
    schema: z.string().optional(),
    fork: infoFork.optional(),
    updatedAt: z.string().optional(),
    uid: z.string().optional(),
    createdAt: z.string().optional(),
    lastUpdatedBy: z.string().optional(),
  });
});

/**
 * Information about the collection.
 * @typedef {CollectionInfo} collectionInfo
 * @property {string} _postmanId - The collection's Postman ID.
 * @property {string} name - The collection's name.
 * @property {string} description - The collection's description.
 * @property {string} schema - A URL to the collection's schema.
 * @property {InfoFork} fork - If the collection was forked from another collection, this object contains information about the fork.
 * @property {string} updatedAt - The date and time at which the collection was last updated.
 * @property {string} uid - The collection's unique ID.
 * @property {string} createdAt - The date and time at which the collection was created.
 * @property {string} lastUpdatedBy - The user ID of the user who last updated the collection.
 */
export type CollectionInfo = z.infer<typeof collectionInfo>;

/**
 * Zod schema for mapping API responses to the CollectionInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionInfoResponse = z.lazy(() => {
  return z
    .object({
      _postman_id: z.string().optional(),
      name: z.string().optional(),
      description: z.string().optional(),
      schema: z.string().optional(),
      fork: infoForkResponse.optional(),
      updatedAt: z.string().optional(),
      uid: z.string().optional(),
      createdAt: z.string().optional(),
      lastUpdatedBy: z.string().optional(),
    })
    .transform((data) => ({
      _postmanId: data['_postman_id'],
      name: data['name'],
      description: data['description'],
      schema: data['schema'],
      fork: data['fork'],
      updatedAt: data['updatedAt'],
      uid: data['uid'],
      createdAt: data['createdAt'],
      lastUpdatedBy: data['lastUpdatedBy'],
    }));
});

/**
 * Zod schema for mapping the CollectionInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionInfoRequest = z.lazy(() => {
  return z
    .object({
      _postmanId: z.string().optional(),
      name: z.string().optional(),
      description: z.string().optional(),
      schema: z.string().optional(),
      fork: infoForkRequest.optional(),
      updatedAt: z.string().optional(),
      uid: z.string().optional(),
      createdAt: z.string().optional(),
      lastUpdatedBy: z.string().optional(),
    })
    .transform((data) => ({
      _postman_id: data['_postmanId'],
      name: data['name'],
      description: data['description'],
      schema: data['schema'],
      fork: data['fork'],
      updatedAt: data['updatedAt'],
      uid: data['uid'],
      createdAt: data['createdAt'],
      lastUpdatedBy: data['lastUpdatedBy'],
    }));
});
