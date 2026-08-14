import { z } from 'zod';
import {
  collectionVariableInfo,
  collectionVariableInfoRequest,
  collectionVariableInfoResponse,
} from './collection-variable-info';
import {
  collectionSecretVariableInfo,
  collectionSecretVariableInfoRequest,
  collectionSecretVariableInfoResponse,
} from './collection-secret-variable-info';

/**
 * Zod schema for the CollectionVariableList model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionVariableList = z.lazy(() => {
  return z.union([collectionVariableInfo, collectionSecretVariableInfo]);
});

/**
 * @typedef {CollectionVariableList} collectionVariableList
 */
export type CollectionVariableList = z.infer<typeof collectionVariableList>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const collectionVariableListResponse = z.lazy(() => {
  return z.union([collectionVariableInfoResponse, collectionSecretVariableInfoResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const collectionVariableListRequest = z.lazy(() => {
  return z.union([collectionVariableInfoRequest, collectionSecretVariableInfoRequest]);
});
