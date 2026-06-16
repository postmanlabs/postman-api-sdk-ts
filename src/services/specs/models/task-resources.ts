import { z } from 'zod';
import {
  TaskResourcesResources,
  taskResourcesResources,
  taskResourcesResourcesRequest,
  taskResourcesResourcesResponse,
} from './task-resources-resources';

/**
 * Zod schema for the TaskResources model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const taskResources = z.lazy(() => {
  return z.object({
    resources: z.array(taskResourcesResources).optional(),
  });
});

/**
 * Information about the task's resources.
 * @typedef  {TaskResources} taskResources - Information about the task's resources. - Information about the task's resources.
 * @property {TaskResourcesResources[]}
 */
export type TaskResources = z.infer<typeof taskResources>;

/**
 * Zod schema for mapping API responses to the TaskResources application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const taskResourcesResponse = z.lazy(() => {
  return z
    .object({
      resources: z.array(taskResourcesResourcesResponse).optional(),
    })
    .transform((data) => ({
      resources: data['resources'],
    }));
});

/**
 * Zod schema for mapping the TaskResources application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const taskResourcesRequest = z.lazy(() => {
  return z
    .object({
      resources: z.array(taskResourcesResourcesRequest).optional(),
    })
    .transform((data) => ({
      resources: data['resources'],
    }));
});
