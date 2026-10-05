import { z } from 'zod';
import {
  UpdateWorkspaceData,
  updateWorkspaceData,
  updateWorkspaceDataRequest,
  updateWorkspaceDataResponse,
} from './update-workspace-data';

/**
 * Zod schema for the UpdateWorkspaceRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateWorkspaceRequest = z.lazy(() => {
  return z.object({
    workspace: updateWorkspaceData.optional(),
  });
});

/**
 * @typedef {UpdateWorkspaceRequest} updateWorkspaceRequest
 * @property {UpdateWorkspaceData} workspace
 */
export type UpdateWorkspaceRequest = z.infer<typeof updateWorkspaceRequest>;

/**
 * Zod schema for mapping API responses to the UpdateWorkspaceRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateWorkspaceRequestResponse = z.lazy(() => {
  return z
    .object({
      workspace: updateWorkspaceDataResponse.optional(),
    })
    .transform((data) => ({
      workspace: data['workspace'],
    }));
});

/**
 * Zod schema for mapping the UpdateWorkspaceRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateWorkspaceRequestRequest = z.lazy(() => {
  return z
    .object({
      workspace: updateWorkspaceDataRequest.optional(),
    })
    .transform((data) => ({
      workspace: data['workspace'],
    }));
});
