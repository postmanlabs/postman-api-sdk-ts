import { z } from 'zod';

/**
 * Zod schema for the CollectionsFork model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionsFork = z.lazy(() => {
  return z.object({
    label: z.string().optional(),
    createdAt: z.string().optional(),
    from: z.string().optional(),
  });
});

/**
 * If the collection is [forked](https://learning.postman.com/docs/collaborating-in-postman/version-control/#forking-postman-entities), the fork's information.
 * @typedef  {CollectionsFork} collectionsFork - If the collection is [forked](https://learning.postman.com/docs/collaborating-in-postman/version-control/#forking-postman-entities), the fork's information. - If the collection is [forked](https://learning.postman.com/docs/collaborating-in-postman/version-control/#forking-postman-entities), the fork's information.
 * @property {string} - The fork's label.
 * @property {string} - The fork's creation date and time.
 * @property {string} - The unique ID of the fork's source collection.
 */
export type CollectionsFork = z.infer<typeof collectionsFork>;

/**
 * Zod schema for mapping API responses to the CollectionsFork application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionsForkResponse = z.lazy(() => {
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
 * Zod schema for mapping the CollectionsFork application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionsForkRequest = z.lazy(() => {
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
