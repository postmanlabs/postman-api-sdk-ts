import { z } from 'zod';
import {
  SuccessfulResponseWorkspace2,
  successfulResponseWorkspace2,
  successfulResponseWorkspace2Request,
  successfulResponseWorkspace2Response,
} from './successful-response-workspace-2';

/**
 * Zod schema for the RemoveWorkspaceFromPrivateNetworkOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const removeWorkspaceFromPrivateNetworkOkResponse = z.lazy(() => {
  return z.object({
    workspace: successfulResponseWorkspace2.optional(),
  });
});

/**
 * @typedef {RemoveWorkspaceFromPrivateNetworkOkResponse} removeWorkspaceFromPrivateNetworkOkResponse
 * @property {SuccessfulResponseWorkspace2} workspace - The Private API Network `workspace` element type.
 */
export type RemoveWorkspaceFromPrivateNetworkOkResponse = z.infer<
  typeof removeWorkspaceFromPrivateNetworkOkResponse
>;

/**
 * Zod schema for mapping API responses to the RemoveWorkspaceFromPrivateNetworkOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const removeWorkspaceFromPrivateNetworkOkResponseResponse = z.lazy(() => {
  return z
    .object({
      workspace: successfulResponseWorkspace2Response.optional(),
    })
    .transform((data) => ({
      workspace: data['workspace'],
    }));
});

/**
 * Zod schema for mapping the RemoveWorkspaceFromPrivateNetworkOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const removeWorkspaceFromPrivateNetworkOkResponseRequest = z.lazy(() => {
  return z
    .object({
      workspace: successfulResponseWorkspace2Request.optional(),
    })
    .transform((data) => ({
      workspace: data['workspace'],
    }));
});
