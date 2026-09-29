import { z } from 'zod';
import {
  GetWorkspaceActivityFeedUserData,
  getWorkspaceActivityFeedUserData,
  getWorkspaceActivityFeedUserDataRequest,
  getWorkspaceActivityFeedUserDataResponse,
} from './get-workspace-activity-feed-user-data';

/**
 * Zod schema for the WorkspaceActivityFeedData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const workspaceActivityFeedData = z.lazy(() => {
  return z.object({
    workspaceId: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    id: z.number().optional(),
    user: getWorkspaceActivityFeedUserData.optional(),
    action: z.string().optional(),
    elementType: z.string().optional(),
    trigger: z.string().optional(),
    elementId: z.string().optional(),
    elementName: z.string().optional(),
  });
});

/**
 * Information about the workspace's activity.
 * @typedef {WorkspaceActivityFeedData} workspaceActivityFeedData
 * @property {string} workspaceId - The workspace's ID.
 * @property {string} createdAt - The date and time at which the element was created.
 * @property {string} updatedAt - The date and time at which the element was updated.
 * @property {number} id - The activity feed's ID.
 * @property {GetWorkspaceActivityFeedUserData} user - Information about the user that performed the activity.
 * @property {DataAction} action - The action that occurred in the workspace.
 * @property {string} elementType - The element type.
 * @property {string} trigger - The trigger that caused the workspace action (`create`, `update`, or `destroy`).
 * @property {string} elementId - The element's ID.
 * @property {string} elementName - The element's name.
 */
export type WorkspaceActivityFeedData = z.infer<typeof workspaceActivityFeedData>;

/**
 * Zod schema for mapping API responses to the WorkspaceActivityFeedData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceActivityFeedDataResponse = z.lazy(() => {
  return z
    .object({
      workspaceId: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      id: z.number().optional(),
      user: getWorkspaceActivityFeedUserDataResponse.optional(),
      action: z.string().optional(),
      elementType: z.string().optional(),
      trigger: z.string().optional(),
      elementId: z.string().optional(),
      elementName: z.string().optional(),
    })
    .transform((data) => ({
      workspaceId: data['workspaceId'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      id: data['id'],
      user: data['user'],
      action: data['action'],
      elementType: data['elementType'],
      trigger: data['trigger'],
      elementId: data['elementId'],
      elementName: data['elementName'],
    }));
});

/**
 * Zod schema for mapping the WorkspaceActivityFeedData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceActivityFeedDataRequest = z.lazy(() => {
  return z
    .object({
      workspaceId: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      id: z.number().optional(),
      user: getWorkspaceActivityFeedUserDataRequest.optional(),
      action: z.string().optional(),
      elementType: z.string().optional(),
      trigger: z.string().optional(),
      elementId: z.string().optional(),
      elementName: z.string().optional(),
    })
    .transform((data) => ({
      workspaceId: data['workspaceId'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      id: data['id'],
      user: data['user'],
      action: data['action'],
      elementType: data['elementType'],
      trigger: data['trigger'],
      elementId: data['elementId'],
      elementName: data['elementName'],
    }));
});
