import { z } from 'zod';

/**
 * Zod schema for the PullRequestDestinationData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const pullRequestDestinationData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    exists: z.boolean().optional(),
  });
});

/**
 * Information about the pull request destination element.
 * @typedef {PullRequestDestinationData} pullRequestDestinationData
 * @property {string} id - The destination element's ID.
 * @property {string} name - The destination element's name.
 * @property {boolean} exists - If true, whether the element is present and not deleted.
 */
export type PullRequestDestinationData = z.infer<typeof pullRequestDestinationData>;

/**
 * Zod schema for mapping API responses to the PullRequestDestinationData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pullRequestDestinationDataResponse = z.lazy(() => {
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
 * Zod schema for mapping the PullRequestDestinationData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pullRequestDestinationDataRequest = z.lazy(() => {
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
