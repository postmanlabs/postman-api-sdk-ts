import { z } from 'zod';
import { TaskStatusResponseStatus, taskStatusResponseStatus } from './task-status-response-status';
import {
  TaskStatusResponseDetails,
  taskStatusResponseDetails,
  taskStatusResponseDetailsRequest,
  taskStatusResponseDetailsResponse,
} from './task-status-response-details';

/**
 * Zod schema for the TaskStatusResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const taskStatusResponse = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    status: taskStatusResponseStatus.optional(),
    details: taskStatusResponseDetails.optional(),
  });
});

/**
 *
 * @typedef  {TaskStatusResponse} taskStatusResponse
 * @property {string} - The task's ID.
 * @property {TaskStatusResponseStatus} - The task's current status.
 * @property {TaskStatusResponseDetails} - If the task failed, an object containing information about the error.
 */
export type TaskStatusResponse = z.infer<typeof taskStatusResponse>;

/**
 * Zod schema for mapping API responses to the TaskStatusResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const taskStatusResponseResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      status: taskStatusResponseStatus.optional(),
      details: taskStatusResponseDetailsResponse.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      status: data['status'],
      details: data['details'],
    }));
});

/**
 * Zod schema for mapping the TaskStatusResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const taskStatusResponseRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      status: taskStatusResponseStatus.optional(),
      details: taskStatusResponseDetailsRequest.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      status: data['status'],
      details: data['details'],
    }));
});
