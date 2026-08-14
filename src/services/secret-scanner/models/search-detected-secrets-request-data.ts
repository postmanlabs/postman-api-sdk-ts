import { z } from 'zod';

/**
 * Zod schema for the SearchDetectedSecretsRequestData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchDetectedSecretsRequestData = z.lazy(() => {
  return z.object({
    detectedAt: z.string().optional(),
    secretType: z.string().optional(),
    workspaceVisibility: z.string().optional(),
    secretHash: z.string().optional(),
    workspaceId: z.string().optional(),
    resourceType: z.string().optional(),
    resourceId: z.string().optional(),
    secretId: z.string().optional(),
    obfuscatedSecret: z.string().optional(),
    resolution: z.string().optional(),
    occurrences: z.number().optional(),
  });
});

/**
 * @typedef {SearchDetectedSecretsRequestData} searchDetectedSecretsRequestData
 * @property {string} detectedAt - The date and time at which the secret was first detected.
 * @property {string} secretType - The type of the secret.
 * @property {DataWorkspaceVisibility} workspaceVisibility - The workspace's [visibility setting](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility).
 * @property {string} secretHash - The SHA-256 hash of the detected secret.
 * @property {string} workspaceId - The ID of the workspace that contains the secret.
 * @property {string} resourceType - If querying by resource, the resource type.
 * @property {string} resourceId - If querying by resource, the resource's ID.
 * @property {string} secretId - The detected secret's ID.
 * @property {string} obfuscatedSecret - The secret's obfuscated value.
 * @property {DataResolution} resolution - The secret's current status:
- `ACTIVE` — The secret is active.
- `FALSE_POSITIVE` — The discovered secret is not an actual secret.
- `REVOKED` — The secret is valid, but the user rotated their key to resolve the issue.
- `ACCEPTED_RISK` — The Secret Scanner found the secret, but user accepts the risk of publishing it.

 * @property {number} occurrences - The number of times the secret was found in the workspace.
 */
export type SearchDetectedSecretsRequestData = z.infer<typeof searchDetectedSecretsRequestData>;

/**
 * Zod schema for mapping API responses to the SearchDetectedSecretsRequestData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchDetectedSecretsRequestDataResponse = z.lazy(() => {
  return z
    .object({
      detectedAt: z.string().optional(),
      secretType: z.string().optional(),
      workspaceVisibility: z.string().optional(),
      secretHash: z.string().optional(),
      workspaceId: z.string().optional(),
      resourceType: z.string().optional(),
      resourceId: z.string().optional(),
      secretId: z.string().optional(),
      obfuscatedSecret: z.string().optional(),
      resolution: z.string().optional(),
      occurrences: z.number().optional(),
    })
    .transform((data) => ({
      detectedAt: data['detectedAt'],
      secretType: data['secretType'],
      workspaceVisibility: data['workspaceVisibility'],
      secretHash: data['secretHash'],
      workspaceId: data['workspaceId'],
      resourceType: data['resourceType'],
      resourceId: data['resourceId'],
      secretId: data['secretId'],
      obfuscatedSecret: data['obfuscatedSecret'],
      resolution: data['resolution'],
      occurrences: data['occurrences'],
    }));
});

/**
 * Zod schema for mapping the SearchDetectedSecretsRequestData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchDetectedSecretsRequestDataRequest = z.lazy(() => {
  return z
    .object({
      detectedAt: z.string().optional(),
      secretType: z.string().optional(),
      workspaceVisibility: z.string().optional(),
      secretHash: z.string().optional(),
      workspaceId: z.string().optional(),
      resourceType: z.string().optional(),
      resourceId: z.string().optional(),
      secretId: z.string().optional(),
      obfuscatedSecret: z.string().optional(),
      resolution: z.string().optional(),
      occurrences: z.number().optional(),
    })
    .transform((data) => ({
      detectedAt: data['detectedAt'],
      secretType: data['secretType'],
      workspaceVisibility: data['workspaceVisibility'],
      secretHash: data['secretHash'],
      workspaceId: data['workspaceId'],
      resourceType: data['resourceType'],
      resourceId: data['resourceId'],
      secretId: data['secretId'],
      obfuscatedSecret: data['obfuscatedSecret'],
      resolution: data['resolution'],
      occurrences: data['occurrences'],
    }));
});
