import { z } from 'zod';

/**
 * Zod schema for the PullRequestSourceData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const pullRequestSourceData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    forkName: z.string().optional(),
    exists: z.boolean().optional(),
  });
});

/**
 * Information about the pull request's source (parent) element.
 * @typedef {PullRequestSourceData} pullRequestSourceData
 * @property {string} id - The pull request's source ID.
 * @property {string} name - The source element's name.
 * @property {string} forkName - The name of the fork created from the source element.
 * @property {boolean} exists - If true, whether the element is present and not deleted.
 */
export type PullRequestSourceData = z.infer<typeof pullRequestSourceData>;

/**
 * Zod schema for mapping API responses to the PullRequestSourceData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pullRequestSourceDataResponse = z.lazy(() => {
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
 * Zod schema for mapping the PullRequestSourceData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pullRequestSourceDataRequest = z.lazy(() => {
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
