import { z } from 'zod';

/**
 * Zod schema for the CollectionUid model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionUid = z.lazy(() => {
  return z.object({
    isSourceAhead: z.boolean().optional(),
  });
});

/**
 * Information about the forked collection. The object's name is the forked collection's UID (`userId`-`collectionId`).
 * @typedef {CollectionUid} collectionUid
 * @property {boolean} isSourceAhead - If true, there is a difference between the forked collection and its source collection.
 */
export type CollectionUid = z.infer<typeof collectionUid>;

/**
 * Zod schema for mapping API responses to the CollectionUid application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionUidResponse = z.lazy(() => {
  return z
    .object({
      isSourceAhead: z.boolean().optional(),
    })
    .transform((data) => ({
      isSourceAhead: data['isSourceAhead'],
    }));
});

/**
 * Zod schema for mapping the CollectionUid application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionUidRequest = z.lazy(() => {
  return z
    .object({
      isSourceAhead: z.boolean().optional(),
    })
    .transform((data) => ({
      isSourceAhead: data['isSourceAhead'],
    }));
});
