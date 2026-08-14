import { z } from 'zod';
import {
  DetectedSecretsQueryRequestResources,
  detectedSecretsQueryRequestResources,
  detectedSecretsQueryRequestResourcesRequest,
  detectedSecretsQueryRequestResourcesResponse,
} from './detected-secrets-query-request-resources';

/**
 * Zod schema for the DetectedSecretsQueryRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const detectedSecretsQueryRequest = z.lazy(() => {
  return z.object({
    resolved: z.boolean().optional(),
    secretTypes: z.array(z.string()).optional(),
    statuses: z.array(z.string()).optional(),
    resources: z.array(detectedSecretsQueryRequestResources).optional(),
    workspaceIds: z.array(z.string()).optional(),
    workspaceVisibilities: z.array(z.string()).optional(),
  });
});

/**
 * @typedef {DetectedSecretsQueryRequest} detectedSecretsQueryRequest
 * @property {boolean} resolved - If true, return secrets with a `resolved` status.
 * @property {string[]} secretTypes - A list of secrets types to query. For a list of valid IDs, use the GET `/secret-types` endpoint.
 * @property {Statuses[]} statuses - A list of the types of resolution statuses to query.
 * @property {DetectedSecretsQueryRequestResources[]} resources - A list of resources to query. If you use this query, you cannot also pass the `workspaceIds` query.
 * @property {string[]} workspaceIds - A list of workspaces IDs to query. If you use this query, you cannot also pass the `resources` query.
 * @property {WorkspaceVisibilities[]} workspaceVisibilities - A list of workspace [visibility settings](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility) to query. This currently supports the `team` and `public` settings.
 */
export type DetectedSecretsQueryRequest = z.infer<typeof detectedSecretsQueryRequest>;

/**
 * Zod schema for mapping API responses to the DetectedSecretsQueryRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const detectedSecretsQueryRequestResponse = z.lazy(() => {
  return z
    .object({
      resolved: z.boolean().optional(),
      secretTypes: z.array(z.string()).optional(),
      statuses: z.array(z.string()).optional(),
      resources: z.array(detectedSecretsQueryRequestResourcesResponse).optional(),
      workspaceIds: z.array(z.string()).optional(),
      workspaceVisibilities: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      resolved: data['resolved'],
      secretTypes: data['secretTypes'],
      statuses: data['statuses'],
      resources: data['resources'],
      workspaceIds: data['workspaceIds'],
      workspaceVisibilities: data['workspaceVisibilities'],
    }));
});

/**
 * Zod schema for mapping the DetectedSecretsQueryRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const detectedSecretsQueryRequestRequest = z.lazy(() => {
  return z
    .object({
      resolved: z.boolean().optional(),
      secretTypes: z.array(z.string()).optional(),
      statuses: z.array(z.string()).optional(),
      resources: z.array(detectedSecretsQueryRequestResourcesRequest).optional(),
      workspaceIds: z.array(z.string()).optional(),
      workspaceVisibilities: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      resolved: data['resolved'],
      secretTypes: data['secretTypes'],
      statuses: data['statuses'],
      resources: data['resources'],
      workspaceIds: data['workspaceIds'],
      workspaceVisibilities: data['workspaceVisibilities'],
    }));
});
