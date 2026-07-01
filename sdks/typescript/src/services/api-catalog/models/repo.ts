import { z } from 'zod';

/**
 * Zod schema for the Repo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const repo = z.lazy(() => {
  return z.object({
    name: z.string().nullable(),
    owner: z.string().nullable(),
    url: z.string().nullable(),
  });
});

/**
 * Information about the source repository.
 * @typedef  {Repo} repo - Information about the source repository. - Information about the source repository.
 * @property {string} - The repository's name.
 * @property {string} - The repository owner or organization.
 * @property {string} - The repository's URL.
 */
export type Repo = z.infer<typeof repo>;

/**
 * Zod schema for mapping API responses to the Repo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const repoResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().nullable(),
      owner: z.string().nullable(),
      url: z.string().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
      owner: data['owner'],
      url: data['url'],
    }));
});

/**
 * Zod schema for mapping the Repo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const repoRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().nullable(),
      owner: z.string().nullable(),
      url: z.string().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
      owner: data['owner'],
      url: data['url'],
    }));
});
