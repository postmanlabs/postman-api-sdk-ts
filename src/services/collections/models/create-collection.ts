import { z } from 'zod';
import {
  CreateCollectionSchema,
  createCollectionSchema,
  createCollectionSchemaRequest,
  createCollectionSchemaResponse,
} from './create-collection-schema';

/**
 * Zod schema for the CreateCollection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createCollection = z.lazy(() => {
  return z.object({
    collection: createCollectionSchema.optional(),
  });
});

/**
 * @typedef {CreateCollection} createCollection
 * @property {CreateCollectionSchema} collection
 */
export type CreateCollection = z.infer<typeof createCollection>;

/**
 * Zod schema for mapping API responses to the CreateCollection application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createCollectionResponse = z.lazy(() => {
  return z
    .object({
      collection: createCollectionSchemaResponse.optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});

/**
 * Zod schema for mapping the CreateCollection application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createCollectionRequest = z.lazy(() => {
  return z
    .object({
      collection: createCollectionSchemaRequest.optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});
