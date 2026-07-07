import { z } from 'zod';

/**
 * Zod schema for the CollectionItemsTransferred model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionItemsTransferred = z.lazy(() => {
  return z.object({
    ids: z.array(z.string()).optional(),
  });
});

/**
 *
 * @typedef  {CollectionItemsTransferred} collectionItemsTransferred
 * @property {string[]} - A list of the transferred collection request, response, or folder UIDs.
 */
export type CollectionItemsTransferred = z.infer<typeof collectionItemsTransferred>;

/**
 * Zod schema for mapping API responses to the CollectionItemsTransferred application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionItemsTransferredResponse = z.lazy(() => {
  return z
    .object({
      ids: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      ids: data['ids'],
    }));
});

/**
 * Zod schema for mapping the CollectionItemsTransferred application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionItemsTransferredRequest = z.lazy(() => {
  return z
    .object({
      ids: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      ids: data['ids'],
    }));
});
