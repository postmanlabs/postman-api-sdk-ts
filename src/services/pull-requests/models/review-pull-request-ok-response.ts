import { z } from 'zod';
import {
  PullRequestReviewedByData,
  pullRequestReviewedByData,
  pullRequestReviewedByDataRequest,
  pullRequestReviewedByDataResponse,
} from './pull-request-reviewed-by-data';

/**
 * Zod schema for the ReviewPullRequestOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const reviewPullRequestOkResponse = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    reviewedBy: pullRequestReviewedByData.optional(),
    status: z.string().optional(),
    updatedAt: z.string().optional(),
  });
});

/**
 * @typedef {ReviewPullRequestOkResponse} reviewPullRequestOkResponse
 * @property {string} id - The pull request's ID.
 * @property {PullRequestReviewedByData} reviewedBy - Information about the user who reviewed the pull request review.
 * @property {string} status - The pull request's current review status:
- `open` — The pull request is still open.
- `approved` — The pull request was approved by its reviewers.
- `declined` — The pull request was not approved by its reviewers.
- `merged` — The pull request was merged.

 * @property {string} updatedAt - The date and time at which the pull request was updated.
 */
export type ReviewPullRequestOkResponse = z.infer<typeof reviewPullRequestOkResponse>;

/**
 * Zod schema for mapping API responses to the ReviewPullRequestOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const reviewPullRequestOkResponseResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      reviewedBy: pullRequestReviewedByDataResponse.optional(),
      status: z.string().optional(),
      updatedAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      reviewedBy: data['reviewedBy'],
      status: data['status'],
      updatedAt: data['updatedAt'],
    }));
});

/**
 * Zod schema for mapping the ReviewPullRequestOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const reviewPullRequestOkResponseRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      reviewedBy: pullRequestReviewedByDataRequest.optional(),
      status: z.string().optional(),
      updatedAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      reviewedBy: data['reviewedBy'],
      status: data['status'],
      updatedAt: data['updatedAt'],
    }));
});
