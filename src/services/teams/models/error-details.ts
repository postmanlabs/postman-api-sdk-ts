import { z } from 'zod';
import {
  ErrorDetailsError,
  errorDetailsError,
  errorDetailsErrorRequest,
  errorDetailsErrorResponse,
} from './error-details-error';

/**
 * Zod schema for the ErrorDetails model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const errorDetails = z.lazy(() => {
  return z.object({
    error: errorDetailsError.optional(),
  });
});

/**
 * An explanation about the problem.
 * @typedef {ErrorDetails} errorDetails
 * @property {ErrorDetailsError} error - Information about the error.
 */
export type ErrorDetails = z.infer<typeof errorDetails>;

/**
 * Zod schema for mapping API responses to the ErrorDetails application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const errorDetailsResponse = z.lazy(() => {
  return z
    .object({
      error: errorDetailsErrorResponse.optional(),
    })
    .transform((data) => ({
      error: data['error'],
    }));
});

/**
 * Zod schema for mapping the ErrorDetails application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const errorDetailsRequest = z.lazy(() => {
  return z
    .object({
      error: errorDetailsErrorRequest.optional(),
    })
    .transform((data) => ({
      error: data['error'],
    }));
});
