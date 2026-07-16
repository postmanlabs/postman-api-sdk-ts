import { z } from 'zod';
import { SdkSource, sdkSource, sdkSourceRequest, sdkSourceResponse } from './sdk-source';
import {
  SdkErrorBuildStatusFailure,
  sdkErrorBuildStatusFailure,
  sdkErrorBuildStatusFailureRequest,
  sdkErrorBuildStatusFailureResponse,
} from './sdk-error-build-status-failure';
import {
  SimpleSdkGitConnectionPullRequest,
  simpleSdkGitConnectionPullRequest,
  simpleSdkGitConnectionPullRequestRequest,
  simpleSdkGitConnectionPullRequestResponse,
} from './simple-sdk-git-connection-pull-request';

/**
 * Zod schema for the Sdk model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const sdk = z.lazy(() => {
  return z.object({
    id: z.string(),
    language: z.string(),
    source: sdkSource,
    workspaceId: z.string(),
    version: z.string().optional(),
    buildStatus: z.string(),
    error: sdkErrorBuildStatusFailure.optional(),
    pullRequest: simpleSdkGitConnectionPullRequest.optional(),
    createdAt: z.string(),
    updatedAt: z.string(),
  });
});

/**
 * Information about the generated SDK.
 * @typedef  {Sdk} sdk - Information about the generated SDK. - Information about the generated SDK.
 * @property {string} - The SDK's ID.
 * @property {SdkLanguage} - The target output language for the generated SDK.
 * @property {SdkSource} - The collection or specification that the SDK is generated from.
 * @property {string} - The ID of the workspace that owns the SDK, derived from the source entity.
 * @property {string} - The generated SDK's semantic version ID. This value is automatically assigned by the release/changelog pipeline.
 * @property {SdkBuildStatus} - The SDK's build lifecycle:
- `queued` — Accepted but not yet started.
- `in_progress` — The SDK generation is running and in progress.
- `succeeded` — The archive is built and available for download.
- `failed` — The SDK generation failed. For information, check the `error` response.

 * @property {SdkErrorBuildStatusFailure} - Information about the SDK build's status when `buildStatus` is `failed`.
 * @property {SimpleSdkGitConnectionPullRequest} 
 * @property {string} - The date and time at which the SDK was created.
 * @property {string} - The date and time at which the SDK was last updated.
 */
export type Sdk = z.infer<typeof sdk>;

/**
 * Zod schema for mapping API responses to the Sdk application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sdkResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      language: z.string(),
      source: sdkSourceResponse,
      workspaceId: z.string(),
      version: z.string().optional(),
      buildStatus: z.string(),
      error: sdkErrorBuildStatusFailureResponse.optional(),
      pullRequest: simpleSdkGitConnectionPullRequestResponse.optional(),
      createdAt: z.string(),
      updatedAt: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      language: data['language'],
      source: data['source'],
      workspaceId: data['workspaceId'],
      version: data['version'],
      buildStatus: data['buildStatus'],
      error: data['error'],
      pullRequest: data['pullRequest'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    }));
});

/**
 * Zod schema for mapping the Sdk application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sdkRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      language: z.string(),
      source: sdkSourceRequest,
      workspaceId: z.string(),
      version: z.string().optional(),
      buildStatus: z.string(),
      error: sdkErrorBuildStatusFailureRequest.optional(),
      pullRequest: simpleSdkGitConnectionPullRequestRequest.optional(),
      createdAt: z.string(),
      updatedAt: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      language: data['language'],
      source: data['source'],
      workspaceId: data['workspaceId'],
      version: data['version'],
      buildStatus: data['buildStatus'],
      error: data['error'],
      pullRequest: data['pullRequest'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    }));
});
