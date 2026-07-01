import { z } from 'zod';
import {
  SuccessfulResponseWorkspace3,
  successfulResponseWorkspace3,
  successfulResponseWorkspace3Request,
  successfulResponseWorkspace3Response,
} from './successful-response-workspace-3';

/**
 * Zod schema for the RemoveWorkspaceFromPrivateNetworkOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const removeWorkspaceFromPrivateNetworkOkResponse = z.lazy(() => {
  return z.object({
    workspace: successfulResponseWorkspace3.optional(),
  });
});

/**
 *
 * @typedef  {RemoveWorkspaceFromPrivateNetworkOkResponse} removeWorkspaceFromPrivateNetworkOkResponse
 * @property {SuccessfulResponseWorkspace3} - The Private API Network `workspace` element type.
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
      workspace: successfulResponseWorkspace3Response.optional(),
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
      workspace: successfulResponseWorkspace3Request.optional(),
    })
    .transform((data) => ({
      workspace: data['workspace'],
    }));
});
