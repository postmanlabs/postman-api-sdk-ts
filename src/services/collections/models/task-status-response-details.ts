import { z } from 'zod';
import {
  DetailsError,
  detailsError,
  detailsErrorRequest,
  detailsErrorResponse,
} from './details-error';

/**
 * Zod schema for the TaskStatusResponseDetails model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const taskStatusResponseDetails = z.lazy(() => {
  return z.object({
    error: detailsError.optional(),
  });
});

/**
 * If the task failed, an object containing information about the error.
 * @typedef {TaskStatusResponseDetails} taskStatusResponseDetails
 * @property {DetailsError} error
 */
export type TaskStatusResponseDetails = z.infer<typeof taskStatusResponseDetails>;

/**
 * Zod schema for mapping API responses to the TaskStatusResponseDetails application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const taskStatusResponseDetailsResponse = z.lazy(() => {
  return z
    .object({
      error: detailsErrorResponse.optional(),
    })
    .transform((data) => ({
      error: data['error'],
    }));
});

/**
 * Zod schema for mapping the TaskStatusResponseDetails application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const taskStatusResponseDetailsRequest = z.lazy(() => {
  return z
    .object({
      error: detailsErrorRequest.optional(),
    })
    .transform((data) => ({
      error: data['error'],
    }));
});
