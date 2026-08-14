import { z } from 'zod';
import {
  SuccessfulResponseWorkspace1,
  successfulResponseWorkspace1,
  successfulResponseWorkspace1Request,
  successfulResponseWorkspace1Response,
} from './successful-response-workspace-1';

/**
 * Zod schema for the CreateWorkspaceOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createWorkspaceOkResponse = z.lazy(() => {
  return z.object({
    workspace: successfulResponseWorkspace1.optional(),
  });
});

/**
 * @typedef {CreateWorkspaceOkResponse} createWorkspaceOkResponse
 * @property {SuccessfulResponseWorkspace1} workspace - Information about the created workspace.
 */
export type CreateWorkspaceOkResponse = z.infer<typeof createWorkspaceOkResponse>;

/**
 * Zod schema for mapping API responses to the CreateWorkspaceOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createWorkspaceOkResponseResponse = z.lazy(() => {
  return z
    .object({
      workspace: successfulResponseWorkspace1Response.optional(),
    })
    .transform((data) => ({
      workspace: data['workspace'],
    }));
});

/**
 * Zod schema for mapping the CreateWorkspaceOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createWorkspaceOkResponseRequest = z.lazy(() => {
  return z
    .object({
      workspace: successfulResponseWorkspace1Request.optional(),
    })
    .transform((data) => ({
      workspace: data['workspace'],
    }));
});
