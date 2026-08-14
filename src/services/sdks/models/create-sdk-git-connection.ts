import { z } from 'zod';
import { SdkSource, sdkSource, sdkSourceRequest, sdkSourceResponse } from './sdk-source';

/**
 * Zod schema for the CreateSdkGitConnection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createSdkGitConnection = z.lazy(() => {
  return z.object({
    source: sdkSource,
    language: z.string(),
    repositoryUrl: z.string(),
    targetBranch: z.string().optional(),
    autoUpdatePullRequestsEnabled: z.boolean().optional(),
  });
});

/**
 * @typedef {CreateSdkGitConnection} createSdkGitConnection
 * @property {SdkSource} source - The collection or specification that the SDK is generated from.
 * @property {SdkLanguage} language - The target output language for the generated SDK.
 * @property {string} repositoryUrl - The canonical URL of the target Git repository.
 * @property {string} targetBranch - The branch the SDK is published to. Defaults to `main`.
 * @property {boolean} autoUpdatePullRequestsEnabled - If true, pull requests are opened automatically whenever the source changes or a new version of the SDK generator is released. If false, pull requests are opened automatically, but only for manually-triggered SDK regeneration. If `autoUpdatePullRequestsEnabled` isn't set, the default behavior depends on the user's Postman plan:

- ``Enterprise`` plan users — Defaults to the `true` value.
- ``Team`` plan users and read only — Defaults to the `false` value.

 */
export type CreateSdkGitConnection = z.infer<typeof createSdkGitConnection>;

/**
 * Zod schema for mapping API responses to the CreateSdkGitConnection application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createSdkGitConnectionResponse = z.lazy(() => {
  return z
    .object({
      source: sdkSourceResponse,
      language: z.string(),
      repositoryUrl: z.string(),
      targetBranch: z.string().optional(),
      autoUpdatePullRequestsEnabled: z.boolean().optional(),
    })
    .transform((data) => ({
      source: data['source'],
      language: data['language'],
      repositoryUrl: data['repositoryUrl'],
      targetBranch: data['targetBranch'],
      autoUpdatePullRequestsEnabled: data['autoUpdatePullRequestsEnabled'],
    }));
});

/**
 * Zod schema for mapping the CreateSdkGitConnection application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createSdkGitConnectionRequest = z.lazy(() => {
  return z
    .object({
      source: sdkSourceRequest,
      language: z.string(),
      repositoryUrl: z.string(),
      targetBranch: z.string().optional(),
      autoUpdatePullRequestsEnabled: z.boolean().optional(),
    })
    .transform((data) => ({
      source: data['source'],
      language: data['language'],
      repositoryUrl: data['repositoryUrl'],
      targetBranch: data['targetBranch'],
      autoUpdatePullRequestsEnabled: data['autoUpdatePullRequestsEnabled'],
    }));
});
