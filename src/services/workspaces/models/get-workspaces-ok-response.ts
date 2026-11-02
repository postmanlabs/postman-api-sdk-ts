import { z } from 'zod';
import {
  GetWorkspacesWorkspaceData,
  getWorkspacesWorkspaceData,
  getWorkspacesWorkspaceDataRequest,
  getWorkspacesWorkspaceDataResponse,
} from './get-workspaces-workspace-data';
import {
  SuccessfulResponseMeta2,
  successfulResponseMeta2,
  successfulResponseMeta2Request,
  successfulResponseMeta2Response,
} from './successful-response-meta-2';

/**
 * Zod schema for the GetWorkspacesOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getWorkspacesOkResponse = z.lazy(() => {
  return z.object({
    workspaces: z.array(getWorkspacesWorkspaceData).optional(),
    meta: successfulResponseMeta2.optional(),
  });
});

/**
 * @typedef {GetWorkspacesOkResponse} getWorkspacesOkResponse
 * @property {GetWorkspacesWorkspaceData[]} workspaces - A list of workspaces.
 * @property {SuccessfulResponseMeta2} meta - The response's meta information for paginated results. This object only returns if you pass the `limit` query parameter.
 */
export type GetWorkspacesOkResponse = z.infer<typeof getWorkspacesOkResponse>;

/**
 * Zod schema for mapping API responses to the GetWorkspacesOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getWorkspacesOkResponseResponse = z.lazy(() => {
  return z
    .object({
      workspaces: z.array(getWorkspacesWorkspaceDataResponse).optional(),
      meta: successfulResponseMeta2Response.optional(),
    })
    .transform((data) => ({
      workspaces: data['workspaces'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the GetWorkspacesOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getWorkspacesOkResponseRequest = z.lazy(() => {
  return z
    .object({
      workspaces: z.array(getWorkspacesWorkspaceDataRequest).optional(),
      meta: successfulResponseMeta2Request.optional(),
    })
    .transform((data) => ({
      workspaces: data['workspaces'],
      meta: data['meta'],
    }));
});
