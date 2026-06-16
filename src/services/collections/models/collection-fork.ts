import { z } from 'zod';

/**
 * Zod schema for the CollectionFork model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionFork = z.lazy(() => {
  return z.object({
    label: z.string().optional(),
    createdAt: z.string().optional(),
    from: z.string().optional(),
  });
});

/**
 * Information about the collection's fork.
 * @typedef  {CollectionFork} collectionFork - Information about the collection's fork. - Information about the collection's fork.
 * @property {string} - The fork's label.
 * @property {string} - The fork's creation date and time.
 * @property {string} - The unique ID of fork's source collection.
 */
export type CollectionFork = z.infer<typeof collectionFork>;

/**
 * Zod schema for mapping API responses to the CollectionFork application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionForkResponse = z.lazy(() => {
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
 * Zod schema for mapping the CollectionFork application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionForkRequest = z.lazy(() => {
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
