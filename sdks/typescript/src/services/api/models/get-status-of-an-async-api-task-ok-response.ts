import { z } from 'zod';
import {
  GetAsyncTaskStatusMeta1,
  getAsyncTaskStatusMeta1,
  getAsyncTaskStatusMeta1Request,
  getAsyncTaskStatusMeta1Response,
} from './get-async-task-status-meta-1';
import {
  GetAsyncTaskStatusStatus1,
  getAsyncTaskStatusStatus1,
} from './get-async-task-status-status-1';
import {
  GetAsyncTaskStatusDetails,
  getAsyncTaskStatusDetails,
  getAsyncTaskStatusDetailsRequest,
  getAsyncTaskStatusDetailsResponse,
} from './get-async-task-status-details';

/**
 * Zod schema for the GetStatusOfAnAsyncApiTaskOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getStatusOfAnAsyncApiTaskOkResponse = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    meta: getAsyncTaskStatusMeta1.optional(),
    status: getAsyncTaskStatusStatus1.optional(),
    details: getAsyncTaskStatusDetails.optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
  });
});

/**
 *
 * @typedef  {GetStatusOfAnAsyncApiTaskOkResponse} getStatusOfAnAsyncApiTaskOkResponse
 * @property {string} - The task's ID.
 * @property {GetAsyncTaskStatusMeta1} - The response's non-standard meta information.
 * @property {GetAsyncTaskStatusStatus1} - The task's current status.
 * @property {GetAsyncTaskStatusDetails}
 * @property {string} - The date and time at which the task was created.
 * @property {string} - The date and time at which the task was last updated.
 */
export type GetStatusOfAnAsyncApiTaskOkResponse = z.infer<
  typeof getStatusOfAnAsyncApiTaskOkResponse
>;

/**
 * Zod schema for mapping API responses to the GetStatusOfAnAsyncApiTaskOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getStatusOfAnAsyncApiTaskOkResponseResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      meta: getAsyncTaskStatusMeta1Response.optional(),
      status: getAsyncTaskStatusStatus1.optional(),
      details: getAsyncTaskStatusDetailsResponse.optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      meta: data['meta'],
      status: data['status'],
      details: data['details'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    }));
});

/**
 * Zod schema for mapping the GetStatusOfAnAsyncApiTaskOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getStatusOfAnAsyncApiTaskOkResponseRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      meta: getAsyncTaskStatusMeta1Request.optional(),
      status: getAsyncTaskStatusStatus1.optional(),
      details: getAsyncTaskStatusDetailsRequest.optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      meta: data['meta'],
      status: data['status'],
      details: data['details'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    }));
});
