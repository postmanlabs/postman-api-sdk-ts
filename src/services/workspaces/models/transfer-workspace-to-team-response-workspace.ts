import { z } from 'zod';
import {
  TransferWorkspaceToTeamResponseObject,
  transferWorkspaceToTeamResponseObject,
  transferWorkspaceToTeamResponseObjectRequest,
  transferWorkspaceToTeamResponseObjectResponse,
} from './transfer-workspace-to-team-response-object';

/**
 * Zod schema for the TransferWorkspaceToTeamResponseWorkspace model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const transferWorkspaceToTeamResponseWorkspace = z.lazy(() => {
  return z.object({
    transfer: transferWorkspaceToTeamResponseObject.optional(),
  });
});

/**
 *
 * @typedef  {TransferWorkspaceToTeamResponseWorkspace} transferWorkspaceToTeamResponseWorkspace
 * @property {TransferWorkspaceToTeamResponseObject} - Information about the workspace transfer.
 */
export type TransferWorkspaceToTeamResponseWorkspace = z.infer<
  typeof transferWorkspaceToTeamResponseWorkspace
>;

/**
 * Zod schema for mapping API responses to the TransferWorkspaceToTeamResponseWorkspace application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const transferWorkspaceToTeamResponseWorkspaceResponse = z.lazy(() => {
  return z
    .object({
      transfer: transferWorkspaceToTeamResponseObjectResponse.optional(),
    })
    .transform((data) => ({
      transfer: data['transfer'],
    }));
});

/**
 * Zod schema for mapping the TransferWorkspaceToTeamResponseWorkspace application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const transferWorkspaceToTeamResponseWorkspaceRequest = z.lazy(() => {
  return z
    .object({
      transfer: transferWorkspaceToTeamResponseObjectRequest.optional(),
    })
    .transform((data) => ({
      transfer: data['transfer'],
    }));
});
