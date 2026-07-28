import { z } from 'zod';
import {
  SuccessfulResponseWorkspace2,
  successfulResponseWorkspace2,
  successfulResponseWorkspace2Request,
  successfulResponseWorkspace2Response,
} from './successful-response-workspace-2';

/**
 * Zod schema for the GetWorkspaceOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getWorkspaceOkResponse = z.lazy(() => {
  return z.object({
    workspace: successfulResponseWorkspace2.optional(),
  });
});

/**
 *
 * @typedef  {GetWorkspaceOkResponse} getWorkspaceOkResponse
 * @property {SuccessfulResponseWorkspace2} - Information about the workspace.
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
      workspace: successfulResponseWorkspace2Response.optional(),
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
      workspace: successfulResponseWorkspace2Request.optional(),
    })
    .transform((data) => ({
      workspace: data['workspace'],
    }));
});
