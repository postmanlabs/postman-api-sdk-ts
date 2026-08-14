import { z } from 'zod';

/**
 * Zod schema for the ReviewPullRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const reviewPullRequest = z.lazy(() => {
  return z.object({
    action: z.string(),
    comment: z.string().optional(),
  });
});

/**
 * @typedef {ReviewPullRequest} reviewPullRequest
 * @property {ReviewPullRequestAction} action - The action to perform on the pull request:
- `approve` — Approve the pull request for merge.
- `decline` — Decline the pull request.
- `merge` — Merge the pull request into its parent element.
- `unapprove` — Revokes a pull request's `approve` status. This action does not decline the pull request.

 * @property {string} comment - If the pull request is a `decline` status, an optoinal comment about why the pull request was declined.
 */
export type ReviewPullRequest = z.infer<typeof reviewPullRequest>;

/**
 * Zod schema for mapping API responses to the ReviewPullRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const reviewPullRequestResponse = z.lazy(() => {
  return z
    .object({
      action: z.string(),
      comment: z.string().optional(),
    })
    .transform((data) => ({
      action: data['action'],
      comment: data['comment'],
    }));
});

/**
 * Zod schema for mapping the ReviewPullRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const reviewPullRequestRequest = z.lazy(() => {
  return z
    .object({
      action: z.string(),
      comment: z.string().optional(),
    })
    .transform((data) => ({
      action: data['action'],
      comment: data['comment'],
    }));
});
