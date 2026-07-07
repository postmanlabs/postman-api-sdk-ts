import { z } from 'zod';
import {
  WorkspaceUpdateRelatedResourcesData,
  workspaceUpdateRelatedResourcesData,
  workspaceUpdateRelatedResourcesDataRequest,
  workspaceUpdateRelatedResourcesDataResponse,
} from './workspace-update-related-resources-data';

/**
 * Zod schema for the CreateWorkspaceUpdate model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createWorkspaceUpdate = z.lazy(() => {
  return z.object({
    description: z.string().min(1).max(20000),
    topic: z.string().min(1).max(255),
    category: z.string(),
    relatedResources: z.array(workspaceUpdateRelatedResourcesData).max(10).optional(),
  });
});

/**
 *
 * @typedef  {CreateWorkspaceUpdate} createWorkspaceUpdate
 * @property {string} - The content of the workspace update.
 * @property {string} - The title of the workspace update.
 * @property {WorkspaceUpdateCategoryData} - The update's assigned category.
 * @property {WorkspaceUpdateRelatedResourcesData[]} - A list containing the update's related elements. Related elements include links to collections, requests, folders, and saved examples in the update.
 */
export type CreateWorkspaceUpdate = z.infer<typeof createWorkspaceUpdate>;

/**
 * Zod schema for mapping API responses to the CreateWorkspaceUpdate application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createWorkspaceUpdateResponse = z.lazy(() => {
  return z
    .object({
      description: z.string().min(1).max(20000),
      topic: z.string().min(1).max(255),
      category: z.string(),
      relatedResources: z.array(workspaceUpdateRelatedResourcesDataResponse).max(10).optional(),
    })
    .transform((data) => ({
      description: data['description'],
      topic: data['topic'],
      category: data['category'],
      relatedResources: data['relatedResources'],
    }));
});

/**
 * Zod schema for mapping the CreateWorkspaceUpdate application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createWorkspaceUpdateRequest = z.lazy(() => {
  return z
    .object({
      description: z.string().min(1).max(20000),
      topic: z.string().min(1).max(255),
      category: z.string(),
      relatedResources: z.array(workspaceUpdateRelatedResourcesDataRequest).max(10).optional(),
    })
    .transform((data) => ({
      description: data['description'],
      topic: data['topic'],
      category: data['category'],
      relatedResources: data['relatedResources'],
    }));
});
