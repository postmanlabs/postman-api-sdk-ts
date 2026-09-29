import { z } from 'zod';
import {
  WorkspaceAssignmentSummary,
  workspaceAssignmentSummary,
  workspaceAssignmentSummaryRequest,
  workspaceAssignmentSummaryResponse,
} from './workspace-assignment-summary';
import {
  GetSpecVersionTagsMeta,
  getSpecVersionTagsMeta,
  getSpecVersionTagsMetaRequest,
  getSpecVersionTagsMetaResponse,
} from '../../common/get-spec-version-tags-meta';

/**
 * Zod schema for the WorkspaceAssignmentList model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const workspaceAssignmentList = z.lazy(() => {
  return z.object({
    data: z.array(workspaceAssignmentSummary).optional(),
    meta: getSpecVersionTagsMeta.optional(),
  });
});

/**
 * A paginated list of workspaces assigned to a governance group.
 * @typedef {WorkspaceAssignmentList} workspaceAssignmentList
 * @property {WorkspaceAssignmentSummary[]} data - A list of workspaces assigned to the governance group.
 * @property {GetSpecVersionTagsMeta} meta - The response's meta information for paginated results.
 */
export type WorkspaceAssignmentList = z.infer<typeof workspaceAssignmentList>;

/**
 * Zod schema for mapping API responses to the WorkspaceAssignmentList application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceAssignmentListResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(workspaceAssignmentSummaryResponse).optional(),
      meta: getSpecVersionTagsMetaResponse.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the WorkspaceAssignmentList application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceAssignmentListRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(workspaceAssignmentSummaryRequest).optional(),
      meta: getSpecVersionTagsMetaRequest.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});
