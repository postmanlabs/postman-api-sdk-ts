import { z } from 'zod';
import {
  TransferWorkspaceToTeamResponseWorkspace,
  transferWorkspaceToTeamResponseWorkspace,
  transferWorkspaceToTeamResponseWorkspaceRequest,
  transferWorkspaceToTeamResponseWorkspaceResponse,
} from './transfer-workspace-to-team-response-workspace';

/**
 * Zod schema for the TransferWorkspaceToTeamResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const transferWorkspaceToTeamResponse = z.lazy(() => {
  return z.object({
    workspace: transferWorkspaceToTeamResponseWorkspace.optional(),
  });
});

/**
 * @typedef {TransferWorkspaceToTeamResponse} transferWorkspaceToTeamResponse
 * @property {TransferWorkspaceToTeamResponseWorkspace} workspace - Information about the transferred workspace.
 */
export type TransferWorkspaceToTeamResponse = z.infer<typeof transferWorkspaceToTeamResponse>;

/**
 * Zod schema for mapping API responses to the TransferWorkspaceToTeamResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const transferWorkspaceToTeamResponseResponse = z.lazy(() => {
  return z
    .object({
      workspace: transferWorkspaceToTeamResponseWorkspaceResponse.optional(),
    })
    .transform((data) => ({
      workspace: data['workspace'],
    }));
});

/**
 * Zod schema for mapping the TransferWorkspaceToTeamResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const transferWorkspaceToTeamResponseRequest = z.lazy(() => {
  return z
    .object({
      workspace: transferWorkspaceToTeamResponseWorkspaceRequest.optional(),
    })
    .transform((data) => ({
      workspace: data['workspace'],
    }));
});
