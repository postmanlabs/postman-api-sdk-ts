import { z } from 'zod';

/**
 * Zod schema for the SimpleSdkGitConnectionPullRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const simpleSdkGitConnectionPullRequest = z.lazy(() => {
  return z.object({
    url: z.string(),
    status: z.string(),
    sdkId: z.string(),
  });
});

/**
 * @typedef {SimpleSdkGitConnectionPullRequest} simpleSdkGitConnectionPullRequest
 * @property {string} url - The pull request's URL.
 * @property {SdkGitConnectionPrStatus} status - The lifecycle status of a pull request.
 * @property {string} sdkId - The SDK's ID.
 */
export type SimpleSdkGitConnectionPullRequest = z.infer<typeof simpleSdkGitConnectionPullRequest>;

/**
 * Zod schema for mapping API responses to the SimpleSdkGitConnectionPullRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const simpleSdkGitConnectionPullRequestResponse = z.lazy(() => {
  return z
    .object({
      url: z.string(),
      status: z.string(),
      sdkId: z.string(),
    })
    .transform((data) => ({
      url: data['url'],
      status: data['status'],
      sdkId: data['sdkId'],
    }));
});

/**
 * Zod schema for mapping the SimpleSdkGitConnectionPullRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const simpleSdkGitConnectionPullRequestRequest = z.lazy(() => {
  return z
    .object({
      url: z.string(),
      status: z.string(),
      sdkId: z.string(),
    })
    .transform((data) => ({
      url: data['url'],
      status: data['status'],
      sdkId: data['sdkId'],
    }));
});
