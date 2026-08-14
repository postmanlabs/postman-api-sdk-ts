import { z } from 'zod';
import {
  GetAsyncTaskStatusMeta2,
  getAsyncTaskStatusMeta2,
  getAsyncTaskStatusMeta2Request,
  getAsyncTaskStatusMeta2Response,
} from './get-async-task-status-meta-2';
import { Details, details, detailsRequest, detailsResponse } from './details';

/**
 * Zod schema for the GetAsyncCollectionTaskStatus1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAsyncCollectionTaskStatus1 = z.lazy(() => {
  return z.object({
    meta: getAsyncTaskStatusMeta2.optional(),
    details: details.optional(),
    status: z.string().optional(),
  });
});

/**
 * @typedef {GetAsyncCollectionTaskStatus1} getAsyncCollectionTaskStatus1
 * @property {GetAsyncTaskStatusMeta2} meta - The response's non-standard meta information.
 * @property {Details} details - Information about the task's resources.
 * @property {GetAsyncTaskStatusStatus2} status - The task's current status.
 */
export type GetAsyncCollectionTaskStatus1 = z.infer<typeof getAsyncCollectionTaskStatus1>;

/**
 * Zod schema for mapping API responses to the GetAsyncCollectionTaskStatus1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAsyncCollectionTaskStatus1Response = z.lazy(() => {
  return z
    .object({
      meta: getAsyncTaskStatusMeta2Response.optional(),
      details: detailsResponse.optional(),
      status: z.string().optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      details: data['details'],
      status: data['status'],
    }));
});

/**
 * Zod schema for mapping the GetAsyncCollectionTaskStatus1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAsyncCollectionTaskStatus1Request = z.lazy(() => {
  return z
    .object({
      meta: getAsyncTaskStatusMeta2Request.optional(),
      details: detailsRequest.optional(),
      status: z.string().optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      details: data['details'],
      status: data['status'],
    }));
});
