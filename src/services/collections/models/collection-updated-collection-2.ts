import { z } from 'zod';

/**
 * Zod schema for the CollectionUpdatedCollection2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionUpdatedCollection2 = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    description: z.string().optional(),
  });
});

/**
 * @typedef {CollectionUpdatedCollection2} collectionUpdatedCollection2
 * @property {string} id - The collection's ID.
 * @property {string} name - The collection's updated name.
 * @property {string} description - The collection's updated description.
 */
export type CollectionUpdatedCollection2 = z.infer<typeof collectionUpdatedCollection2>;

/**
 * Zod schema for mapping API responses to the CollectionUpdatedCollection2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionUpdatedCollection2Response = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      description: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      description: data['description'],
    }));
});

/**
 * Zod schema for mapping the CollectionUpdatedCollection2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionUpdatedCollection2Request = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      description: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      description: data['description'],
    }));
});
