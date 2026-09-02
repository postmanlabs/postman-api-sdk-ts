import { z } from 'zod';
import {
  WorkspaceUpdateData,
  workspaceUpdateData,
  workspaceUpdateDataRequest,
  workspaceUpdateDataResponse,
} from './workspace-update-data';
import {
  GetSpecVersionTagsMeta,
  getSpecVersionTagsMeta,
  getSpecVersionTagsMetaRequest,
  getSpecVersionTagsMetaResponse,
} from '../../common/get-spec-version-tags-meta';

/**
 * Zod schema for the GetWorkspaceUpdates model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getWorkspaceUpdates = z.lazy(() => {
  return z.object({
    data: z.array(workspaceUpdateData).optional(),
    meta: getSpecVersionTagsMeta.optional(),
  });
});

/**
 * @typedef {GetWorkspaceUpdates} getWorkspaceUpdates
 * @property {WorkspaceUpdateData[]} data - A list of workspace updates.
 * @property {GetSpecVersionTagsMeta} meta - The response's meta information for paginated results.
 */
export type GetWorkspaceUpdates = z.infer<typeof getWorkspaceUpdates>;

/**
 * Zod schema for mapping API responses to the GetWorkspaceUpdates application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getWorkspaceUpdatesResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(workspaceUpdateDataResponse).optional(),
      meta: getSpecVersionTagsMetaResponse.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the GetWorkspaceUpdates application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getWorkspaceUpdatesRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(workspaceUpdateDataRequest).optional(),
      meta: getSpecVersionTagsMetaRequest.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});
