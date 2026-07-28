import { z } from 'zod';

/**
 * Zod schema for the UpdatePullRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updatePullRequest = z.lazy(() => {
  return z.object({
    title: z.string(),
    description: z.string().optional(),
    reviewers: z.array(z.string()),
  });
});

/**
 *
 * @typedef  {UpdatePullRequest} updatePullRequest
 * @property {string} - The pull request's updated title.
 * @property {string} - The updated pull request description.
 * @property {string[]} - An updated list of the pull request's assigned reviewers. This replaces all existing users assigned to the pull request with those you pass in the request body.
 */
export type UpdatePullRequest = z.infer<typeof updatePullRequest>;

/**
 * Zod schema for mapping API responses to the UpdatePullRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updatePullRequestResponse = z.lazy(() => {
  return z
    .object({
      title: z.string(),
      description: z.string().optional(),
      reviewers: z.array(z.string()),
    })
    .transform((data) => ({
      title: data['title'],
      description: data['description'],
      reviewers: data['reviewers'],
    }));
});

/**
 * Zod schema for mapping the UpdatePullRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updatePullRequestRequest = z.lazy(() => {
  return z
    .object({
      title: z.string(),
      description: z.string().optional(),
      reviewers: z.array(z.string()),
    })
    .transform((data) => ({
      title: data['title'],
      description: data['description'],
      reviewers: data['reviewers'],
    }));
});
