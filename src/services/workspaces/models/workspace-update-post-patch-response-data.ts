import { z } from 'zod';
import {
  WorkspaceUpdateRelatedResourcesData,
  workspaceUpdateRelatedResourcesData,
  workspaceUpdateRelatedResourcesDataRequest,
  workspaceUpdateRelatedResourcesDataResponse,
} from './workspace-update-related-resources-data';

/**
 * Zod schema for the WorkspaceUpdatePostPatchResponseData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const workspaceUpdatePostPatchResponseData = z.lazy(() => {
  return z.object({
    id: z.number().optional(),
    topic: z.string().optional(),
    description: z.string().optional(),
    workspaceId: z.string().optional(),
    createdBy: z.number().optional(),
    updatedBy: z.number().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    category: z.string().optional(),
    isPinned: z.boolean().optional(),
    relatedResources: z.array(workspaceUpdateRelatedResourcesData).max(10).optional(),
  });
});

/**
 * @typedef {WorkspaceUpdatePostPatchResponseData} workspaceUpdatePostPatchResponseData
 * @property {number} id - The workspace update's ID.
 * @property {string} topic - The title of the workspace update.
 * @property {string} description - The content of the workspace update.
 * @property {string} workspaceId - The ID of the workspace in which the workspace update was created.
 * @property {number} createdBy - The user ID of the user that created the workspace update.
 * @property {number} updatedBy - The ID of the user who last updated the workspace update.
 * @property {string} createdAt - The date and time at which the workspace update was created.
 * @property {string} updatedAt - The date and time at which the workspace update was last updated.
 * @property {WorkspaceUpdateCategoryData} category - The update's assigned category.
 * @property {boolean} isPinned - If true, the workspace update is pinned to the top of the workspace updates list.
 * @property {WorkspaceUpdateRelatedResourcesData[]} relatedResources - A list containing the update's related elements. Related elements include links to collections, requests, folders, and saved examples in the update.
 */
export type WorkspaceUpdatePostPatchResponseData = z.infer<
  typeof workspaceUpdatePostPatchResponseData
>;

/**
 * Zod schema for mapping API responses to the WorkspaceUpdatePostPatchResponseData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceUpdatePostPatchResponseDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      topic: z.string().optional(),
      description: z.string().optional(),
      workspaceId: z.string().optional(),
      createdBy: z.number().optional(),
      updatedBy: z.number().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      category: z.string().optional(),
      isPinned: z.boolean().optional(),
      relatedResources: z.array(workspaceUpdateRelatedResourcesDataResponse).max(10).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      topic: data['topic'],
      description: data['description'],
      workspaceId: data['workspaceId'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      category: data['category'],
      isPinned: data['isPinned'],
      relatedResources: data['relatedResources'],
    }));
});

/**
 * Zod schema for mapping the WorkspaceUpdatePostPatchResponseData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceUpdatePostPatchResponseDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      topic: z.string().optional(),
      description: z.string().optional(),
      workspaceId: z.string().optional(),
      createdBy: z.number().optional(),
      updatedBy: z.number().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      category: z.string().optional(),
      isPinned: z.boolean().optional(),
      relatedResources: z.array(workspaceUpdateRelatedResourcesDataRequest).max(10).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      topic: data['topic'],
      description: data['description'],
      workspaceId: data['workspaceId'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      category: data['category'],
      isPinned: data['isPinned'],
      relatedResources: data['relatedResources'],
    }));
});
