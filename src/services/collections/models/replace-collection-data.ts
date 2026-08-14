import { z } from 'zod';
import {
  ModifyCollectionSchema,
  modifyCollectionSchema,
  modifyCollectionSchemaRequest,
  modifyCollectionSchemaResponse,
} from './modify-collection-schema';

/**
 * Zod schema for the ReplaceCollectionData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const replaceCollectionData = z.lazy(() => {
  return z.object({
    collection: modifyCollectionSchema.optional(),
  });
});

/**
 * @typedef {ReplaceCollectionData} replaceCollectionData
 * @property {ModifyCollectionSchema} collection
 */
export type ReplaceCollectionData = z.infer<typeof replaceCollectionData>;

/**
 * Zod schema for mapping API responses to the ReplaceCollectionData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const replaceCollectionDataResponse = z.lazy(() => {
  return z
    .object({
      collection: modifyCollectionSchemaResponse.optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});

/**
 * Zod schema for mapping the ReplaceCollectionData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const replaceCollectionDataRequest = z.lazy(() => {
  return z
    .object({
      collection: modifyCollectionSchemaRequest.optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});
