import { z } from 'zod';

/**
 * Zod schema for the SuccessfulResponseSource model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseSource = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    forkName: z.string().optional(),
    exists: z.boolean().optional(),
  });
});

/**
 * Information about the pull request's source (parent) element.
 * @typedef {SuccessfulResponseSource} successfulResponseSource
 * @property {string} id - The pull request's source ID.
 * @property {string} name - The source element's name.
 * @property {string} forkName - The name of the fork created from the source element.
 * @property {boolean} exists - If true, whether the element is present and not deleted.
 */
export type SuccessfulResponseSource = z.infer<typeof successfulResponseSource>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseSource application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseSourceResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      forkName: z.string().optional(),
      exists: z.boolean().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      forkName: data['forkName'],
      exists: data['exists'],
    }));
});

/**
 * Zod schema for mapping the SuccessfulResponseSource application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseSourceRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      forkName: z.string().optional(),
      exists: z.boolean().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      forkName: data['forkName'],
      exists: data['exists'],
    }));
});
