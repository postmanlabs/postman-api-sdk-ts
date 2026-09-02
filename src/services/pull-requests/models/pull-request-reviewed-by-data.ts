import { z } from 'zod';

/**
 * Zod schema for the PullRequestReviewedByData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const pullRequestReviewedByData = z.lazy(() => {
  return z.object({
    id: z.number().optional(),
    name: z.string().optional(),
    username: z.string().optional(),
  });
});

/**
 * Information about the user who reviewed the pull request review.
 * @typedef {PullRequestReviewedByData} pullRequestReviewedByData
 * @property {number} id - The user's ID.
 * @property {string} name - The user's name.
 * @property {string} username - The user's username.
 */
export type PullRequestReviewedByData = z.infer<typeof pullRequestReviewedByData>;

/**
 * Zod schema for mapping API responses to the PullRequestReviewedByData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pullRequestReviewedByDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      name: z.string().optional(),
      username: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      username: data['username'],
    }));
});

/**
 * Zod schema for mapping the PullRequestReviewedByData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pullRequestReviewedByDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      name: z.string().optional(),
      username: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      username: data['username'],
    }));
});
