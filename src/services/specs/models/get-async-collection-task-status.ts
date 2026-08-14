import { z } from 'zod';
import {
  getAsyncCollectionTaskStatus1,
  getAsyncCollectionTaskStatus1Request,
  getAsyncCollectionTaskStatus1Response,
} from './get-async-collection-task-status-1';
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
  return z.union([getAsyncCollectionTaskStatus1, asyncTaskFailed]);
});

/**
 * @typedef {GetAsyncCollectionTaskStatus} getAsyncCollectionTaskStatus
 */
export type GetAsyncCollectionTaskStatus = z.infer<typeof getAsyncCollectionTaskStatus>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getAsyncCollectionTaskStatusResponse = z.lazy(() => {
  return z.union([getAsyncCollectionTaskStatus1Response, asyncTaskFailedResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getAsyncCollectionTaskStatusRequest = z.lazy(() => {
  return z.union([getAsyncCollectionTaskStatus1Request, asyncTaskFailedRequest]);
});
