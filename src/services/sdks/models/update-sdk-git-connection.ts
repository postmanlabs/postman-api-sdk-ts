import { z } from 'zod';

/**
 * Zod schema for the UpdateSdkGitConnection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateSdkGitConnection = z.lazy(() => {
  return z.object({
    status: z.string(),
    autoUpdatePullRequestsEnabled: z.boolean().optional(),
  });
});

/**
 * @typedef {UpdateSdkGitConnection} updateSdkGitConnection
 * @property {UpdateSdkGitConnectionStatus} status - The updated SDK Git connection lifecycle state.
 * @property {boolean} autoUpdatePullRequestsEnabled - If true, pull requests are opened automatically whenever the source changes or a new version of the SDK generator is released. If false, pull requests are opened automatically, but only for manually-triggered SDK regeneration. If `autoUpdatePullRequestsEnabled` isn't set, the default behavior depends on the user's Postman plan:

- ``Enterprise`` plan users — Defaults to the `true` value.
- ``Team`` plan users and read only — Defaults to the `false` value.

 */
export type UpdateSdkGitConnection = z.infer<typeof updateSdkGitConnection>;

/**
 * Zod schema for mapping API responses to the UpdateSdkGitConnection application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateSdkGitConnectionResponse = z.lazy(() => {
  return z
    .object({
      status: z.string(),
      autoUpdatePullRequestsEnabled: z.boolean().optional(),
    })
    .transform((data) => ({
      status: data['status'],
      autoUpdatePullRequestsEnabled: data['autoUpdatePullRequestsEnabled'],
    }));
});

/**
 * Zod schema for mapping the UpdateSdkGitConnection application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateSdkGitConnectionRequest = z.lazy(() => {
  return z
    .object({
      status: z.string(),
      autoUpdatePullRequestsEnabled: z.boolean().optional(),
    })
    .transform((data) => ({
      status: data['status'],
      autoUpdatePullRequestsEnabled: data['autoUpdatePullRequestsEnabled'],
    }));
});
