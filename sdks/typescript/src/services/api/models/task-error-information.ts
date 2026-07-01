import { z } from 'zod';
import {
  TaskErrorInformationError,
  taskErrorInformationError,
  taskErrorInformationErrorRequest,
  taskErrorInformationErrorResponse,
} from './task-error-information-error';

/**
 * Zod schema for the TaskErrorInformation model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const taskErrorInformation = z.lazy(() => {
  return z.object({
    error: taskErrorInformationError.optional(),
  });
});

/**
 * Information about the error that occurred during the task's processing.
 * @typedef  {TaskErrorInformation} taskErrorInformation - Information about the error that occurred during the task's processing. - Information about the error that occurred during the task's processing.
 * @property {TaskErrorInformationError}
 */
export type TaskErrorInformation = z.infer<typeof taskErrorInformation>;

/**
 * Zod schema for mapping API responses to the TaskErrorInformation application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const taskErrorInformationResponse = z.lazy(() => {
  return z
    .object({
      error: taskErrorInformationErrorResponse.optional(),
    })
    .transform((data) => ({
      error: data['error'],
    }));
});

/**
 * Zod schema for mapping the TaskErrorInformation application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const taskErrorInformationRequest = z.lazy(() => {
  return z
    .object({
      error: taskErrorInformationErrorRequest.optional(),
    })
    .transform((data) => ({
      error: data['error'],
    }));
});
