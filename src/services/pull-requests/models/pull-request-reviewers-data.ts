import { z } from 'zod';

/**
 * Zod schema for the PullRequestReviewersData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const pullRequestReviewersData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    status: z.string().optional(),
  });
});

/**
 * @typedef {PullRequestReviewersData} pullRequestReviewersData
 * @property {string} id - The reviewer's user ID.
 * @property {PullRequestReviewersDataStatus} status - The reviewer's review status response.
 */
export type PullRequestReviewersData = z.infer<typeof pullRequestReviewersData>;

/**
 * Zod schema for mapping API responses to the PullRequestReviewersData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pullRequestReviewersDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      status: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      status: data['status'],
    }));
});

/**
 * Zod schema for mapping the PullRequestReviewersData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pullRequestReviewersDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      status: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      status: data['status'],
    }));
});
