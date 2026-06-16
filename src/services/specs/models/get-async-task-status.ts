import { z } from 'zod';
import {
  GetAsyncTaskStatusMeta,
  getAsyncTaskStatusMeta,
  getAsyncTaskStatusMetaRequest,
  getAsyncTaskStatusMetaResponse,
} from './get-async-task-status-meta';
import {
  TaskResources,
  taskResources,
  taskResourcesRequest,
  taskResourcesResponse,
} from './task-resources';
import { GetAsyncTaskStatusStatus, getAsyncTaskStatusStatus } from './get-async-task-status-status';

/**
 * Zod schema for the GetAsyncTaskStatus model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAsyncTaskStatus = z.lazy(() => {
  return z.object({
    meta: getAsyncTaskStatusMeta.optional(),
    details: taskResources.optional(),
    status: getAsyncTaskStatusStatus.optional(),
  });
});

/**
 *
 * @typedef  {GetAsyncTaskStatus} getAsyncTaskStatus
 * @property {GetAsyncTaskStatusMeta} - The response's non-standard meta information.
 * @property {TaskResources} - Information about the task's resources.
 * @property {GetAsyncTaskStatusStatus} - The task's current status.
 */
export type GetAsyncTaskStatus = z.infer<typeof getAsyncTaskStatus>;

/**
 * Zod schema for mapping API responses to the GetAsyncTaskStatus application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAsyncTaskStatusResponse = z.lazy(() => {
  return z
    .object({
      meta: getAsyncTaskStatusMetaResponse.optional(),
      details: taskResourcesResponse.optional(),
      status: getAsyncTaskStatusStatus.optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      details: data['details'],
      status: data['status'],
    }));
});

/**
 * Zod schema for mapping the GetAsyncTaskStatus application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAsyncTaskStatusRequest = z.lazy(() => {
  return z
    .object({
      meta: getAsyncTaskStatusMetaRequest.optional(),
      details: taskResourcesRequest.optional(),
      status: getAsyncTaskStatusStatus.optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      details: data['details'],
      status: data['status'],
    }));
});
