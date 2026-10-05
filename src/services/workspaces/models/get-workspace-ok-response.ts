import { z } from 'zod';
import {
  GetWorkspaceData,
  getWorkspaceData,
  getWorkspaceDataRequest,
  getWorkspaceDataResponse,
} from './get-workspace-data';

/**
 * Zod schema for the GetWorkspaceOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getWorkspaceOkResponse = z.lazy(() => {
  return z.object({
    workspace: getWorkspaceData.optional(),
  });
});

/**
 * @typedef {GetWorkspaceOkResponse} getWorkspaceOkResponse
 * @property {GetWorkspaceData} workspace - Information about the workspace.
 */
export type GetWorkspaceOkResponse = z.infer<typeof getWorkspaceOkResponse>;

/**
 * Zod schema for mapping API responses to the GetWorkspaceOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getWorkspaceOkResponseResponse = z.lazy(() => {
  return z
    .object({
      workspace: getWorkspaceDataResponse.optional(),
    })
    .transform((data) => ({
      workspace: data['workspace'],
    }));
});

/**
 * Zod schema for mapping the GetWorkspaceOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getWorkspaceOkResponseRequest = z.lazy(() => {
  return z
    .object({
      workspace: getWorkspaceDataRequest.optional(),
    })
    .transform((data) => ({
      workspace: data['workspace'],
    }));
});
