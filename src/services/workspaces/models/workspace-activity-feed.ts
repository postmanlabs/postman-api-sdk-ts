import { z } from 'zod';
import {
  WorkspaceActivityFeedData,
  workspaceActivityFeedData,
  workspaceActivityFeedDataRequest,
  workspaceActivityFeedDataResponse,
} from './workspace-activity-feed-data';
import {
  GetSpecVersionTagsMeta,
  getSpecVersionTagsMeta,
  getSpecVersionTagsMetaRequest,
  getSpecVersionTagsMetaResponse,
} from '../../common/get-spec-version-tags-meta';

/**
 * Zod schema for the WorkspaceActivityFeed model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const workspaceActivityFeed = z.lazy(() => {
  return z.object({
    data: z.array(workspaceActivityFeedData).optional(),
    meta: getSpecVersionTagsMeta.optional(),
  });
});

/**
 * @typedef {WorkspaceActivityFeed} workspaceActivityFeed
 * @property {WorkspaceActivityFeedData[]} data
 * @property {GetSpecVersionTagsMeta} meta
 */
export type WorkspaceActivityFeed = z.infer<typeof workspaceActivityFeed>;

/**
 * Zod schema for mapping API responses to the WorkspaceActivityFeed application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceActivityFeedResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(workspaceActivityFeedDataResponse).optional(),
      meta: getSpecVersionTagsMetaResponse.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the WorkspaceActivityFeed application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceActivityFeedRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(workspaceActivityFeedDataRequest).optional(),
      meta: getSpecVersionTagsMetaRequest.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});
