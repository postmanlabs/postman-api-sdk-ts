import { z } from 'zod';

/**
 * Zod schema for the PullRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const pullRequest = z.lazy(() => {
  return z.object({
    number: z.number(),
    title: z.string().nullable(),
    status: z.string().nullable(),
    author: z.string().nullable(),
    baseBranch: z.string().nullable(),
    headBranch: z.string().nullable(),
  });
});

/**
 * Information about the pull request. This returns null if the run wasn't triggered by a pull request.
 * @typedef  {PullRequest} pullRequest - Information about the pull request. This returns null if the run wasn't triggered by a pull request. - Information about the pull request. This returns null if the run wasn't triggered by a pull request.
 * @property {number} - The pull request number.
 * @property {string} - The pull request's title.
 * @property {string} - The pull request's status.
 * @property {string} - The author of the pull request.
 * @property {string} - The target branch of the pull request.
 * @property {string} - The pull request's source branch.
 */
export type PullRequest = z.infer<typeof pullRequest>;

/**
 * Zod schema for mapping API responses to the PullRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pullRequestResponse = z.lazy(() => {
  return z
    .object({
      number: z.number(),
      title: z.string().nullable(),
      status: z.string().nullable(),
      author: z.string().nullable(),
      baseBranch: z.string().nullable(),
      headBranch: z.string().nullable(),
    })
    .transform((data) => ({
      number: data['number'],
      title: data['title'],
      status: data['status'],
      author: data['author'],
      baseBranch: data['baseBranch'],
      headBranch: data['headBranch'],
    }));
});

/**
 * Zod schema for mapping the PullRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pullRequestRequest = z.lazy(() => {
  return z
    .object({
      number: z.number(),
      title: z.string().nullable(),
      status: z.string().nullable(),
      author: z.string().nullable(),
      baseBranch: z.string().nullable(),
      headBranch: z.string().nullable(),
    })
    .transform((data) => ({
      number: data['number'],
      title: data['title'],
      status: data['status'],
      author: data['author'],
      baseBranch: data['baseBranch'],
      headBranch: data['headBranch'],
    }));
});
