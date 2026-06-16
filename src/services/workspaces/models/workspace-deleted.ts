import { z } from 'zod';
import {
  WorkspaceDeletedWorkspace,
  workspaceDeletedWorkspace,
  workspaceDeletedWorkspaceRequest,
  workspaceDeletedWorkspaceResponse,
} from './workspace-deleted-workspace';

/**
 * Zod schema for the WorkspaceDeleted model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const workspaceDeleted = z.lazy(() => {
  return z.object({
    workspace: workspaceDeletedWorkspace.optional(),
  });
});

/**
 *
 * @typedef  {WorkspaceDeleted} workspaceDeleted
 * @property {WorkspaceDeletedWorkspace} - Information about the deleted workspace.
 */
export type WorkspaceDeleted = z.infer<typeof workspaceDeleted>;

/**
 * Zod schema for mapping API responses to the WorkspaceDeleted application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceDeletedResponse = z.lazy(() => {
  return z
    .object({
      workspace: workspaceDeletedWorkspaceResponse.optional(),
    })
    .transform((data) => ({
      workspace: data['workspace'],
    }));
});

/**
 * Zod schema for mapping the WorkspaceDeleted application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceDeletedRequest = z.lazy(() => {
  return z
    .object({
      workspace: workspaceDeletedWorkspaceRequest.optional(),
    })
    .transform((data) => ({
      workspace: data['workspace'],
    }));
});
