import { z } from 'zod';
import { Sdk, sdk, sdkRequest, sdkResponse } from './sdk';

/**
 * Zod schema for the SdkGitConnectionPullRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const sdkGitConnectionPullRequest = z.lazy(() => {
  return z.object({
    number: z.number().gte(1),
    url: z.string(),
    status: z.string(),
    sdk: sdk.optional(),
    createdAt: z.string(),
    updatedAt: z.string(),
  });
});

/**
 * Information about a pull request that shipped the SDK update.
 * @typedef  {SdkGitConnectionPullRequest} sdkGitConnectionPullRequest - Information about a pull request that shipped the SDK update. - Information about a pull request that shipped the SDK update.
 * @property {number} - The pull request's ID.
 * @property {string} - The pull request's URL.
 * @property {SdkGitConnectionPrStatus} - The lifecycle status of a pull request.
 * @property {Sdk} - Information about the generated SDK.
 * @property {string} - The date and time at which the pull request was created.
 * @property {string} - The date and time at which the pull request was last updated.
 */
export type SdkGitConnectionPullRequest = z.infer<typeof sdkGitConnectionPullRequest>;

/**
 * Zod schema for mapping API responses to the SdkGitConnectionPullRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sdkGitConnectionPullRequestResponse = z.lazy(() => {
  return z
    .object({
      number: z.number().gte(1),
      url: z.string(),
      status: z.string(),
      sdk: sdkResponse.optional(),
      createdAt: z.string(),
      updatedAt: z.string(),
    })
    .transform((data) => ({
      number: data['number'],
      url: data['url'],
      status: data['status'],
      sdk: data['sdk'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    }));
});

/**
 * Zod schema for mapping the SdkGitConnectionPullRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sdkGitConnectionPullRequestRequest = z.lazy(() => {
  return z
    .object({
      number: z.number().gte(1),
      url: z.string(),
      status: z.string(),
      sdk: sdkRequest.optional(),
      createdAt: z.string(),
      updatedAt: z.string(),
    })
    .transform((data) => ({
      number: data['number'],
      url: data['url'],
      status: data['status'],
      sdk: data['sdk'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    }));
});
