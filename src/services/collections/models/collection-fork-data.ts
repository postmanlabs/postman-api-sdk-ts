import { z } from 'zod';

/**
 * Zod schema for the CollectionForkData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionForkData = z.lazy(() => {
  return z.object({
    label: z.string().optional(),
    createdAt: z.string().optional(),
    from: z.string().optional(),
  });
});

/**
 * If the collection is [forked](https://learning.postman.com/docs/collaborating-in-postman/version-control/#forking-postman-entities) from another collection, the fork's information.
 * @typedef {CollectionForkData} collectionForkData
 * @property {string} label - The fork's label.
 * @property {string} createdAt - The date and time at which the collection was forked.
 * @property {string} from - The source (parent) collection's unique ID.
 */
export type CollectionForkData = z.infer<typeof collectionForkData>;

/**
 * Zod schema for mapping API responses to the CollectionForkData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionForkDataResponse = z.lazy(() => {
  return z
    .object({
      label: z.string().optional(),
      createdAt: z.string().optional(),
      from: z.string().optional(),
    })
    .transform((data) => ({
      label: data['label'],
      createdAt: data['createdAt'],
      from: data['from'],
    }));
});

/**
 * Zod schema for mapping the CollectionForkData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionForkDataRequest = z.lazy(() => {
  return z
    .object({
      label: z.string().optional(),
      createdAt: z.string().optional(),
      from: z.string().optional(),
    })
    .transform((data) => ({
      label: data['label'],
      createdAt: data['createdAt'],
      from: data['from'],
    }));
});
