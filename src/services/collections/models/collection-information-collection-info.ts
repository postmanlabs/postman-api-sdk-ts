import { z } from 'zod';
import { InfoFork, infoFork, infoForkRequest, infoForkResponse } from './info-fork';

/**
 * Zod schema for the CollectionInformationCollectionInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionInformationCollectionInfo = z.lazy(() => {
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
 * @typedef  {CollectionInformationCollectionInfo} collectionInformationCollectionInfo - Information about the collection. - Information about the collection.
 * @property {string} - The collection's Postman ID.
 * @property {string} - The collection's name.
 * @property {string} - The collection's description.
 * @property {string} - A URL to the collection's schema.
 * @property {InfoFork} - If the collection was forked from another collection, this object contains information about the fork.
 * @property {string} - The date and time at which the collection was last updated.
 * @property {string} - The collection's unique ID.
 * @property {string} - The date and time at which the collection was created.
 * @property {string} - The user ID of the user who last updated the collection.
 */
export type CollectionInformationCollectionInfo = z.infer<
  typeof collectionInformationCollectionInfo
>;

/**
 * Zod schema for mapping API responses to the CollectionInformationCollectionInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionInformationCollectionInfoResponse = z.lazy(() => {
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
 * Zod schema for mapping the CollectionInformationCollectionInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionInformationCollectionInfoRequest = z.lazy(() => {
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
