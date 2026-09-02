import { z } from 'zod';
import {
  ErrorNameMessageDetailsErrorDetails,
  errorNameMessageDetailsErrorDetails,
  errorNameMessageDetailsErrorDetailsRequest,
  errorNameMessageDetailsErrorDetailsResponse,
} from './error-name-message-details-error-details';

/**
 * Zod schema for the ErrorNameMessageDetailsError model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const errorNameMessageDetailsError = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    message: z.string().optional(),
    details: errorNameMessageDetailsErrorDetails.optional(),
  });
});

/**
 * Information about the error.
 * @typedef {ErrorNameMessageDetailsError} errorNameMessageDetailsError
 * @property {string} name - The error name.
 * @property {string} message - The error message.
 * @property {ErrorNameMessageDetailsErrorDetails} details - Information about the error.
 */
export type ErrorNameMessageDetailsError = z.infer<typeof errorNameMessageDetailsError>;

/**
 * Zod schema for mapping API responses to the ErrorNameMessageDetailsError application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const errorNameMessageDetailsErrorResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      message: z.string().optional(),
      details: errorNameMessageDetailsErrorDetailsResponse.optional(),
    })
    .transform((data) => ({
      name: data['name'],
      message: data['message'],
      details: data['details'],
    }));
});

/**
 * Zod schema for mapping the ErrorNameMessageDetailsError application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const errorNameMessageDetailsErrorRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      message: z.string().optional(),
      details: errorNameMessageDetailsErrorDetailsRequest.optional(),
    })
    .transform((data) => ({
      name: data['name'],
      message: data['message'],
      details: data['details'],
    }));
});
