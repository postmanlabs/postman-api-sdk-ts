import { z } from 'zod';
import { SdkSource, sdkSource, sdkSourceRequest, sdkSourceResponse } from './sdk-source';
import { Sdk, sdk, sdkRequest, sdkResponse } from './sdk';
import {
  SimpleSdkGitConnectionPullRequest,
  simpleSdkGitConnectionPullRequest,
  simpleSdkGitConnectionPullRequestRequest,
  simpleSdkGitConnectionPullRequestResponse,
} from './simple-sdk-git-connection-pull-request';

/**
 * Zod schema for the SdkGitConnection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const sdkGitConnection = z.lazy(() => {
  return z.object({
    sdkGitConnectionId: z.string(),
    source: sdkSource,
    language: z.string(),
    status: z.string(),
    repositoryUrl: z.string(),
    targetBranch: z.string(),
    autoUpdatePullRequestsEnabled: z.boolean(),
    sdk: sdk.optional(),
    pullRequests: z.array(simpleSdkGitConnectionPullRequest),
    createdAt: z.string(),
    updatedAt: z.string(),
  });
});

/**
 * Information about the SDK's Git connection to a Postman element.
 * @typedef {SdkGitConnection} sdkGitConnection
 * @property {string} sdkGitConnectionId - The Git connection's ID.
 * @property {SdkSource} source - The collection or specification that the SDK is generated from.
 * @property {SdkLanguage} language - The target output language for the generated SDK.
 * @property {SdkGitConnectionStatus} status - The lifecycle status of the Git connection:
- `active` — The connection is live and all opened pull requests ship SDK updates into the repository.
- `disconnected` — The connection was explicitly disconnected by the owner, and no pull requests can be opened. The historical record is preserved.
- `inaccessible` — Access to the repository was revoked or its no longer reachable.

 * @property {string} repositoryUrl - The canonical URL of the target Git repository.
 * @property {string} targetBranch - The branch the SDK is published to. This defaults to the `main` value.
 * @property {boolean} autoUpdatePullRequestsEnabled - If true, pull requests are opened automatically whenever the source changes or a new version of the SDK generator is released. If false, pull requests are opened automatically, but only for manually-triggered SDK regeneration. If `autoUpdatePullRequestsEnabled` isn't set, the default behavior depends on the user's Postman plan:

- ``Enterprise`` plan users — Defaults to the `true` value.
- ``Team`` plan users and read only — Defaults to the `false` value.

 * @property {Sdk} sdk - Information about the generated SDK.
 * @property {SimpleSdkGitConnectionPullRequest[]} pullRequests - A list of SDK update pull requests on the Git connection, in order of newest first by its `updatedAt` property. This returns an empty value if no pull requests have been opened yet. For full pull request details, use the GET `/sdk-git-connections/{sdkGitConnectionId}/pull-requests` endpoint.
 * @property {string} createdAt - The date and time at which the Git connection was created.
 * @property {string} updatedAt - The date and time at which the Git connection was last updated.
 */
export type SdkGitConnection = z.infer<typeof sdkGitConnection>;

/**
 * Zod schema for mapping API responses to the SdkGitConnection application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sdkGitConnectionResponse = z.lazy(() => {
  return z
    .object({
      sdkGitConnectionId: z.string(),
      source: sdkSourceResponse,
      language: z.string(),
      status: z.string(),
      repositoryUrl: z.string(),
      targetBranch: z.string(),
      autoUpdatePullRequestsEnabled: z.boolean(),
      sdk: sdkResponse.optional(),
      pullRequests: z.array(simpleSdkGitConnectionPullRequestResponse),
      createdAt: z.string(),
      updatedAt: z.string(),
    })
    .transform((data) => ({
      sdkGitConnectionId: data['sdkGitConnectionId'],
      source: data['source'],
      language: data['language'],
      status: data['status'],
      repositoryUrl: data['repositoryUrl'],
      targetBranch: data['targetBranch'],
      autoUpdatePullRequestsEnabled: data['autoUpdatePullRequestsEnabled'],
      sdk: data['sdk'],
      pullRequests: data['pullRequests'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    }));
});

/**
 * Zod schema for mapping the SdkGitConnection application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sdkGitConnectionRequest = z.lazy(() => {
  return z
    .object({
      sdkGitConnectionId: z.string(),
      source: sdkSourceRequest,
      language: z.string(),
      status: z.string(),
      repositoryUrl: z.string(),
      targetBranch: z.string(),
      autoUpdatePullRequestsEnabled: z.boolean(),
      sdk: sdkRequest.optional(),
      pullRequests: z.array(simpleSdkGitConnectionPullRequestRequest),
      createdAt: z.string(),
      updatedAt: z.string(),
    })
    .transform((data) => ({
      sdkGitConnectionId: data['sdkGitConnectionId'],
      source: data['source'],
      language: data['language'],
      status: data['status'],
      repositoryUrl: data['repositoryUrl'],
      targetBranch: data['targetBranch'],
      autoUpdatePullRequestsEnabled: data['autoUpdatePullRequestsEnabled'],
      sdk: data['sdk'],
      pullRequests: data['pullRequests'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    }));
});
