import { z } from 'zod';
import {
  getAsyncTaskStatus,
  getAsyncTaskStatusRequest,
  getAsyncTaskStatusResponse,
} from './get-async-task-status';
import {
  asyncTaskFailed,
  asyncTaskFailedRequest,
  asyncTaskFailedResponse,
} from './async-task-failed';

/**
 * Zod schema for the GetAsyncCollectionTaskStatus model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAsyncCollectionTaskStatus = z.lazy(() => {
  return z.union([getAsyncTaskStatus, asyncTaskFailed]);
});

/**
 *
 * @typedef  {GetAsyncCollectionTaskStatus} getAsyncCollectionTaskStatus
 * @property {GetAsyncTaskStatus}
 * @property {AsyncTaskFailed}
 */
export type GetAsyncCollectionTaskStatus = z.infer<typeof getAsyncCollectionTaskStatus>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getAsyncCollectionTaskStatusResponse = z.lazy(() => {
  return z.union([getAsyncTaskStatusResponse, asyncTaskFailedResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getAsyncCollectionTaskStatusRequest = z.lazy(() => {
  return z.union([getAsyncTaskStatusRequest, asyncTaskFailedRequest]);
});
