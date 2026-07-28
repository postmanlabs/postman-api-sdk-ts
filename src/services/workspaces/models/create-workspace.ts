import { z } from 'zod';
import {
  CreateWorkspaceWorkspace,
  createWorkspaceWorkspace,
  createWorkspaceWorkspaceRequest,
  createWorkspaceWorkspaceResponse,
} from './create-workspace-workspace';

/**
 * Zod schema for the CreateWorkspace model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createWorkspace = z.lazy(() => {
  return z.object({
    workspace: createWorkspaceWorkspace.optional(),
  });
});

/**
 *
 * @typedef  {CreateWorkspace} createWorkspace
 * @property {CreateWorkspaceWorkspace} - Information about the workspace.
 */
export type CreateWorkspace = z.infer<typeof createWorkspace>;

/**
 * Zod schema for mapping API responses to the CreateWorkspace application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createWorkspaceResponse = z.lazy(() => {
  return z
    .object({
      workspace: createWorkspaceWorkspaceResponse.optional(),
    })
    .transform((data) => ({
      workspace: data['workspace'],
    }));
});

/**
 * Zod schema for mapping the CreateWorkspace application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createWorkspaceRequest = z.lazy(() => {
  return z
    .object({
      workspace: createWorkspaceWorkspaceRequest.optional(),
    })
    .transform((data) => ({
      workspace: data['workspace'],
    }));
});
