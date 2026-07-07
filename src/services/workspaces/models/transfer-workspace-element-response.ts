import { z } from 'zod';
import {
  TransferWorkspaceElementResponseWorkspace,
  transferWorkspaceElementResponseWorkspace,
  transferWorkspaceElementResponseWorkspaceRequest,
  transferWorkspaceElementResponseWorkspaceResponse,
} from './transfer-workspace-element-response-workspace';

/**
 * Zod schema for the TransferWorkspaceElementResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const transferWorkspaceElementResponse = z.lazy(() => {
  return z.object({
    workspace: transferWorkspaceElementResponseWorkspace.optional(),
  });
});

/**
 *
 * @typedef  {TransferWorkspaceElementResponse} transferWorkspaceElementResponse
 * @property {TransferWorkspaceElementResponseWorkspace}
 */
export type TransferWorkspaceElementResponse = z.infer<typeof transferWorkspaceElementResponse>;

/**
 * Zod schema for mapping API responses to the TransferWorkspaceElementResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const transferWorkspaceElementResponseResponse = z.lazy(() => {
  return z
    .object({
      workspace: transferWorkspaceElementResponseWorkspaceResponse.optional(),
    })
    .transform((data) => ({
      workspace: data['workspace'],
    }));
});

/**
 * Zod schema for mapping the TransferWorkspaceElementResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const transferWorkspaceElementResponseRequest = z.lazy(() => {
  return z
    .object({
      workspace: transferWorkspaceElementResponseWorkspaceRequest.optional(),
    })
    .transform((data) => ({
      workspace: data['workspace'],
    }));
});
