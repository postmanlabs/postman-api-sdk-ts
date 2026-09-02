import { z } from 'zod';

/**
 * Zod schema for the UpdateSecretResolutionRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateSecretResolutionRequest = z.lazy(() => {
  return z.object({
    resolution: z.string(),
    workspaceId: z.string(),
  });
});

/**
 * @typedef {UpdateSecretResolutionRequest} updateSecretResolutionRequest
 * @property {SecretResolutionStatus} resolution - The secret's resolution status:
- `ACTIVE` — The secret is active.
- `FALSE_POSITIVE` — The discovered secret is not an actual secret.
- `REVOKED` — The secret is valid, but the user rotated their key to resolve the issue.
- `ACCEPTED_RISK` — The Secret Scanner found the secret, but user accepts the risk of publishing it.

 * @property {string} workspaceId - The ID of the workspace that contains the secret.
 */
export type UpdateSecretResolutionRequest = z.infer<typeof updateSecretResolutionRequest>;

/**
 * Zod schema for mapping API responses to the UpdateSecretResolutionRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateSecretResolutionRequestResponse = z.lazy(() => {
  return z
    .object({
      resolution: z.string(),
      workspaceId: z.string(),
    })
    .transform((data) => ({
      resolution: data['resolution'],
      workspaceId: data['workspaceId'],
    }));
});

/**
 * Zod schema for mapping the UpdateSecretResolutionRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateSecretResolutionRequestRequest = z.lazy(() => {
  return z
    .object({
      resolution: z.string(),
      workspaceId: z.string(),
    })
    .transform((data) => ({
      resolution: data['resolution'],
      workspaceId: data['workspaceId'],
    }));
});
