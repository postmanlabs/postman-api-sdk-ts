import { z } from 'zod';
import {
  SdkGitConnectionPullRequest,
  sdkGitConnectionPullRequest,
  sdkGitConnectionPullRequestRequest,
  sdkGitConnectionPullRequestResponse,
} from './sdk-git-connection-pull-request';
import {
  MetaNextCursorTotal,
  metaNextCursorTotal,
  metaNextCursorTotalRequest,
  metaNextCursorTotalResponse,
} from './meta-next-cursor-total';

/**
 * Zod schema for the SdkGitConnectionPullRequestList model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const sdkGitConnectionPullRequestList = z.lazy(() => {
  return z.object({
    data: z.array(sdkGitConnectionPullRequest),
    meta: metaNextCursorTotal,
  });
});

/**
 * @typedef {SdkGitConnectionPullRequestList} sdkGitConnectionPullRequestList
 * @property {SdkGitConnectionPullRequest[]} data - A list of SDK update pull requests on the Git connection.
 * @property {MetaNextCursorTotal} meta - The response's meta information for paginated results.
 */
export type SdkGitConnectionPullRequestList = z.infer<typeof sdkGitConnectionPullRequestList>;

/**
 * Zod schema for mapping API responses to the SdkGitConnectionPullRequestList application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sdkGitConnectionPullRequestListResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(sdkGitConnectionPullRequestResponse),
      meta: metaNextCursorTotalResponse,
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the SdkGitConnectionPullRequestList application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sdkGitConnectionPullRequestListRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(sdkGitConnectionPullRequestRequest),
      meta: metaNextCursorTotalRequest,
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});
