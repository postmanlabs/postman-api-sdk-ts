import { z } from 'zod';

/**
 * Zod schema for the Destination model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const destination = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    exists: z.boolean().optional(),
  });
});

/**
 * Information about the pull request destination element.
 * @typedef {Destination} destination
 * @property {string} id - The destination element's ID.
 * @property {string} name - The destination element's name.
 * @property {boolean} exists - If true, whether the element is present and not deleted.
 */
export type Destination = z.infer<typeof destination>;

/**
 * Zod schema for mapping API responses to the Destination application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const destinationResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      exists: z.boolean().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      exists: data['exists'],
    }));
});

/**
 * Zod schema for mapping the Destination application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const destinationRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      exists: z.boolean().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      exists: data['exists'],
    }));
});
