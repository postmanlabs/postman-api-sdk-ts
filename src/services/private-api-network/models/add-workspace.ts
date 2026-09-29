import { z } from 'zod';
import {
  AddWorkspaceWorkspace,
  addWorkspaceWorkspace,
  addWorkspaceWorkspaceRequest,
  addWorkspaceWorkspaceResponse,
} from './add-workspace-workspace';

/**
 * Zod schema for the AddWorkspace model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addWorkspace = z.lazy(() => {
  return z.object({
    workspace: addWorkspaceWorkspace,
  });
});

/**
 * @typedef {AddWorkspace} addWorkspace
 * @property {AddWorkspaceWorkspace} workspace - Information about the workspace to add to the Private API Network.
 */
export type AddWorkspace = z.infer<typeof addWorkspace>;

/**
 * Zod schema for mapping API responses to the AddWorkspace application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addWorkspaceResponse = z.lazy(() => {
  return z
    .object({
      workspace: addWorkspaceWorkspaceResponse,
    })
    .transform((data) => ({
      workspace: data['workspace'],
    }));
});

/**
 * Zod schema for mapping the AddWorkspace application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addWorkspaceRequest = z.lazy(() => {
  return z
    .object({
      workspace: addWorkspaceWorkspaceRequest,
    })
    .transform((data) => ({
      workspace: data['workspace'],
    }));
});
