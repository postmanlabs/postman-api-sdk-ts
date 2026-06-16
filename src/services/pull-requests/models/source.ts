import { z } from 'zod';

/**
 * Zod schema for the Source model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const source = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    forkName: z.string().optional(),
    exists: z.boolean().optional(),
  });
});

/**
 * Information about the pull request's source (parent) element.
 * @typedef  {Source} source - Information about the pull request's source (parent) element. - Information about the pull request's source (parent) element.
 * @property {string} - The pull request's source ID.
 * @property {string} - The source element's name.
 * @property {string} - The name of the fork created from the source element.
 * @property {boolean} - If true, whether the element is present and not deleted.
 */
export type Source = z.infer<typeof source>;

/**
 * Zod schema for mapping API responses to the Source application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sourceResponse = z.lazy(() => {
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
 * Zod schema for mapping the Source application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sourceRequest = z.lazy(() => {
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
