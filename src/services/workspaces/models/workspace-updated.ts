import { z } from 'zod';
import {
  WorkspaceUpdatedWorkspace,
  workspaceUpdatedWorkspace,
  workspaceUpdatedWorkspaceRequest,
  workspaceUpdatedWorkspaceResponse,
} from './workspace-updated-workspace';

/**
 * Zod schema for the WorkspaceUpdated model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const workspaceUpdated = z.lazy(() => {
  return z.object({
    workspace: workspaceUpdatedWorkspace.optional(),
  });
});

/**
 *
 * @typedef  {WorkspaceUpdated} workspaceUpdated
 * @property {WorkspaceUpdatedWorkspace} - Information about the updated workspace.
 */
export type WorkspaceUpdated = z.infer<typeof workspaceUpdated>;

/**
 * Zod schema for mapping API responses to the WorkspaceUpdated application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceUpdatedResponse = z.lazy(() => {
  return z
    .object({
      workspace: workspaceUpdatedWorkspaceResponse.optional(),
    })
    .transform((data) => ({
      workspace: data['workspace'],
    }));
});

/**
 * Zod schema for mapping the WorkspaceUpdated application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceUpdatedRequest = z.lazy(() => {
  return z
    .object({
      workspace: workspaceUpdatedWorkspaceRequest.optional(),
    })
    .transform((data) => ({
      workspace: data['workspace'],
    }));
});
