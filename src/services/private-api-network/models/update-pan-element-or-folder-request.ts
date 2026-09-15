import { z } from 'zod';
import {
  UpdateWorkspaceWorkspace,
  updateWorkspaceWorkspace,
  updateWorkspaceWorkspaceRequest,
  updateWorkspaceWorkspaceResponse,
} from './update-workspace-workspace';

/**
 * Zod schema for the UpdatePanElementOrFolderRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updatePanElementOrFolderRequest = z.lazy(() => {
  return z.object({
    workspace: updateWorkspaceWorkspace.optional(),
  });
});

/**
 * @typedef {UpdatePanElementOrFolderRequest} updatePanElementOrFolderRequest
 * @property {UpdateWorkspaceWorkspace} workspace - Information about the workspace fields to update.
 */
export type UpdatePanElementOrFolderRequest = z.infer<typeof updatePanElementOrFolderRequest>;

/**
 * Zod schema for mapping API responses to the UpdatePanElementOrFolderRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updatePanElementOrFolderRequestResponse = z.lazy(() => {
  return z
    .object({
      workspace: updateWorkspaceWorkspaceResponse.optional(),
    })
    .transform((data) => ({
      workspace: data['workspace'],
    }));
});

/**
 * Zod schema for mapping the UpdatePanElementOrFolderRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updatePanElementOrFolderRequestRequest = z.lazy(() => {
  return z
    .object({
      workspace: updateWorkspaceWorkspaceRequest.optional(),
    })
    .transform((data) => ({
      workspace: data['workspace'],
    }));
});
