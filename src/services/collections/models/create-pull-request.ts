import { z } from 'zod';

/**
 * Zod schema for the CreatePullRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createPullRequest = z.lazy(() => {
  return z.object({
    title: z.string(),
    description: z.string().optional(),
    reviewers: z.array(z.string()),
    destinationId: z.string(),
  });
});

/**
 * Information about the pull request.
 * @typedef {CreatePullRequest} createPullRequest
 * @property {string} title - The title of the pull request.
 * @property {string} description - The pull request's description.
 * @property {string[]} reviewers - A list of reviewers to assign to the pull request.
 * @property {string} destinationId - The collection ID to merge the pull request into.
 */
export type CreatePullRequest = z.infer<typeof createPullRequest>;

/**
 * Zod schema for mapping API responses to the CreatePullRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createPullRequestResponse = z.lazy(() => {
  return z
    .object({
      title: z.string(),
      description: z.string().optional(),
      reviewers: z.array(z.string()),
      destinationId: z.string(),
    })
    .transform((data) => ({
      title: data['title'],
      description: data['description'],
      reviewers: data['reviewers'],
      destinationId: data['destinationId'],
    }));
});

/**
 * Zod schema for mapping the CreatePullRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createPullRequestRequest = z.lazy(() => {
  return z
    .object({
      title: z.string(),
      description: z.string().optional(),
      reviewers: z.array(z.string()),
      destinationId: z.string(),
    })
    .transform((data) => ({
      title: data['title'],
      description: data['description'],
      reviewers: data['reviewers'],
      destinationId: data['destinationId'],
    }));
});
