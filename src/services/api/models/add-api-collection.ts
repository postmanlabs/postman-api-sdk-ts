import { z } from 'zod';
import {
  copyCollectionToApi,
  copyCollectionToApiRequest,
  copyCollectionToApiResponse,
} from './copy-collection-to-api';
import {
  createApiCollection,
  createApiCollectionRequest,
  createApiCollectionResponse,
} from './create-api-collection';
import {
  generateFromSchema,
  generateFromSchemaRequest,
  generateFromSchemaResponse,
} from './generate-from-schema';

/**
 * Zod schema for the AddApiCollection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addApiCollection = z.lazy(() => {
  return z.union([copyCollectionToApi, createApiCollection, generateFromSchema]);
});

/**
 *
 * @typedef  {AddApiCollection} addApiCollection
 * @property {CopyCollectionToApi}
 * @property {CreateApiCollection}
 * @property {GenerateFromSchema}
 */
export type AddApiCollection = z.infer<typeof addApiCollection>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const addApiCollectionResponse = z.lazy(() => {
  return z.union([
    copyCollectionToApiResponse,
    createApiCollectionResponse,
    generateFromSchemaResponse,
  ]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const addApiCollectionRequest = z.lazy(() => {
  return z.union([
    copyCollectionToApiRequest,
    createApiCollectionRequest,
    generateFromSchemaRequest,
  ]);
});
