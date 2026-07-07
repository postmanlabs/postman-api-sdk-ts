import { z } from 'zod';
import { details1, details1Request, details1Response } from './details-1';
import {
  taskErrorInformation,
  taskErrorInformationRequest,
  taskErrorInformationResponse,
} from './task-error-information';

/**
 * Zod schema for the GetAsyncTaskStatusDetails model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAsyncTaskStatusDetails = z.lazy(() => {
  return z.union([details1, taskErrorInformation]);
});

/**
 *
 * @typedef  {GetAsyncTaskStatusDetails} getAsyncTaskStatusDetails
 * @property {Details1} - Information about the task's resources.
 * @property {TaskErrorInformation} - Information about the error that occurred during the task's processing.
 */
export type GetAsyncTaskStatusDetails = z.infer<typeof getAsyncTaskStatusDetails>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getAsyncTaskStatusDetailsResponse = z.lazy(() => {
  return z.union([details1Response, taskErrorInformationResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getAsyncTaskStatusDetailsRequest = z.lazy(() => {
  return z.union([details1Request, taskErrorInformationRequest]);
});
