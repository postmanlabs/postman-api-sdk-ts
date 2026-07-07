import { z } from 'zod';
import {
  WorkspaceUpdateRelatedResourcesData,
  workspaceUpdateRelatedResourcesData,
  workspaceUpdateRelatedResourcesDataRequest,
  workspaceUpdateRelatedResourcesDataResponse,
} from './workspace-update-related-resources-data';

/**
 * Zod schema for the UpdateWorkspaceUpdate model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateWorkspaceUpdate = z.lazy(() => {
  return z.object({
    description: z.string().min(1).max(20000),
    topic: z.string().min(1).max(255),
    category: z.string(),
    isPinned: z.boolean().optional(),
    relatedResources: z.array(workspaceUpdateRelatedResourcesData).max(10).optional(),
  });
});

/**
 *
 * @typedef  {UpdateWorkspaceUpdate} updateWorkspaceUpdate
 * @property {string} - The content of the workspace update.
 * @property {string} - The title of the workspace update.
 * @property {WorkspaceUpdateCategoryData} - The update's assigned category.
 * @property {boolean} - If true, the workspace update is pinned to the top of the workspace updates list.
 * @property {WorkspaceUpdateRelatedResourcesData[]} - A list containing the update's related elements. Related elements include links to collections, requests, folders, and saved examples in the update.
 */
export type UpdateWorkspaceUpdate = z.infer<typeof updateWorkspaceUpdate>;

/**
 * Zod schema for mapping API responses to the UpdateWorkspaceUpdate application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateWorkspaceUpdateResponse = z.lazy(() => {
  return z
    .object({
      description: z.string().min(1).max(20000),
      topic: z.string().min(1).max(255),
      category: z.string(),
      isPinned: z.boolean().optional(),
      relatedResources: z.array(workspaceUpdateRelatedResourcesDataResponse).max(10).optional(),
    })
    .transform((data) => ({
      description: data['description'],
      topic: data['topic'],
      category: data['category'],
      isPinned: data['isPinned'],
      relatedResources: data['relatedResources'],
    }));
});

/**
 * Zod schema for mapping the UpdateWorkspaceUpdate application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateWorkspaceUpdateRequest = z.lazy(() => {
  return z
    .object({
      description: z.string().min(1).max(20000),
      topic: z.string().min(1).max(255),
      category: z.string(),
      isPinned: z.boolean().optional(),
      relatedResources: z.array(workspaceUpdateRelatedResourcesDataRequest).max(10).optional(),
    })
    .transform((data) => ({
      description: data['description'],
      topic: data['topic'],
      category: data['category'],
      isPinned: data['isPinned'],
      relatedResources: data['relatedResources'],
    }));
});
