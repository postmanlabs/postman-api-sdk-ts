import { z } from 'zod';
import { History, history, historyRequest, historyResponse } from './history';

/**
 * Zod schema for the UpdateDetectedSecretResolutionsOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateDetectedSecretResolutionsOkResponse = z.lazy(() => {
  return z.object({
    secretHash: z.string().optional(),
    workspaceId: z.string().optional(),
    resolution: z.string().optional(),
    history: z.array(history).optional(),
  });
});

/**
 * @typedef {UpdateDetectedSecretResolutionsOkResponse} updateDetectedSecretResolutionsOkResponse
 * @property {string} secretHash - The SHA-256 hash of the detected secret.
 * @property {string} workspaceId - The ID of the workspace that contains the secret.
 * @property {SuccessfulResponseResolution} resolution - The secret's current resolution status:
- `ACTIVE` — The secret is active.
- `FALSE_POSITIVE` — The discovered secret is not an actual secret.
- `REVOKED` — The secret is valid, but the user rotated their key to resolve the issue.
- `ACCEPTED_RISK` — The Secret Scanner found the secret, but user accepts the risk of publishing it.

 * @property {History[]} history - The history of the secret's resolution status changes.
 */
export type UpdateDetectedSecretResolutionsOkResponse = z.infer<
  typeof updateDetectedSecretResolutionsOkResponse
>;

/**
 * Zod schema for mapping API responses to the UpdateDetectedSecretResolutionsOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateDetectedSecretResolutionsOkResponseResponse = z.lazy(() => {
  return z
    .object({
      secretHash: z.string().optional(),
      workspaceId: z.string().optional(),
      resolution: z.string().optional(),
      history: z.array(historyResponse).optional(),
    })
    .transform((data) => ({
      secretHash: data['secretHash'],
      workspaceId: data['workspaceId'],
      resolution: data['resolution'],
      history: data['history'],
    }));
});

/**
 * Zod schema for mapping the UpdateDetectedSecretResolutionsOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateDetectedSecretResolutionsOkResponseRequest = z.lazy(() => {
  return z
    .object({
      secretHash: z.string().optional(),
      workspaceId: z.string().optional(),
      resolution: z.string().optional(),
      history: z.array(historyRequest).optional(),
    })
    .transform((data) => ({
      secretHash: data['secretHash'],
      workspaceId: data['workspaceId'],
      resolution: data['resolution'],
      history: data['history'],
    }));
});
